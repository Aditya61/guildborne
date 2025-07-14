import Image from "next/image";

export default function Home() {
  const userType: string = "Quest Provider";

  return (
    <main className="p-4">
      <div className="h-96 w-full p-6 rounded-lg shadow-inner shadow-[#BC9100]">
        <div className="welcome-letter">
          <h1 className="text-3xl sm:text-4xl text-[#720000] font-kaushanscript my-4">Welcome {userType},</h1>
          {(userType === "Adventurer") ? 
            <h2 className="text-xl sm:2xl text-[#720000] font-kaushanscript">Returned from a quest or ready to take on one, you are in the right place.</h2> :
            <h2 className="text-xl sm:2xl text-[#720000] font-kaushanscript">Got your quest fulfilled or here to provide one, you are in the right place.</h2>
          }
        </div>
        <div className="quick-links mt-12 sm:mt-32 w-full flex flex-wrap justify-evenly">
          <button className="my-2 px-10 hover:px-12 md:px-18 md:hover:px-20 pt-1 md:pt-2 pb-2 rounded-full shadow-xl hover:shadow-sm transition-all duration-300 bg-[#810000] text-white text-xl md:text-2xl text-center font-sansita">Guild Card</button>
          <button className="my-2 px-10 hover:px-12 md:px-18 md:hover:px-20 pt-1 md:pt-2 pb-2 rounded-full shadow-xl hover:shadow-sm transition-all duration-300 bg-[#810000] text-white text-xl md:text-2xl text-center font-sansita">Quest Board</button>
        </div>
      </div>
    </main>
  );
}
