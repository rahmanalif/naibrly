/**
 * Application-wide constants
 * Centralized location for all constant values used across the application
 */

// API Endpoints (when backend is implemented)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    LOGOUT: '/api/auth/logout',
    VERIFY: '/api/auth/verify',
  },
  SERVICES: {
    LIST: '/api/services',
    SEARCH: '/api/services/search',
    DETAILS: '/api/services/:id',
  },
  PROVIDERS: {
    LIST: '/api/providers',
    PROFILE: '/api/providers/:id',
    REVIEWS: '/api/providers/:id/reviews',
  },
  USERS: {
    PROFILE: '/api/users/profile',
    ORDERS: '/api/users/orders',
    NOTIFICATIONS: '/api/users/notifications',
  },
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/Login',
  SIGNUP: '/Signup',
  BUSINESS: '/business',
  LANDING_AFTER_LOGIN: '/LandingPageAfterLogin',
  LANDING_SERVICE: '/LandingService',
  REPAIRS_AND_MAINTENANCE: '/repairs-and-maintenance',
  SAFETY: '/Safety',
  TERMS_OF_USE: '/terms-of-use',
  NAIBRLY_LANDING: '/Naibrly-landingPage',
};

// Service Categories
export const SERVICE_CATEGORIES = {
  INTERIOR: {
    HOME_REPAIRS: 'Home Repairs & Maintenance',
    CLEANING: 'Cleaning & Organization',
    RENOVATIONS: 'Renovations & Upgrades',
  },
  EXTERIOR: {
    HOME_CARE: 'Exterior Home Care',
    LANDSCAPING: 'Landscaping & Outdoor Services',
  },
  MORE: {
    MOVING: 'Moving',
    INSTALLATION: 'Installation & Assembly',
    HOUSE_PAINTER: 'House Painter',
  },
};

// Home Repair Sub-services
export const HOME_REPAIR_SERVICES = [
  'Plumbing',
  'Locksmiths',
  'Appliance Repairs',
  'Door & window Repairs',
  'HVAC',
  'Electrical',
];

// Popular Services
export const POPULAR_SERVICES = [
  { name: 'House cleaning', icon: 'HouseCleaning' },
  { name: 'Handyman', icon: 'Handyman' },
  { name: 'Electrical and wiring repair', icon: 'Electrical' },
  { name: 'Painting', icon: 'Painting' },
  { name: 'Junk removal', icon: 'JunkRemoval' },
  { name: 'Local moving (under 50 mi)', icon: 'Moving' },
  { name: 'Appl. repair or maintain', icon: 'ApplianceRepair' },
  { name: 'Floor installation', icon: 'FloorInstallation' },
];

// Price Ranges
export const PRICE_RANGES = {
  HOUSE_INTERIOR: { min: 70, max: 180 },
  ELECTRONIC_INSTALLATION: { min: 80, max: 180 },
  PAINTING: { min: 150, max: 250 },
  HOUSE_CLEANING: { min: 110, max: 140 },
  ELECTRIC_SERVICE: { min: 110, max: 140 },
  MOVING: { min: 70, max: 200 },
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'naibrly_auth_token',
  USER_DATA: 'naibrly_user_data',
  THEME_PREFERENCE: 'naibrly_theme',
  LANGUAGE: 'naibrly_language',
};

// User Roles
export const USER_ROLES = {
  CUSTOMER: 'customer',
  PROVIDER: 'provider',
  ADMIN: 'admin',
};

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

// Notification Types
export const NOTIFICATION_TYPES = {
  ORDER_UPDATE: 'order_update',
  MESSAGE: 'message',
  PROMOTION: 'promotion',
  SYSTEM: 'system',
};

// App Store Links
export const APP_STORE_LINKS = {
  IOS: 'https://apps.apple.com/app/naibrly',
  ANDROID: 'https://play.google.com/store/apps/details?id=com.naibrly',
};

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'Naibrly****@gmail.com',
  PHONE: '(+888) 000 00000',
  SUPPORT_EMAIL: 'support@naibrly.com',
};

// Social Media Links (when available)
export const SOCIAL_MEDIA = {
  FACEBOOK: 'https://facebook.com/naibrly',
  TWITTER: 'https://twitter.com/naibrly',
  INSTAGRAM: 'https://instagram.com/naibrly',
  LINKEDIN: 'https://linkedin.com/company/naibrly',
};

// Form Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  ZIP_CODE_REGEX: /^\d{5}(-\d{4})?$/,
};

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  WEAK_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, number and special character',
  PASSWORDS_DONT_MATCH: 'Passwords do not match',
  NETWORK_ERROR: 'Network error. Please check your connection',
  SERVER_ERROR: 'Server error. Please try again later',
  UNAUTHORIZED: 'You must be logged in to access this page',
  INVALID_ZIP: 'Please enter a valid ZIP code',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in!',
  SIGNUP_SUCCESS: 'Account created successfully!',
  PROFILE_UPDATED: 'Profile updated successfully',
  ORDER_PLACED: 'Order placed successfully',
  MESSAGE_SENT: 'Message sent successfully',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  INPUT: 'YYYY-MM-DD',
  TIME: 'hh:mm A',
  DATETIME: 'MMM DD, YYYY hh:mm A',
};

// Misc
export const MISC = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  DEBOUNCE_DELAY: 300, // milliseconds
  TOAST_DURATION: 3000, // milliseconds
};

const constants = {
  API_ENDPOINTS,
  ROUTES,
  SERVICE_CATEGORIES,
  HOME_REPAIR_SERVICES,
  POPULAR_SERVICES,
  PRICE_RANGES,
  STORAGE_KEYS,
  USER_ROLES,
  ORDER_STATUS,
  NOTIFICATION_TYPES,
  APP_STORE_LINKS,
  CONTACT_INFO,
  SOCIAL_MEDIA,
  VALIDATION,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  PAGINATION,
  DATE_FORMATS,
  MISC,
};

export default constants;
