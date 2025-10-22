# User/Provider Navbar Testing Guide

## 🎯 Quick Test Steps

### Prerequisites
1. **Clear your browser cache and localStorage** (Important!)
   - Open DevTools (F12)
   - Go to Application tab → Storage → Clear site data
   - Or use incognito/private window

2. **Server is running at**: http://localhost:3001

---

## Test 1: User Login Flow ✅

### Steps:
1. **Go to homepage**: http://localhost:3001
2. **Click "Sign in" button** in the navbar (top right)
3. **Select "User"** from the dropdown menu
4. **You should see**:
   - Login page with badge: "Logging in as: user"
   - Email and password fields

5. **Enter any credentials**:
   - Email: test@example.com
   - Password: password123

6. **Click "Log in"**

### Expected Results:
- ✅ Redirects to homepage (/)
- ✅ Navbar shows: **Home, Bundle Offer, Service, Order, Notification**
- ✅ Profile picture appears in top right
- ✅ Console logs show: `userType: "user"`

---

## Test 2: Provider Login Flow ✅

### Steps:
1. **Log out first** (if logged in):
   - Click profile picture → Logout

2. **Go to homepage**: http://localhost:3001
3. **Click "Sign in" button** in the navbar
4. **Select "Provider"** from the dropdown menu
5. **You should see**:
   - Login page with badge: "Logging in as: provider"

6. **Enter any credentials**:
   - Email: provider@example.com
   - Password: password123

7. **Click "Log in"**

### Expected Results:
- ✅ Redirects to **/business**
- ✅ Navbar shows **ONLY 2 buttons**: **Home** and **Request**
- ✅ Profile picture appears in top right
- ✅ Console logs show: `userType: "provider"`
- ✅ Business page loads successfully

---

## Test 3: Navigation Testing 🔗

### For Users:
1. Login as User
2. Test all navbar buttons:
   - ✅ Home → Goes to /
   - ✅ Bundle Offer → Opens modal
   - ✅ Service → Opens dropdown menu
   - ✅ Order → Should work
   - ✅ Notification → Opens notification modal
   - ✅ Profile picture → Opens dropdown with Profile/Logout

### For Providers:
1. Login as Provider
2. Test navbar buttons:
   - ✅ Home → Goes to /
   - ✅ Request → Goes to /Request-Section
   - ✅ Profile picture → Opens dropdown with Profile/Logout
   - ✅ My Profile → Goes to /Provider-Profile

---

## Test 4: Profile Pages 👤

### User Profile:
1. Login as User
2. Click profile picture → "My Profile"
3. Should go to /userProfile

### Provider Profile:
1. Login as Provider
2. Click profile picture → "My Profile"
3. Should go to /Provider-Profile
4. Shows provider profile page

---

## Test 5: Persistent Login 💾

### Steps:
1. Login as User
2. **Refresh the page (F5)**
3. Expected: Still logged in, navbar shows user navbar

4. Login as Provider
5. **Refresh the page (F5)**
6. Expected: Still logged in, navbar shows provider navbar

---

## Test 6: Mobile Responsiveness 📱

### Steps:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Set to mobile view (iPhone 12, etc.)

### For Non-Logged In:
- ✅ Hamburger menu appears
- ✅ "Sign in as User" and "Sign in as Provider" options visible

### For User:
- ✅ All user navbar items in mobile menu
- ✅ Profile and Logout at bottom

### For Provider:
- ✅ Only Home and Request buttons
- ✅ Profile and Logout at bottom

---

## Troubleshooting 🔧

### Issue: Navbar not changing after login

**Solution 1: Clear localStorage**
```javascript
// In browser console (F12):
localStorage.clear();
window.location.reload();
```

**Solution 2: Check Console Logs**
Look for these debug messages:
```
NavbarWrapper - isAuthenticated: true
NavbarWrapper - userType: "provider"
Rendering ProviderNavbar
```

### Issue: Can't see dropdown menu

**Solution**: The dropdown might be using wrong state. Check:
- Sign-in dropdown should use `isSignInMenuOpen`
- Service dropdown should use `isServiceOpen`

### Issue: Redirect not working

**Solution**: Check console for errors
- Provider should redirect to /business
- User should redirect to /

---

## Debug Console Commands 🐛

Open browser console (F12) and try these:

```javascript
// Check current auth state
JSON.parse(localStorage.getItem('user'))
localStorage.getItem('userType')

// Check Redux state (if you have Redux DevTools)
// Look for: state.auth.userType

// Force login as User
localStorage.setItem('userType', 'user')
localStorage.setItem('user', '{"id":"1","name":"TestUser","email":"test@test.com"}')
window.location.reload()

// Force login as Provider
localStorage.setItem('userType', 'provider')
localStorage.setItem('user', '{"id":"2","name":"TestProvider","email":"provider@test.com"}')
window.location.reload()

// Logout
localStorage.clear()
window.location.reload()
```

---

## Success Criteria ✅

All tests pass if:

1. ✅ User login shows **5 navbar buttons** (Home, Bundle Offer, Service, Order, Notification)
2. ✅ Provider login shows **2 navbar buttons** (Home, Request)
3. ✅ Correct redirect after login (User→/, Provider→/business)
4. ✅ Login persists after page refresh
5. ✅ Console logs show correct userType
6. ✅ Profile dropdown works for both types
7. ✅ Logout clears state and shows default navbar
8. ✅ Provider Request button goes to /Request-Section
9. ✅ Provider Profile button goes to /Provider-Profile

---

## File Changes Summary 📝

### Modified Files:
- `redux/slices/authSlice.js` - Added userType field
- `hooks/useAuth.js` - Exposed userType
- `components/Auth/LoginPage/LoginForm.jsx` - Reads userType from URL, passes to login
- `components/User/LandingPage/Navbar.jsx` - Fixed sign-in dropdown state
- `app/layout.js` - Uses NavbarWrapper instead of Navbar

### New Files:
- `components/NavbarWrapper.jsx` - Routes to correct navbar
- `components/Provider/ProviderNavbar.jsx` - Provider-specific navbar
- `app/provider/requests/page.jsx` - Provider requests page
- `app/provider/profile/page.jsx` - Provider profile page

---

## Next Steps After Testing 🚀

If tests pass:
1. Remove console.log debug statements
2. Build provider request management system
3. Add real authentication with backend API
4. Implement role-based route protection
5. Create provider dashboard

---

## Contact & Support

If something isn't working:
1. Check browser console for errors
2. Verify all files are saved
3. Clear cache and localStorage
4. Restart dev server: `npm run dev`
5. Check that you're on the right port (3001 not 3000)

**Server URL**: http://localhost:3001
