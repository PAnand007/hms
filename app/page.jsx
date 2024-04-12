"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  router.push("/dashboard/inst");
  return <div>Home</div>;
};

export default Home;
