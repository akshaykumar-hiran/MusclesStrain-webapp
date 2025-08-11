import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Join us today
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-lime-400 text-white outline-none transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-lime-400 text-white outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-lime-400 text-white outline-none transition"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-lime-400 text-white outline-none transition"
              placeholder="Confirm your password"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-lime-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-lime-500 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-lime-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
