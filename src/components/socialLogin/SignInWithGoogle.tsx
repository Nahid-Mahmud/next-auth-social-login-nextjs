"use client";
import React from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
  const handleSignIn = (provider: string) => {
    signIn(provider);
  };

  return (
    <Button className="w-full" onClick={() => handleSignIn("google")} variant="outline">
      <Mail className="mr-2 h-4 w-4" />
      Sign In with Google
    </Button>
  );
};

export default SignInWithGoogle;
