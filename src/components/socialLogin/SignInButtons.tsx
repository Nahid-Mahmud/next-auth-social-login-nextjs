import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import SignInWithGoogle from "./SignInWithGoogle";
import SignOutButton from "./SignOutButton";

export default async function SignInButtons() {
  const session = await getServerSession(authOptions);
  console.log(session);

  // const handleSignIn = (provider: string) => {
  //   signIn(provider);
  // };

  if (!session) {
    return (
      <div className="flex flex-col space-y-4">
        <SignInWithGoogle />
      </div>
    );
  }
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
      {/* <Button onClick={() => signOut()}>Sign out</Button> */}
      <SignOutButton />
    </>
  );
}
