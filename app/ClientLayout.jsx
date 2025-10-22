'use client';

import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/User/LandingPage/Footer";
import { ReduxProvider } from "@/redux/ReduxProvider";

export default function ClientLayout({ children }) {
  return (
    <ReduxProvider>
      <NavbarWrapper />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ReduxProvider>
  );
}
