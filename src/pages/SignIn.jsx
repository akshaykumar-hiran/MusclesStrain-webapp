import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Sign in to continue
        </p>

        <form className="space-y-5">
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

          {/* Remember me + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-lime-400" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="hover:text-lime-400">
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button className="w-full bg-lime-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-lime-500 transition">
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-lime-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
