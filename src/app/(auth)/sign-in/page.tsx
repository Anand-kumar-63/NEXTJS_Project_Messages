"use client";
import { SessionProvider } from "next-auth/react";
import Signinclient from "./SignInClient";
// export const dynamic = "force-dynamic";
export default function singinpage() {
  return (
    <div>
      <SessionProvider>
        <Signinclient />
      </SessionProvider>
    </div>
  );
}
