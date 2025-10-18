'use client';

export default function NaibrlyLanding() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left side - Phone mockup */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/Mobile.png"
              alt="Naibrly Mobile App"
              className="w-auto h-96 sm:h-[450px] md:h-[550px] lg:h-[650px] object-contain"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 mb-3 sm:mb-4 leading-tight">
                The one app you need to get <span className="text-teal-600">everything done.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Take Naibrly with you, on your phone. Find, book and manage your Home services all in one place.
              </p>
            </div>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 sm:h-14"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 sm:h-14"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}