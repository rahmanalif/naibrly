'use client';

export default function ProCommunity() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section with Background Image */}
      <div 
        className="relative w-full py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop')",
          backgroundColor: '#a8d5e2'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/40 to-teal-300/40"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-teal-700 mb-6">Naibrly's Pro Community</h1>
          
          <p className="text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto">
            Join a network of pros sharing tips, insights and strategies to help you win more work — whether you're just getting started or scaling fast.
          </p>
          
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg">
            Connect With Other Pros
          </button>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-gray-600 leading-relaxed">
            *This tool is for informational purposes only. Actual earnings depend on various factors, including job demand, competition, and business operations and are subject to applicable Platform Fees and/or discounts. Naibrly does not guarantee any specific earnings outcome.
          </p>
        </div>
      </div>

      {/* App Store Section */}
      <div className="bg-gray-50 px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 flex-wrap">
            {/* App Store Button */}
            <a 
              href="#" 
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on App Store"
                className="h-12"
              />
            </a>

            {/* Google Play Button */}
            <a 
              href="#" 
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}