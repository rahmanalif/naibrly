'use client';

import React from 'react';
import Image from 'next/image';
import { Youtube, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function NaibrlyFooter() {
  return (
    <footer className="bg-[#0a4d3c] text-white py-12 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
          {/* Left Column - Brand */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Naibrly Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">NAIBRLY</h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Naibrly is your premier destination for top-notch smart home service and repair.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Company and Legal Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-4 lg:justify-items-end">
            {/* Company Column */}
            <div>
              <h4 className="text-xl font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-xl font-bold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-700/40 my-8"></div>

        {/* Bottom Copyright */}
        <div className="text-center text-gray-400">
          <p>©2025 Naibrly . All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}