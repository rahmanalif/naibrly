'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, Camera, ChevronRight } from 'lucide-react';

const positionOptions = [
  'Plumbing', 'General Contracting', 'Locksmiths', 'Carpenters',
  'Appliance Repairs', 'Bathroom Remodeling', 'Door & window Repairs', 'Kitchen Remodeling',
  'HVAC', 'Flooring Installation', 'Electrical', 'Carpet Installation',
  'House Cleaning', 'Interior Painting', 'Carpet Cleaning', 'Basement Remodeling',
  'Upholstery Cleaning', 'Roofing', 'Home Organization', 'House Painting',
  'All Furniture Cleaning', 'Window Washing', 'Junk Removal', 'Chimney Sweeps',
  'Duct & Vent Cleaning', 'Gutter Cleaning', 'Pool Cleaning', 'Deck Contractors',
  'Commercial Cleaners', 'Siding'
];

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    workingHours: '06:00Am - 06:00Pm',
    workingWeek: 'Mon - Fri',
    additionalNotes: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [idFrontImage, setIdFrontImage] = useState(null);
  const [idBackImage, setIdBackImage] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [isPositionDropdownOpen, setIsPositionDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPositionDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdFrontUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdFrontImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdBackUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdBackImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Selected Positions:', selectedPositions);
  };

  const handlePositionToggle = (position) => {
    setSelectedPositions((prev) => {
      if (prev.includes(position)) {
        return prev.filter((p) => p !== position);
      } else {
        return [...prev, position];
      }
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
        Verification your Information
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Image Upload */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-[#2B9FD9] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors">
            <span className="text-sm">upload Image</span>
            <Upload className="w-4 h-4" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Row 1: Full Name (First Name, Last Name, Date of Birth in First Column) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Column: Full Name + Date of Birth */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="firstName" className="text-gray-900 mb-2">
                Full Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-2"
              />
              <p className="text-xs text-gray-500 mt-1">First Name</p>
            </div>
            <div>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <p className="text-xs text-gray-500 mt-1">Last Name</p>
            </div>
          </div>

          {/* Second Column: Date of Birth */}
          <div>
            <Label htmlFor="dateOfBirth" className="text-gray-900 mb-2">
              Date of Birth
            </Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="text"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              placeholder="MM-DD-YYYY"
              className="mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">Date</p>
          </div>
        </div>

        {/* Row 2: Email and Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email" className="text-gray-900 mb-2">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">example@example.com</p>
          </div>
          <div>
            <Label htmlFor="phoneNumber" className="text-gray-900 mb-2">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="(000) 000-0000"
              className="mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">
              Please enter a valid phone number.
            </p>
          </div>
        </div>

        {/* Row 3: Address (Full Width) */}
        <div>
          <Label htmlFor="streetAddress" className="text-gray-900 mb-2">
            Address
          </Label>
          <Input
            id="streetAddress"
            name="streetAddress"
            type="text"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="mt-2"
          />
          <p className="text-xs text-gray-500 mt-1">Street Address</p>
        </div>

        {/* Row 4: City and State/Province */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
            />
            <p className="text-xs text-gray-500 mt-1">City</p>
          </div>
          <div>
            <Input
              id="stateProvince"
              name="stateProvince"
              type="text"
              value={formData.stateProvince}
              onChange={handleInputChange}
            />
            <p className="text-xs text-gray-500 mt-1">State / Province</p>
          </div>
        </div>

        {/* Row 5: Postal/Zip Code (Full Width) */}
        <div>
          <Input
            id="postalCode"
            name="postalCode"
            type="text"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
          <p className="text-xs text-gray-500 mt-1">Postal / Zip Code</p>
        </div>

        {/* Row 6: Working Hour and Working Week */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Input
              id="workingHours"
              name="workingHours"
              type="text"
              value={formData.workingHours}
              onChange={handleInputChange}
              className="text-center"
            />
            <p className="text-xs text-gray-500 mt-1">working hour</p>
          </div>
          <div>
            <Input
              id="workingWeek"
              name="workingWeek"
              type="text"
              value={formData.workingWeek}
              onChange={handleInputChange}
              className="text-center"
            />
            <p className="text-xs text-gray-500 mt-1">working week</p>
          </div>
        </div>

        {/* Applying Position */}
        <div>
          <Label className="text-gray-900 mb-2">
            Applying Position
          </Label>
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <button
                type="button"
                onClick={() => setIsPositionDropdownOpen(!isPositionDropdownOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left flex items-center justify-between hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <span className="text-sm text-gray-700">
                  {selectedPositions.length > 0
                    ? `${selectedPositions.length} position(s) selected`
                    : 'Select positions...'}
                </span>
                <ChevronRight className={`h-4 w-4 text-gray-500 transition-transform ${isPositionDropdownOpen ? 'rotate-90' : ''}`} />
              </button>

              {/* Expandable Content */}
              {isPositionDropdownOpen && (
                <div className="w-full mt-2 bg-white border border-gray-300 rounded-md p-4">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {positionOptions.map((position) => (
                      <div key={position} className="flex items-center gap-2">
                        <Checkbox
                          id={`position-${position}`}
                          checked={selectedPositions.includes(position)}
                          onCheckedChange={() => handlePositionToggle(position)}
                        />
                        <label
                          htmlFor={`position-${position}`}
                          className="text-sm cursor-pointer select-none leading-none"
                        >
                          {position}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ID Information */}
        <div>
          <Label className="text-gray-900 mb-2">
            *ID Information
          </Label>
          <p className="text-xs text-gray-600 mb-4">
            Please upload real and valid information (Passport/ Driving license/ Alternate ID)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ID Front */}
            <div>
              <label className="block cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleIdFrontUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors bg-gray-50">
                  {idFrontImage ? (
                    <img
                      src={idFrontImage}
                      alt="ID Front"
                      className="w-full h-32 object-cover rounded"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-2">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </label>
              <p className="text-xs text-gray-600 mt-2 text-center">
                Passport/ Driving license/ Alternate ID (front)
              </p>
            </div>

            {/* ID Back */}
            <div>
              <label className="block cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleIdBackUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors bg-gray-50">
                  {idBackImage ? (
                    <img
                      src={idBackImage}
                      alt="ID Back"
                      className="w-full h-32 object-cover rounded"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mb-2">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </label>
              <p className="text-xs text-gray-600 mt-2 text-center">
                Passport/ Driving license/ Alternate ID (Back)
              </p>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <Label htmlFor="additionalNotes" className="text-gray-900 mb-2">
            Additional Notes
          </Label>
          <Textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="mt-2 min-h-32"
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={setTermsAccepted}
            className="mt-1"
          />
          <label
            htmlFor="terms"
            className="text-sm leading-relaxed cursor-pointer"
          >
            All the information is correct, to the best of my knowledge, and I accept the Terms
            and Conditions and the Privacy Policy
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-6 text-base"
            disabled={!termsAccepted}
          >
            Approve from Admin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
