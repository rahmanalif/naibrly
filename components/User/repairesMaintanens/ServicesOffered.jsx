'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function ServicesOffered() {
  const [selectedDrainProblems, setSelectedDrainProblems] = useState([]);
  const [selectedRepairUrgency, setSelectedRepairUrgency] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);

  const drainProblems = [
    'Clogs',
    'Slow drains',
    'Leaks (area known)',
    'Leaks (area unknown)',
    'Gurgles',
    'Odors',
    'Other drain issue',
    'Larger plumbing system issues'
  ];

  const repairUrgencies = [
    { id: 'non-urgent', label: 'I work on non-urgent repairs' },
    { id: 'urgent', label: 'I work on urgent repairs' }
  ];

  const propertyTypes = [
    { id: 'house', label: 'House' },
    { id: 'townhouse', label: 'Townhouse' },
    { id: 'condo', label: 'Condo/Apartment' },
    { id: 'business', label: 'Business' }
  ];

  const toggleDrainProblem = (problem) => {
    setSelectedDrainProblems(prev =>
      prev.includes(problem)
        ? prev.filter(p => p !== problem)
        : [...prev, problem]
    );
  };

  const toggleRepairUrgency = (urgency) => {
    setSelectedRepairUrgency(prev =>
      prev.includes(urgency)
        ? prev.filter(u => u !== urgency)
        : [...prev, urgency]
    );
  };

  const togglePropertyType = (type) => {
    setSelectedPropertyTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleExportData = () => {
    const data = {
      drainProblems: selectedDrainProblems,
      repairUrgency: selectedRepairUrgency,
      propertyTypes: selectedPropertyTypes,
      timestamp: new Date().toISOString()
    };
    console.log('Services Data:', data);
    return data;
  };

  return (
    <div className="bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Services offered</h1>

        {/* Drain Problem Section */}
        <section className="mb-10 pb-10 border-b border-gray-200">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-900">Drain problem</h2>
            <p className="text-sm text-gray-600 mt-1">
              {selectedDrainProblems.length > 0 
                ? `${selectedDrainProblems.length} selected`
                : 'Select all that apply'
              }
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {drainProblems.map((problem) => (
              <button
                key={problem}
                onClick={() => toggleDrainProblem(problem)}
                className={`px-3 md:px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 whitespace-nowrap ${
                  selectedDrainProblems.includes(problem)
                    ? 'border-teal-600 bg-teal-50 text-teal-700 shadow-sm'
                    : 'border-teal-600 text-teal-600 hover:bg-teal-50 hover:shadow-sm active:bg-teal-100'
                }`}
                aria-pressed={selectedDrainProblems.includes(problem)}
              >
                {problem}
              </button>
            ))}
          </div>
        </section>

        {/* Repair Urgency Section */}
        <section className="mb-10 pb-10 border-b border-gray-200">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-900">Repair urgency</h2>
            <p className="text-sm text-gray-600 mt-1">
              {selectedRepairUrgency.length > 0
                ? `${selectedRepairUrgency.length} selected`
                : 'Select options'
              }
            </p>
          </div>
          
          <div className="space-y-3">
            {repairUrgencies.map((urgency) => (
              <label
                key={urgency.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedRepairUrgency.includes(urgency.id)}
                  onChange={() => toggleRepairUrgency(urgency.id)}
                  className="sr-only"
                  aria-label={urgency.label}
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                    selectedRepairUrgency.includes(urgency.id)
                      ? 'bg-teal-600 border-teal-600 shadow-sm'
                      : 'border-gray-300 group-hover:border-teal-600 group-active:bg-teal-50'
                  }`}
                >
                  {selectedRepairUrgency.includes(urgency.id) && (
                    <Check size={16} className="text-white" strokeWidth={3} />
                  )}
                </div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {urgency.label}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Property Type Section */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-900">Property type</h2>
            <p className="text-sm text-gray-600 mt-1">
              {selectedPropertyTypes.length > 0
                ? `${selectedPropertyTypes.length} selected`
                : 'Select all that apply'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {propertyTypes.map((type) => (
              <label
                key={type.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedPropertyTypes.includes(type.id)}
                  onChange={() => togglePropertyType(type.id)}
                  className="sr-only"
                  aria-label={type.label}
                />
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                    selectedPropertyTypes.includes(type.id)
                      ? 'bg-teal-600 border-teal-600 shadow-sm'
                      : 'border-gray-300 group-hover:border-teal-600 group-active:bg-teal-50'
                  }`}
                >
                  {selectedPropertyTypes.includes(type.id) && (
                    <Check size={16} className="text-white" strokeWidth={3} />
                  )}
                </div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Summary and Export Section */}
        {(selectedDrainProblems.length > 0 || selectedRepairUrgency.length > 0 || selectedPropertyTypes.length > 0) && (
          <section className="mt-10 pt-8 border-t border-gray-200">
            <div className="p-5 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-sm font-semibold text-gray-900 mb-4">Selected Services Summary</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {selectedDrainProblems.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Drain Problems</p>
                    <ul className="space-y-1">
                      {selectedDrainProblems.map(problem => (
                        <li key={problem} className="text-sm text-gray-700 flex items-start gap-2">
                          <Check size={14} className="text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedRepairUrgency.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Urgency</p>
                    <ul className="space-y-1">
                      {selectedRepairUrgency.map(urgency => {
                        const label = repairUrgencies.find(u => u.id === urgency)?.label;
                        return (
                          <li key={urgency} className="text-sm text-gray-700 flex items-start gap-2">
                            <Check size={14} className="text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                
                {selectedPropertyTypes.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Properties</p>
                    <ul className="space-y-1">
                      {selectedPropertyTypes.map(type => {
                        const label = propertyTypes.find(p => p.id === type)?.label;
                        return (
                          <li key={type} className="text-sm text-gray-700 flex items-start gap-2">
                            <Check size={14} className="text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={handleExportData}
                className="w-full sm:w-auto px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
              >
                Save Services Profile
              </button>
            </div>
          </section>
        )}

        {/* Empty State */}
        {selectedDrainProblems.length === 0 && selectedRepairUrgency.length === 0 && selectedPropertyTypes.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-sm">Start selecting services to create your profile</p>
          </div>
        )}
      </div>
    </div>
  );
}