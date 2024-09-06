"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignInButtons() {
  const { data: session } = useSession();
  console.log(session);

  const handleSignIn = (provider: string) => {
    signIn(provider);
  };

  if (session) {
    return (
      <>
        <div className="flex items-center space-x-4">
          <p>Signed in as {session?.user?.name}</p>
          <Image
            src={session?.user?.image as string}
            alt="Profile picture"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

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
