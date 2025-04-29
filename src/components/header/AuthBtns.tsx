"use client";

import { SessionProvider, useSession } from "next-auth/react";
import React from "react";

const AuthBtns = () => {
  return (
    <SessionProvider>
      <LoginBtn />
    </SessionProvider>
  );
};

const LoginBtn: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user.email ? (
        <button>Signed in</button>
      ) : (
        <button>Signed out</button>
      )}
    </>
  );
};

export default AuthBtns;
