'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function InformationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    residenceType: '',
    services: []
  });
  const [showResidenceDropdown, setShowResidenceDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const residenceTypes = [
    'Apartment',
    'House',
    'Condo',
    'Townhouse',
    'Other'
  ];

  const availableServices = [
    { id: 1, name: 'Home Repairs & Maintenance', color: 'bg-orange-100 text-orange-600 border-orange-200' },
    { id: 2, name: 'Cleaning & Organization', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
    { id: 3, name: 'Renovations & Upgrades', color: 'bg-red-100 text-red-600 border-red-200' },
    { id: 4, name: 'Plumbing Services', color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { id: 5, name: 'Electrical Services', color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { id: 6, name: 'HVAC Services', color: 'bg-green-100 text-green-600 border-green-200' },
    { id: 7, name: 'Landscaping & Lawn Care', color: 'bg-teal-100 text-teal-600 border-teal-200' },
    { id: 8, name: 'Painting Services', color: 'bg-pink-100 text-pink-600 border-pink-200' }
  ];

  const handleResidenceSelect = (type) => {
    setFormData({ ...formData, residenceType: type });
    setShowResidenceDropdown(false);
  };

  const handleServiceToggle = (service) => {
    const isSelected = formData.services.some(s => s.id === service.id);
    if (isSelected) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s.id !== service.id)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    }
  };

  const handleRemoveService = (serviceId) => {
    setFormData({
      ...formData,
      services: formData.services.filter(s => s.id !== serviceId)
    });
  };

  const handleConfirm = () => {
    console.log('Form submitted:', formData);
    // Navigate to the next page or home
    router.push('/');
  };

  const handleSkip = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <h2 className="text-lg font-semibold text-slate-900">Naibrly</h2>
          <div className="w-9"></div> {/* Spacer for centering */}
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Please tell us a little about yourself
          </h1>
          <p className="text-sm text-slate-500">
            This helps us match you with the right services
          </p>
        </div>

        <form className="space-y-6">
          {/* Residence Type Dropdown */}
          <div>
            <label className="text-sm font-medium text-slate-900 block mb-2">
              I live in
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowResidenceDropdown(!showResidenceDropdown)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50 text-left flex items-center justify-between"
              >
                <span className={formData.residenceType ? 'text-slate-900' : 'text-slate-400'}>
                  {formData.residenceType || 'Select your residence type'}
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </button>

              {showResidenceDropdown && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {residenceTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleResidenceSelect(type)}
                      className="w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors text-slate-700"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Services Multi-Select Dropdown */}
          <div>
            <label className="text-sm font-medium text-slate-900 block mb-2">
              Services I use regularly <span className="text-slate-400 text-xs">(select multiple)</span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50 text-left flex items-center justify-between"
              >
                <span className="text-slate-400">Select services</span>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </button>

              {showServicesDropdown && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                  {availableServices.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors text-slate-700 flex items-center justify-between ${
                        formData.services.some(s => s.id === service.id) ? 'bg-teal-50' : ''
                      }`}
                    >
                      <span>{service.name}</span>
                      {formData.services.some(s => s.id === service.id) && (
                        <span className="text-teal-600"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Services Tags */}
            {formData.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.services.map((service) => (
                  <div
                    key={service.id}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border ${service.color}`}
                  >
                    <span>{service.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveService(service.id)}
                      className="hover:opacity-70"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Confirm Button */}
          <Button
            type="button"
            onClick={handleConfirm}
            disabled={!formData.residenceType || formData.services.length === 0}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Confirm
          </Button>

          {/* Skip Button */}
          <Button
            type="button"
            onClick={handleSkip}
            variant="outline"
            className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 py-3 rounded-lg font-medium text-base transition-colors"
          >
            Skip for now
          </Button>
        </form>
      </div>
    </div>
  );
}
