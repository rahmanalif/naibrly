import { Search, ChevronDown, ArrowLeft } from 'lucide-react';

export default function HowNaibrlyWorks() {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-normal text-center mb-16 text-black font-inter not-italic leading-normal">How to Naibrly Work:</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Find Services */}
          <div className="flex flex-col">
            <div className="mb-8 flex justify-center">
              <div className="relative w-90">
                <img 
                  src="/Mobile/phone (1).png" 
                  alt="Find Services - Naibrly Mobile"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No subscription cost.</h3>
              <p className="text-gray-600 text-sm leading-relaxed">There's no charge to join, no annual fees </p>
              <p className="text-gray-600 text-sm leading-relaxed">and no membership fees.</p>
            </div>
          </div>

          {/* Card 2 - Service Details */}
          <div className="flex flex-col">
            <div className="mb-8 flex justify-center">
              <div className="relative w-96">
                <img 
                  src="/Mobile/phone (2).png" 
                  alt="Service Details - Naibrly Mobile"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">High intent customers.</h3>
              <p className="text-gray-600 text-sm leading-relaxed">You'll receive leads from customers that </p>
              <p className="text-gray-600 text-sm leading-relaxed">choose you, with high intent to hire.</p>
            </div>
          </div>

          {/* Card 3 - Price Range */}
          <div className="flex flex-col">
            <div className="mb-8 flex justify-center">
              <div className="relative w-90">
                <img 
                  src="/Mobile/phone (3).png" 
                  alt="Price Range - Naibrly Mobile"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Control and flexibility.</h3>
              <p className="text-gray-600 text-sm leading-relaxed">You control your pricing and budget for </p>
              <p className="text-gray-600 text-sm leading-relaxed">leads, which determines how many leads you get.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}