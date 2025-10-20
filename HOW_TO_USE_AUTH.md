# How to Use Authentication in Your Naibrly App

## Overview
I've set up a simple authentication system using React Context API (no Redux needed!). This manages your app's login/logout state without requiring a backend.

## What's Been Implemented

### 1. **AuthContext** (`/context/AuthContext.jsx`)
This is the central state management for authentication. It provides:
- `isAuthenticated` - Boolean showing if user is logged in
- `user` - Object containing user data (name, email, etc.)
- `isLoading` - Boolean for loading state
- `login(userData)` - Function to log in a user
- `logout()` - Function to log out
- `updateUser(data)` - Function to update user profile

### 2. **Updated Components**

#### **Navbar** (`/components/User/LandingPage/Navbar.jsx`)
- Shows "Sign in" button when NOT logged in
- Shows user profile picture and name when logged in
- Has a dropdown menu with "My Profile" and "Logout" options

#### **Hero Section** (`/components/User/LandingPage/Hero.jsx`)
- Shows generic welcome message when NOT logged in
- Shows personalized "Welcome back, [Name]!" when logged in

#### **LoginForm** (`/components/Auth/LoginPage/LoginForm.jsx`)
- Now has working login functionality
- Currently uses mock login (simulates backend)
- Redirects to homepage after successful login

## How to Use in Any Component

### Step 1: Import the hook
```javascript
import { useAuth } from '@/context/AuthContext';
```

### Step 2: Use in your component
```javascript
export default function YourComponent() {
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

## Examples

### Example 1: Check if user is logged in
```javascript
const { isAuthenticated } = useAuth();

if (isAuthenticated) {
  // Show protected content
} else {
  // Show login prompt
}
```

### Example 2: Get user information
```javascript
const { user } = useAuth();

console.log(user.name);  // User's name
console.log(user.email); // User's email
```

### Example 3: Log in a user (when you add backend)
```javascript
const { login } = useAuth();

const handleLogin = async (email, password) => {
  try {
    // Call your backend API
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    const userData = await response.json();

    // Save user to state
    login(userData);

    // Redirect
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

### Example 4: Log out a user
```javascript
const { logout } = useAuth();

const handleLogout = () => {
  logout();
  router.push('/');
};
```

## Testing It Out

### To test the login functionality:

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Go to the login page:**
   - Navigate to `http://localhost:3000/Login`

3. **Enter any email and password:**
   - Email: `test@example.com`
   - Password: `anything` (it's mock login, so any password works)

4. **Click "Log in"**
   - You'll be redirected to the homepage
   - The Navbar will now show your profile picture and email username
   - The Hero section will say "Welcome back, test!"

5. **To log out:**
   - Click your profile in the Navbar
   - Click "Logout"

## When You Add a Backend

When you're ready to connect to a real backend, update the `handleLogin` function in:
- `/components/Auth/LoginPage/LoginForm.jsx`

Replace this part:
```javascript
// CURRENT (Mock):
setTimeout(() => {
  const mockUser = {
    id: '1',
    name: email.split('@')[0],
    email: email,
  };
  login(mockUser);
}, 1000);
```

With this:
```javascript
// FUTURE (Real API):
const response = await fetch('YOUR_API_URL/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});

const userData = await response.json();

if (response.ok) {
  login(userData);
  router.push('/');
} else {
  // Show error message
  alert('Login failed');
}
```

## User Data Structure

The user object stored in AuthContext has this structure:
```javascript
{
  id: '1',              // User ID
  name: 'John',         // Display name
  email: 'john@example.com',
  profileImage: null,   // URL to profile image
  role: 'user'          // or 'provider'
}
```

## Where Authentication State is Stored

- **During session:** In React state (memory)
- **Persistent:** In localStorage (survives page refresh)
- **Key:** `'user'` in localStorage

## Protecting Routes (Optional)

If you want to protect certain pages (require login), create a wrapper component:

```javascript
// /components/ProtectedRoute.jsx
'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/Login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return null;

  return children;
}
```

Then use it in any page:
```javascript
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>This page requires login</div>
    </ProtectedRoute>
  );
}
```

## Benefits of This Approach

✅ No Redux needed - simpler to understand
✅ No extra dependencies to install
✅ Works perfectly with Next.js App Router
✅ Easy to upgrade to Redux/Zustand later if needed
✅ Persists across page refreshes (localStorage)
✅ Ready for backend integration

## Questions?

If you need help or want to add features like:
- Password reset
- Email verification
- OAuth (Google/Apple login)
- JWT token management
- Protected routes
- Role-based permissions

Just ask! This foundation makes all of those easy to add later.
