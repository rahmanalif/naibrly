'use client';

import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Global/Global/Footer";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { AuthProvider } from "@/context/AuthContext";

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <ReduxProvider>
        <NavbarWrapper />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </ReduxProvider>
    </AuthProvider>
  );
}
