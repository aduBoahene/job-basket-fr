// app/SessionProviderWrapper.tsx

"use client";

// import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProviderWrapperProps {
  children: ReactNode;
  session: any;
}

const SessionProviderWrapper = ({ children, session }: SessionProviderWrapperProps) => {
  return (
    <>
      {children}
      </>
  );
}

export default SessionProviderWrapper;
