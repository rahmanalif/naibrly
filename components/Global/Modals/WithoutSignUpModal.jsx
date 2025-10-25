'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInModal() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/Login');
  };

  return (
      <div className="bg-white rounded-lg shadow-lg p-12 max-w-3xl w-full">
        <div className="flex items-center gap-12">
          {/* Left Side - Illustration/GIF */}
          <div className="flex-1 hidden md:flex justify-center">
            <img
              src="/modal.gif"
              alt="Sign in illustration"
              className="w-80 h-80 object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-3xl font-light text-gray-800 mb-8">
              Please <span className="text-teal-600 font-semibold">"Sign in"</span> first.
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={handleSignIn}
                variant="outline"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Link href="/Signup">
                <Button
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-2 rounded-lg"
                >
                  Create an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}