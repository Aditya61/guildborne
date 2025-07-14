"use client"

import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";

export default function Home() {
  const [currForm, setCurrForm] = useState<string>("login");

  const openLoginForm = (() => {
    console.log(currForm);
    setCurrForm((prev: string): string => "login");
  })

  const openRegisterForm = (() => {
    console.log(currForm);
    setCurrForm((prev: string): string => "register");
  })

  const openQuestForm = (() => {
    console.log(currForm);
    setCurrForm((prev: string): string => "quest");
  })

  return (
    <main className="p-4">
      <div className="sm:p-6 flex flex-wrap space-y-5 justify-evenly">
        {(currForm === "login") ? <LoginForm /> : <></>}
        {(currForm === "register") ? <RegisterForm /> : <></>}
        {/* {(currForm === "quest") ? <LoginForm /> : <></>} */}

        
        {(currForm === "login") ? 
          <div className="space-y-6 text-center p-10">
            <h2 className="text-[#810000] text-xl md:text-2xl text-center font-kaushanscript">Haven't joined the guild yet?</h2>
            <button onClick={openRegisterForm} className="transition-all duration-300 text-[#810000] text-xl md:text-2xl text-center font-semibold font-kaushanscript hover:text-red-700">Register Today</button> 
          </div>
        : (currForm === "register") ? 
          <div className="space-y-6 text-center p-10">
            <h2 className="text-[#810000] text-xl md:text-2xl text-center font-kaushanscript">Already a guild member?</h2>
            <button onClick={openLoginForm} className="transition-all duration-300 text-[#810000] text-xl md:text-2xl text-center font-semibold font-kaushanscript hover:text-red-700">Verify your Identity</button> 
          </div>
        : <></>}
        
      </div>
    </main>
  );
}
