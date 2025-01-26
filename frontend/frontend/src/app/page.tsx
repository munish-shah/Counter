import Link from "next/link";

export default async function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Counter
        </h1>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-100 p-4 text-black hover:bg-gray-200"
            href="/about"
          >
            <h3 className="text-2xl font-bold">About →</h3>
            <div className="text-lg">
              Learn about what makes our product special
            </div>
          </Link>
          
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-100 p-4 text-black hover:bg-gray-200"
            href="/get-started"
          >
            <h3 className="text-2xl font-bold">Create Your Account →</h3>
            <div className="text-lg">
              Get setup with our product in minutes
            </div>
          </Link>

          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-100 p-4 text-black hover:bg-gray-200"
            href="/main"
          >
            <h3 className="text-2xl font-bold">Get Financial Advice →</h3>
            <div className="text-lg">
              Become a financial expert
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
