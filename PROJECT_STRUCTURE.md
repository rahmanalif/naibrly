# Naibrly Project Structure

## Overview
This document describes the organization and structure of the Naibrly service platform application built with Next.js 15.

---

## Directory Structure

```
naibrly/
├── app/                          # Next.js App Router (Pages & Routes)
├── components/                   # React Components
├── context/                      # React Context (State Management)
├── hooks/                        # Custom React Hooks
├── lib/                          # Utility Functions & Helpers
├── public/                       # Static Assets
├── .claude/                      # Claude AI Configuration
├── node_modules/                 # Dependencies
└── Configuration Files
```

---

## 📁 App Directory (Routes)

The `app/` directory contains all route pages using Next.js App Router with route groups.

### Route Groups

#### `(auth)/` - Authentication Routes
- `/Login` - User & Provider login page
- `/Signup` - Registration page

#### `(provider)/` - Provider/Business Routes
- `/business` - Provider landing page with business information

#### `(user)/` - User Routes
- `/LandingPageAfterLogin` - User dashboard after login
- `/LandingService` - Service listing page
- `/Naibrly-landingPage` - Alternative landing page
- `/repairs-and-maintenance` - Repair services detail page
- `/Safety` - Safety information page
- `/terms-of-use` - Terms of service page

### Key Files
- `app/layout.js` - Root layout with AuthProvider wrapper
- `app/page.js` - Homepage (landing page)
- `app/globals.css` - Global styles and Tailwind imports

---

## 🧩 Components Directory

Organized by user role and feature.

```
components/
├── ui/                           # Base UI Components (shadcn-style)
│   ├── button.jsx
│   ├── input.jsx
│   ├── card.jsx
│   ├── select.jsx
│   ├── textarea.jsx
│   ├── checkbox.jsx
│   ├── badge.jsx
│   └── navigation-menu.jsx
│
├── Auth/                         # Authentication Components
│   ├── LoginPage/
│   │   └── LoginForm.jsx
│   └── SignupPage/
│       └── SignupForm.jsx
│
├── Provider/                     # Provider/Business Components
│   └── Business/
│       ├── Hero.jsx              # Business landing hero
│       ├── Middle.jsx            # Middle section
│       ├── LowerMiddle.jsx       # Lower middle section
│       ├── UpperFooter.jsx       # Pre-footer section
│       └── ProCommunity.jsx      # Pro community section
│
└── User/                         # User-specific Components
    ├── LandingPage/              # Main landing page components
    │   ├── Navbar.jsx            # Main navigation (with mobile menu)
    │   ├── Hero.jsx              # Hero section
    │   ├── Services.jsx          # Services showcase
    │   ├── Mobileapp.jsx         # Mobile app promotion
    │   ├── Review.jsx            # Reviews section
    │   ├── Footer.jsx            # Footer
    │   └── NavBarWithLogin.jsx   # Alternative navbar (consider merging)
    │
    ├── landing-page-after-login/ # Post-login dashboard
    │   ├── Hero.jsx
    │   ├── PlumberInfo.jsx
    │   └── Review.jsx
    │
    ├── LandingService/           # Service listing components
    │   ├── Hero.jsx
    │   ├── PlumberProfile.jsx
    │   └── PlumberReviews.jsx
    │
    ├── Modals/                   # Modal components
    │   ├── WithoutSignUpModal.jsx    # Sign-in modal
    │   ├── BundleOfferModal.jsx      # Bundle offer modal
    │   └── NotificationModal.jsx     # Notifications modal
    │
    ├── Naibrly-landingPage/      # Alternative landing
    │   ├── Hero.jsx
    │   └── Provider.jsx
    │
    ├── repairs-and-maintenance/  # Repair service components
    │   ├── CaptainRooterProfile.jsx
    │   ├── ServicesOffered.jsx
    │   └── ReviewsSection.jsx
    │
    ├── Safety/                   # Safety page components
    │   ├── Hero.jsx
    │   ├── Middle.jsx
    │   └── End.jsx
    │
    └── terms-of-use/             # Terms page components
        └── Text.jsx
```

### Component Naming Convention
- **PascalCase** for component files (e.g., `LoginForm.jsx`)
- **kebab-case** for feature directories (e.g., `landing-page-after-login/`)
- Descriptive names indicating purpose (e.g., `BundleOfferModal.jsx` not `Modal1.jsx`)

