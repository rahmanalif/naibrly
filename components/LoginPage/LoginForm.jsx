'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Lock, Mail } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <h1 className="text-2xl text-slate-800 text-center mb-8 font-light">
          Sign in below and see how we can
          <br />
          save you time and money.
        </h1>

        {/* Email Input */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-900 block mb-2">
            E-mail Address
          </label>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-slate-900 block mb-2">
            Password
          </label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={setRememberMe}
              className="w-5 h-5 rounded border-slate-300 bg-teal-600"
            />
            <label htmlFor="remember" className="text-sm text-slate-700 cursor-pointer">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
            Forgot Password?
          </a>
        </div>

        {/* Log In Button */}
        <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-md font-medium mb-6">
          Log in
        </Button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500">Or</span>
          </div>
        </div>

        {/* Social Buttons */}
        <Button
          variant="outline"
          className="w-full mb-3 border border-slate-300 text-slate-700 hover:bg-slate-50 py-2 rounded-md font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <text x="0" y="20" className="text-lg font-bold fill-current">
              G
            </text>
          </svg>
          Continue With Google
        </Button>

        <Button
          variant="outline"
          className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 py-2 rounded-md font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.05 13.5c-.91 0-1.64.6-1.9 1.42h3.84c-.26-.82-.99-1.42-1.94-1.42m-7.1-5c-.74 0-1.37.6-1.37 1.42 0 .82.63 1.42 1.37 1.42.74 0 1.37-.6 1.37-1.42 0-.82-.63-1.42-1.37-1.42m6.5 0c-.74 0-1.37.6-1.37 1.42 0 .82.63 1.42 1.37 1.42s1.37-.6 1.37-1.42c0-.82-.63-1.42-1.37-1.42M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-5 16.5c-1.38 0-2.6-1-2.6-2.5s1.22-2.5 2.6-2.5 2.6 1 2.6 2.5-1.22 2.5-2.6 2.5m5.5-9.5c-2.33 0-4.31 1.46-5.11 3.5H6.89c.8-2.04 2.78-3.5 5.11-3.5s4.31 1.46 5.11 3.5h-1.49c-.8-2.04-2.78-3.5-5.11-3.5m5-4c-.74 0-1.37.6-1.37 1.42 0 .82.63 1.42 1.37 1.42.74 0 1.37-.6 1.37-1.42 0-.82-.63-1.42-1.37-1.42m0 9c-1.38 0-2.6-1-2.6-2.5s1.22-2.5 2.6-2.5 2.6 1 2.6 2.5-1.22 2.5-2.6 2.5" />
          </svg>
          Continue With Apple
        </Button>

        {/* Sign Up Link */}
        <p className="text-center text-slate-600 text-sm mt-6">
          Don't have an account?{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
            Sign up
          </a>
        </p>

        {/* Terms */}
        {/* <p className="text-center text-xs text-slate-600 mt-6">
          By clicking Continue with Google, or Apple, you agree to the{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700">
            Terms of Use
          </a>
          {' '}and{' '}
          <a href="#" className="text-teal-600 hover:text-teal-700">
            Privacy Policy
          </a>
          . We'll keep you logged in.
        </p> */}
      </div>
    </div>
  );
}