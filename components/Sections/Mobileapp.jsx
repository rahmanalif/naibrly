'use client';
import { Button } from '@/components/ui/button';

export default function NaibrlyLanding() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left side - Phone mockup */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 sm:w-56 md:w-64 h-72 sm:h-80 md:h-96">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-black rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-6 md:border-8 border-black overflow-hidden">
                {/* Screen content */}
                <div className="w-full h-full bg-white flex flex-col p-3 sm:p-4 md:p-6 pt-4 sm:pt-6 md:pt-8">
                  {/* Status bar */}
                  <div className="flex justify-between items-center text-[10px] sm:text-xs mb-3 sm:mb-4 md:mb-6">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base">
                      N
                    </div>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">Naibrly</span>
                  </div>

                  {/* Welcome text */}
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">Welcome Back</h2>
                    <p className="text-[10px] sm:text-xs text-gray-500">Hello there, login to continue</p>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    <div>
                      <label className="text-[10px] sm:text-xs text-gray-600 block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="hello@gmail.com"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-[10px] sm:text-xs bg-gray-50"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="text-[10px] sm:text-xs text-gray-600 block mb-1">Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-[10px] sm:text-xs bg-gray-50"
                        disabled
                      />
                    </div>
                  </div>

                  {/* Login button */}
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm mb-2 sm:mb-3">
                    Login
                  </button>

                  {/* Social login */}
                  <p className="text-[10px] sm:text-xs text-gray-500 text-center mb-1 sm:mb-2">Or continue with</p>
                  <div className="flex gap-2 justify-center">
                    <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs sm:text-sm">🍎</button>
                    <button className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs sm:text-sm">G</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                The one app you need to get <span className="text-emerald-600">everything done</span>.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Take Naibrly with you, on your phone. Find, book and manage your Home services all in one place.
              </p>
            </div>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
              <Button className="bg-black hover:bg-gray-900 text-white rounded-lg px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.64.93-1.64 2.05 0 1.13.73 2.05 1.64 2.05 1.17 0 2.04-.93 2.04-2.05 0-1.12-.87-2.05-2.04-2.05zm-4.42 0c-.91 0-1.64.93-1.64 2.05 0 1.13.73 2.05 1.64 2.05 1.17 0 2.04-.93 2.04-2.05 0-1.12-.87-2.05-2.04-2.05z" />
                </svg>
                App Store
              </Button>
              <Button className="bg-black hover:bg-gray-900 text-white rounded-lg px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13.5h8v8H3z" />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}