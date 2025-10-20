# Example: How to Add Authentication to SignupForm

Here's how you can update your SignupForm component to use the authentication context (similar to what I did with LoginForm).

## Update SignupForm.jsx

Add these imports at the top:
```javascript
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
```

Add these hooks inside your component:
```javascript
const { login } = useAuth();
const router = useRouter();
const [isLoading, setIsLoading] = useState(false);
```

Create a signup handler:
```javascript
const handleSignup = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    setIsLoading(false);
    return;
  }

  // MOCK SIGNUP - Replace with your actual API call
  setTimeout(() => {
    // Create user object from form data
    const newUser = {
      id: Date.now().toString(), // Generate temporary ID
      name: `${firstName} ${lastName}`,
      email: email,
      phone: phone,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      profileImage: null,
      role: 'user'
    };

    // Log the user in automatically after signup
    login(newUser);

    setIsLoading(false);

    // Redirect to home page
    router.push('/');

    // Show success message
    alert('Account created successfully!');
  }, 1000);
};
```

Update your form tag:
```javascript
<form onSubmit={handleSignup}>
  {/* All your form inputs */}
</form>
```

Update your submit button:
```javascript
<Button
  type="submit"
  disabled={isLoading || !email || !password || !firstName || !lastName}
  className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2.5 rounded-md font-medium disabled:opacity-50"
>
  {isLoading ? 'Creating account...' : 'Create account'}
</Button>
```

## When You Have a Backend

Replace the mock signup with a real API call:

```javascript
const handleSignup = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await fetch('YOUR_API_URL/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        password,
        address,
        city,
        state,
        zipCode,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Automatically log the user in
      login(data.user);

      // Redirect to home
      router.push('/');
    } else {
      // Show error message
      alert(data.message || 'Signup failed');
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('An error occurred. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
```

## Full Example

Here's what the top of your SignupForm.jsx should look like:

```javascript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// ... other imports

export default function SignupForm() {
  // Form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // ... other states

  // Auth and navigation
  const { login } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsLoading(true);

    // Your signup logic here
    // ...
  };

  return (
    <form onSubmit={handleSignup}>
      {/* Your form fields */}
    </form>
  );
}
```

That's it! Now your signup form will work just like the login form.
