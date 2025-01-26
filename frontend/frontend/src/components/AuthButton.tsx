'use client';

import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";

export function AuthButton() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Show a placeholder while loading to avoid layout shift
  if (!mounted) {
    return (
      <div className="px-4 py-2 rounded-lg bg-gray-100 text-black opacity-0">
        Loading
      </div>
    );
  }

  const buttonClasses = "px-4 py-2 rounded-lg bg-gray-100 text-black hover:bg-gray-200 transition-colors";

  if (isSignedIn) {
    return (
      <button
        onClick={() => void signOut()}
        className={buttonClasses}
      >
        Log Out
      </button>
    );
  }

  return (
    <Link
      href="/login"
      className={buttonClasses}
    >
      Log In
    </Link>
  );
} 