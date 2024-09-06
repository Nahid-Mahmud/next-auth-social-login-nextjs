"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export default function SignInButtons() {
  const handleSignIn = (provider: string) => {
    console.log(provider);
  };

  return (
    <div className="flex flex-col space-y-4">
      <Button className="w-full" onClick={() => handleSignIn("google")} variant="outline">
        <Mail className="mr-2 h-4 w-4" />
        Sign In with Google
      </Button>
      <Button className="w-full" onClick={() => handleSignIn("github")} variant="outline">
        <Github className="mr-2 h-4 w-4" />
        Sign In with GitHub
      </Button>
    </div>
  );
}
