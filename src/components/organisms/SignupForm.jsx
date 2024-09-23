import { useState } from "react";
import SubmitButton from "../atoms/SubmitButton";

const SignUpForm = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(email, username, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h1 className="text-sm font-bold text-left  mb-1 text-red-900">
              Username
            </h1>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-left  mb-1 text-red-900">
              Email
            </h1>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-left  mb-1 text-red-900">
              password
            </h1>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <SubmitButton
            label="Sign Up"
            color="bg-green-500 hover:bg-red-600 transition-all duration-300 ease-in-out"
          />
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
