'use Client';

import Image from 'next/image';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex items-center ">
              <h3 className="font-bold text-lg">Naibrly</h3>
            </div>
            <p className="font-medium mb-4">Consider it done.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span className="text-sm">Naibrly****@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span className="text-sm">(+888) 000 00000</span>
              </div>
            </div>
          </div>

          {/* Customers Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Customers</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Sign up
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Get the app
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Service
                </a>
              </li>
            </ul>
          </div>

          {/* Pros Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Pros</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Naibrly for pros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Sign up as a pro
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Help & support</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Image src="/logo.png" alt="Naibrly Logo" width={24} height={24} />
            <span className="text-gray-600 text-sm">© 2025 Naibrly, Inc.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <Image src="/logo.png" alt="Naibrly Logo" width={24} height={24} />
            </div>
            <span className="font-bold text-lg text-gray-900">Naibrly</span>
          </div>
        </div>
      </div>
    </footer>
  );
}