---

## 🔌 Context Directory

State management using React Context API.

```
context/
└── AuthContext.jsx               # Authentication state management
    ├── AuthProvider              # Context provider component
    ├── useAuth() hook            # Custom hook to access auth state
    ├── State:
    │   ├── isAuthenticated       # Boolean: user logged in status
    │   ├── user                  # Object: user data
    │   └── isLoading             # Boolean: loading state
    └── Methods:
        ├── login(userData)       # Set user as authenticated
        ├── logout()              # Clear authentication
        └── updateUser(data)      # Update user profile
```

### Usage Example
```javascript
import { useAuth } from '@/context/AuthContext';

function MyComponent() {
  const { isAuthenticated, user, login, logout } = useAuth();

  // Use auth state...
}
```

---

## 🪝 Hooks Directory

Custom React hooks for reusable logic.

```
hooks/
├── index.js                      # Central export point
└── useAuth.js                    # Re-export of useAuth from context
```

### Adding New Hooks
Create new hook files in this directory and export them from `index.js`.

Example:
```javascript
// hooks/useDebounce.js
export function useDebounce(value, delay) {
  // Implementation...
}

// hooks/index.js
export { useAuth } from './useAuth';
export { useDebounce } from './useDebounce';
```

---

## 📚 Lib Directory

Utility functions, helpers, and constants.

```
lib/
├── utils.js                      # General utility functions
│   └── cn()                      # Tailwind class merger
│
└── constants.js                  # Application-wide constants
    ├── API_ENDPOINTS             # API route definitions
    ├── ROUTES                    # App route paths
    ├── SERVICE_CATEGORIES        # Service type definitions
    ├── STORAGE_KEYS              # LocalStorage key names
    ├── USER_ROLES                # User role types
    ├── VALIDATION                # Form validation rules
    ├── ERROR_MESSAGES            # Error message text
    └── SUCCESS_MESSAGES          # Success message text
```

### Usage Example
```javascript
import { ROUTES, ERROR_MESSAGES } from '@/lib/constants';

// Navigate to login
router.push(ROUTES.LOGIN);

// Display error
toast.error(ERROR_MESSAGES.NETWORK_ERROR);
```

---

## 🖼️ Public Directory

Static assets served from the root.

```
public/
├── logo.png                      # Naibrly logo
├── bg.jpg                        # Background image
├── Mobile.png                    # Mobile app mockup
├── round.jpg                     # Avatar/profile image
├── Modal.gif                     # Modal demo
│
├── ImageGrid/                    # Landing page image grid
│   └── image (1-6).png
│
├── LandingService/               # Service page images
│   └── image (1-6).png
│
├── topServices/                  # Top services showcase
│   └── Image (1-3).png
│
├── trendingServices/             # Trending services
│   └── Image (11-13).png
│
├── provider/                     # Provider images
└── Mobile/                       # Mobile app related images
```

### Image Optimization Notes
- Consider using Next.js Image component for better performance
- Some images are large (logo.png: 1.6MB) - consider optimization
- Use appropriate formats (WebP for better compression)

---

## ⚙️ Configuration Files

### `jsconfig.json`
Path alias configuration for imports.
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### `next.config.mjs`
Next.js configuration (currently using defaults).

### `package.json`
Key dependencies:
- **Framework:** Next.js 15.5.5, React 19.1.0
- **UI:** Tailwind CSS v4, Radix UI components
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge, class-variance-authority

### `components.json`
shadcn/ui component configuration.

### `postcss.config.mjs`
PostCSS configuration for Tailwind CSS.

### `eslint.config.mjs`
Code quality and linting rules.

---

## 🎨 Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Configured in `app/globals.css`
- Custom theme via Tailwind v4

### Component Styling Patterns
```javascript
// Using cn() utility for conditional classes
import { cn } from '@/lib/utils';

<button className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>
  Button
</button>
```

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- All landing page components are fully responsive

---

## 📋 Naming Conventions

### Files & Folders
- **Components:** PascalCase (e.g., `UserProfile.jsx`)
- **Utilities:** camelCase (e.g., `formatDate.js`)
- **Feature folders:** kebab-case (e.g., `landing-page/`)
- **Routes:** Match URL structure (e.g., `/terms-of-use`)

