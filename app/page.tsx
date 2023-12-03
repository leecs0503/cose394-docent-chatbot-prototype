import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <Link
      href={"/onboard"}
      className="w-full h-screen font-[museum] bg-dark flex items-center justify-center flex-col text-white"
    >
      <div className="text-[15px] font-light">내 손 안의 도슨트,</div>
      <div className="font-bold text-[50px]">DoSonT</div>
    </Link>
  );
};

export default Home;
