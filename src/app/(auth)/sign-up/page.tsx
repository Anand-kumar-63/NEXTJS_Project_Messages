// app/signup/page.tsx
"use client";
// import { fetchExternalImage } from "next/dist/server/image-optimizer";
import { useEffect, useState } from "react";
// import { useDebounceCallback } from 'usehooks-ts'
import { toast, Toaster } from "sonner";
import axios from "axios";
import { AxiosError } from "axios";
import { Loader2, UserMinus } from "lucide-react";
import APiresponse from "@/app/types/ApiRespnse";
// import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { TIMEOUT } from "dns";
// import { saveuser } from '@/app/helpers/savenewuser';
export default function SignupPage() {
  const router = useRouter();
  // const [username , setusername] = useState('')
  const [checkinguser, setcheckinguser] = useState(false);
  const [issubmitting, setissubmitting] = useState(false);
  const [usernamemessage, setusernamemessage] = useState("");
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const checkUser = async () => {
      if (FormData.name) {
        setcheckinguser(true);
        setusernamemessage("");
      }
      try {
        const usename = FormData.name;

        const response = await axios.get(
          `/api/check-username-unique?username=${usename}`
        );
        setusernamemessage(response.data.message);
      } catch (error) {
        const axioserror = error as AxiosError<APiresponse>;
        console.log(axioserror);
        setusernamemessage(
          axioserror.response?.data.message ?? "Error in checking the username"
        );
      } finally {
        setcheckinguser(false);
      }
    };
    const timeout = setTimeout(() => {
      checkUser();
    }, 500);

    return () => clearTimeout(timeout);
  }, [FormData.name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FormData.password != FormData.confirmPassword) {
      console.log("enter valid password");
      return;
    }
    try {
      const data = await fetch("/api/sign-up", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: FormData.email,
          password: FormData.password,
        }),
      });
      const user = await data.json();
      if (user.ok) {
        console.log("new user saved successfully", user);
        router.push(`/verify`);
      } else {
        console.log("Error in saving the user", user.error);
        alert(user.error);
      }
    } catch (err: any) {
      throw new Error("Internal server error:", err);
    }
    console.log("Signup form submitted:", FormData);
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
            value={FormData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-black  placeholder:text-black bg-gray-200"
            required
          />
          {checkinguser && <Loader2 className="animate-spin" />}
          {!checkinguser && usernamemessage && (
            <p
              className={`mt-[-10px] ml-2 text-sm ${
                usernamemessage === "username is unique"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {usernamemessage}
            </p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={FormData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg  placeholder:text-black bg-gray-200 text-black"
            required
          />
          <p className="text-sm text-green-500 mt-[-10px] ml-2">
            we are going to send a verification email
          </p>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={FormData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg  placeholder:text-black bg-gray-200 text-black"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={FormData.confirmPassword}
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
