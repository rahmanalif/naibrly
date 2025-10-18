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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-900 block mb-2">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="sr-only">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              aria-label="Address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password Requirements */}
          <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
            <p className="text-sm font-medium text-gray-900 mb-3">Minimum 8 characters along with</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.uppercase ? 'bg-teal-600 border-teal-600' : 'border-gray-300'}`}>
                  {passwordErrors.uppercase && <span className="text-white text-xs">✓</span>}
                </span>
                At least one uppercase letter
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.lowercase ? 'bg-teal-600 border-teal-600' : 'border-gray-300'}`}>
                  {passwordErrors.lowercase && <span className="text-white text-xs">✓</span>}
                </span>
                At least one lowercase letter
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.number ? 'bg-teal-600 border-teal-600' : 'border-gray-300'}`}>
                  {passwordErrors.number && <span className="text-white text-xs">✓</span>}
                </span>
                At least one number
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${passwordErrors.special ? 'bg-teal-600 border-teal-600' : 'border-gray-300'}`}>
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
              className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 cursor-pointer"
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
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-500 text-sm">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* OAuth Section */}
          <p className="text-xs text-gray-600 text-center mb-4">
            By clicking Continue with Facebook, Google, or Apple, you agree to the{' '}
            <a href="#" className="text-teal-600 hover:underline">Terms of Use</a>
            {' '}and{' '}
            <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
            . We'll keep you logged in.
          </p>

          {/* Social Buttons */}
          <button 
            type="button"
            className="w-full border border-gray-300 bg-white hover:bg-gray-50 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" fill="#4285F4"/>
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="white"/>
            </svg>
            <span className="text-sm font-medium text-gray-700">Continue With Google</span>
          </button>

          <button 
            type="button"
            className="w-full border border-gray-300 bg-white hover:bg-gray-50 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
              <path d="M17.05 13.5c0-.33.25-.63.6-1.04.22-.26.42-.51.42-.86 0-.41-.32-.75-.73-.75-.36 0-.68.32-.84.5-.22.26-.42.51-.42.86 0 .41.32.75.73.75.36 0 .68-.32.84-.5zm-7.3-2c.33 0 .63.25 1.04.6.26.22.51.42.86.42.41 0 .75-.32.75-.73 0-.36-.32-.68-.5-.84-.26-.22-.51-.42-.86-.42-.41 0-.75.32-.75.73 0 .36.32.68.5.84z"/>
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
