// import Link from "next/link";
// This is the Get Started page component
export default function GetStartedPage() {
    return (
        // Main container - takes full height of screen and centers content
        <main className="min-h-screen bg-white">

            <div className="p-16">

                <h1 className="text-4xl font-bold text-black text-center mb-8">
                    Get Started
                </h1>

                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold text-black mb-2">Step 1: Create Your Account</h2>
                            <p className="text-black">
                                Start by creating your account. It's quick and easy - just enter your email,
                                choose a password, and you'll be ready to go in minutes.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold text-black mb-2">Step 2: Complete Your Profile</h2>
                            <p className="text-black">
                                Tell us about yourself and customize your experience. Set your preferences
                                and make your account truly yours.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold text-black mb-2">Step 3: Explore Features</h2>
                            <p className="text-black">
                                Discover all the amazing features we offer. Browse through our tools
                                and start your first project today!
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        <a
                            href="/"
                            className="bg-gray-100 px-6 py-3 rounded-lg text-black hover:bg-gray-200"
                        >
                            Back to Home
                        </a>
                        <a
                            href="../signup"
                            className="bg-gray-100 px-6 py-3 rounded-lg text-black hover:bg-gray-200"
                        >
                            Sign Up Now
                        </a>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                    <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold text-black mb-2">Already have an account?</h2>
                            <p className="text-black">
                                Log in to your account to continue exploring our features.
                            </p>
                    </div>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        <a
                            href="../login"
                            className="bg-gray-100 px-6 py-3 rounded-lg text-black hover:bg-gray-200"
                        >
                            Log In
                        </a>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}