### Code
- **Components:** PascalCase (e.g., `function UserCard()`)
- **Functions:** camelCase (e.g., `function formatPrice()`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- **Variables:** camelCase (e.g., `const userName`)

---

## 🔄 State Management Strategy

### Current Implementation
- **React Context** for authentication state
- **LocalStorage** for persistence
- **Client-side only** (no server session)

### Future Considerations
- Add API layer for backend communication
- Implement server-side authentication
- Consider additional contexts for:
  - Shopping cart
  - Notifications
  - User preferences
  - Service filters

---

## 🚀 Development Workflow

### Adding a New Page
1. Create route folder in `app/` with appropriate group
2. Create `page.jsx` with default export
3. Create components in `components/` if needed
4. Update `lib/constants.js` with new route

### Adding a New Component
1. Create component file in appropriate directory
2. Follow naming conventions
3. Use TypeScript/JSDoc for better documentation
4. Import shared components from `components/ui/`

### Adding a New Feature
1. Plan component structure
2. Create feature folder if needed
3. Implement components
4. Add routes if applicable
5. Update constants and types
6. Test responsive behavior

---

## 📝 Recent Changes

### Reorganization (Latest)
1. ✅ Renamed `Servics.jsx` → `Services.jsx`
2. ✅ Renamed `Foo.jsx` → `ProCommunity.jsx`
3. ✅ Fixed route folders:
   - `repaires&Maintanens` → `repairs-and-maintenance`
   - `Tearmsanduse` → `terms-of-use`
   - `Bussniess` → `business`
4. ✅ Standardized component folders:
   - `landingPageAfterLogin` → `landing-page-after-login`
   - `repairesMaintanens` → `repairs-and-maintenance`
   - `Termsofuse` → `terms-of-use`
5. ✅ Created `lib/constants.js` for centralized constants
6. ✅ Created `hooks/` directory structure
7. ✅ Made all landing page components mobile-responsive

### Mobile Responsiveness Updates
- Added hamburger menu to Navbar
- Responsive text sizing across all components
- Mobile-first grid layouts
- Touch-friendly button sizes
- Optimized spacing for small screens

---

## 🎯 Best Practices

### Component Structure
```javascript
'use client'; // Add if component uses hooks/state

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

export default function MyComponent() {
  // Hooks
  const [state, setState] = useState();

  // Event handlers
  const handleClick = () => { };

  // Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### Import Order
1. React/Next.js imports
2. Third-party libraries
3. UI components
4. Local components
5. Utilities/constants
6. Styles

### File Organization
- Keep related components together
- Extract reusable logic to hooks
- Use constants for magic strings/numbers
- Document complex components

---

## 🔍 Code Quality

### Linting
- ESLint configured via `eslint.config.mjs`
- Run: `npm run lint`

### Formatting
- Consistent code style
- Use Prettier (recommended)

### Best Practices
- Use TypeScript/JSDoc for better intellisense
- Add prop validation
- Handle loading and error states
- Make components accessible (a11y)
- Test responsive behavior

---

## 📖 Additional Documentation

- `HOW_TO_USE_AUTH.md` - Authentication implementation guide
- `MODAL_CHANGES.md` - Modal system documentation
- `EXAMPLE_SIGNUP_WITH_AUTH.md` - Signup flow examples

---

## 🚧 Todo / Future Improvements

### High Priority
- [ ] Add API routes in `app/api/`
- [ ] Implement backend authentication
- [ ] Add form validation utilities
- [ ] Create error boundary components
- [ ] Add loading states/skeletons

### Medium Priority
- [ ] Optimize images (compress, convert to WebP)
- [ ] Add TypeScript for better type safety
- [ ] Create reusable form components
- [ ] Implement proper error handling
- [ ] Add unit tests

### Low Priority
- [ ] Add animation library (Framer Motion)
- [ ] Implement dark mode
- [ ] Add internationalization (i18n)
- [ ] Create Storybook for components
- [ ] Add E2E tests

---

## 📞 Support

For questions about this structure or contributing guidelines, refer to:
- Project README
- Documentation files in root
- Comment blocks in code files

---

**Last Updated:** 2025-10-20
**Version:** 2.0 (Post-Reorganization)
