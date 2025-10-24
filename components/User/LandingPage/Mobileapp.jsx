'use client';

export default function NaibrlyLanding() {
  return (
    <section className="w-full bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* Left side - Phone mockup */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img
              src="/Mobile.png"
              alt="Naibrly Mobile App"
              className="w-auto h-64 sm:h-80 md:h-96 lg:h-[550px] xl:h-[650px] object-contain relative top-16"
            />
          </div>
          {/* some change */}
          {/* Right side - Text content */}
          <div className="flex flex-col justify-center text-center md:text-left order-1 md:order-2 px-2">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mb-3 sm:mb-4 leading-tight">
                The one app you need to get <span className="text-teal-600">everything done.</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed">
                Take Naibrly with you, on your phone. Find, book and manage your Home services all in one place.
              </p>
            </div>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start justify-center md:justify-start">
              <button className="transition-transform hover:scale-105 active:scale-95">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 sm:h-12 md:h-14 w-auto"
                />
              </button>
              <button className="transition-transform hover:scale-105 active:scale-95">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-12 md:h-14 w-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// some