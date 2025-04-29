// app/signup/page.tsx
"use client";
import { fetchExternalImage } from "next/dist/server/image-optimizer";
import { useState } from "react";
// import { saveuser } from '@/app/helpers/savenewuser';
export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      console.log("enter valid password");
      return;
    }
    try {
      console.log("heyjfsbjbib")
      const data = await fetch("/api/sign-up", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      const user =await data.json();
      if (user.ok) {
        console.log("new user saved successfully",user.user);
        
      } else {
        console.log("Error in saving the user",user.error);
        alert(user.error);
      }
    } catch (err: any) {
      throw new Error("Internal server error:", err);
    }
    console.log("Signup form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl text-black font-bold mb-6 text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black  placeholder:text-black bg-gray-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg  placeholder:text-black bg-gray-200 text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg  placeholder:text-black bg-gray-200 text-black"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg placeholder:text-black bg-gray-200 text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-black py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
