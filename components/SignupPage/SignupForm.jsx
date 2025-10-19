'use client';
import { useState } from 'react';

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    zipCode: '',
    city: '',
    aptSuite: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const [passwordErrors, setPasswordErrors] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
    length: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    setPasswordErrors({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
      length: password.length >= 8,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const isPasswordValid = Object.values(passwordErrors).every(v => v === true);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-normal text-center mb-8">Create Your Account</h1>
        
        <div onSubmit={handleSubmit} className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-900 block mb-2">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
            </div>
            <div>
              <label className="text-sm text-gray-900 block mb-2">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="sr-only ">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              aria-label="Address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* State & Zip Code (labels moved inside inputs) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="state" className="sr-only">State</label>
              <input
                id="state"
                type="text"
                name="state"
                aria-label="State"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="sr-only">Zip Code</label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                aria-label="Zip Code"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
            </div>
          </div>

          {/* City & Apt/Suite (labels moved inside inputs) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="sr-only">City</label>
              <input
                id="city"
                type="text"
                name="city"
                aria-label="City"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="aptSuite" className="sr-only">Apt / Suite</label>
              <input
                id="aptSuite"
                type="text"
                name="aptSuite"
                aria-label="Apt / Suite"
                placeholder="Apt / Suite"
                value={formData.aptSuite}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
              />
            </div>
          </div>

          {/* Email (label moved inside input) */}
          <div>
            <label htmlFor="email" className="sr-only">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              aria-label="E-mail"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Password (label moved inside input) */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              aria-label="Password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Password Requirements */}
          <div className="p-4 rounded-lg border border-black bg-gray-50">
            <p className="text-sm font-medium text-gray-900 mb-3">Minimum 8 characters along with</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.uppercase ? 'bg-teal-600 border-teal-600' : 'border-black'}`}>
                  {passwordErrors.uppercase && <span className="text-white text-xs">✓</span>}
                </span>
                At least one uppercase letter
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.lowercase ? 'bg-teal-600 border-teal-600' : 'border-black'}`}>
                  {passwordErrors.lowercase && <span className="text-white text-xs">✓</span>}
                </span>
                At least one lowercase letter
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.number ? 'bg-teal-600 border-teal-600' : 'border-black'}`}>
                  {passwordErrors.number && <span className="text-white text-xs">✓</span>}
                </span>
                At least one number
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.special ? 'bg-teal-600 border-teal-600' : 'border-black'}`}>
                  {passwordErrors.special && <span className="text-white text-xs">✓</span>}
                </span>
                At least one special character (e.g. !, @, #, $)
              </li>
            </ul>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="w-4 h-4 text-teal-600 rounded border-black focus:ring-teal-500 cursor-pointer"
            />
            <label htmlFor="rememberMe" className="text-sm text-teal-600 cursor-pointer">
              Remember me
            </label>
          </div>

          {/* Create Account Button */}
          <button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isPasswordValid}
          >
            Create an account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-black"></div>
            <span className="text-gray-500 text-sm">Or</span>
            <div className="flex-1 border-t border-black"></div>
          </div>

          {/* OAuth Section */}
          <p className="text-xs text-gray-600 text-center mb-4">
            By clicking Continue with Facebook, Google, or Apple, you agree to the{' '}
            <a href="#" className="text-teal-600 hover:underline">Terms of Use</a>
            {' '}
            and{' '}
            <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
            . We'll keep you logged in.
          </p>

          {/* Social Buttons */}
          <button 
            type="button"
            className="w-full border border-black bg-white hover:bg-gray-50 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Continue With Google</span>
          </button>

          <button 
            type="button"
            className="w-full border border-black bg-white hover:bg-gray-50 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Continue With Apple</span>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account? <a href="#" className="text-teal-600 hover:underline font-medium">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}