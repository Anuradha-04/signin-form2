"use client";

import Signin from "@/components/signin";
import React, { useState, useEffect } from 'react';
import Signup from "@/components/signup";

export default function Home() {

  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>

      {!showSignup ? (
        <div>
          <Signin setShowSignup={setShowSignup}/>
        </div>
      ) : (
        <div>
          <Signup />
        </div>
      )}
    </div>
  );
}
