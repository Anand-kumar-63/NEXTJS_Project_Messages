"use client"
import { signIn } from "next-auth/react";
import React from "react";
import { useState } from "react";
// import { object } from "zod";
const page = () => {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
    username:""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = signIn("credentials", {
      email: FormData.email,
      password: FormData.password,
      redirect: true,
      callbackUrl: "/",
    });
    // if (result?.error) {
    //   console.error("login failed:",result.error)
    // }

  };
  return (
    <div className="min-h-[93vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md fixed">
      <h2 className="text-2xl text-black font-bold mb-6 text-center">
          Login!
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={FormData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black  placeholder:text-black bg-gray-200"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={FormData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black  placeholder:text-black bg-gray-200"
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            value={FormData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black  placeholder:text-black bg-gray-200"
          />
          <button type="submit" className="bg-blue-400 px-10 mx-30 py-1 m-2 hover:scale-105  rounded-2xl">sign-in</button>
        </form>
      </div>
    </div>
  );
};

export default page;
