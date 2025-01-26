import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="p-8">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-black hover:bg-gray-800 text-white",
              card: "bg-gray-100",
            }
          }}
        />
      </div>
    </main>
  );
}