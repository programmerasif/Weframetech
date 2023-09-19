"use client"
import { useState } from "react";
import Dashboard from "./dashboard/page";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "./container/page";

export default function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
   <div className="flex">
   <div className="relative">
   <div className={`absolute  ${isSidebarOpen ? "-left-96 lg:left-0 duration-300" : "left-0 duration-300" } `}>
   <Dashboard />
   
   </div>
   <div className={`bg-[#0D0B21] text-white font-bold ring-2 fixed top-80  block lg:hidden p-3 rounded-full ${isSidebarOpen ? "left-1 duration-300" : "right-9 duration-7000"}`} onClick={toggleSidebar}>
          
            {
              isSidebarOpen ? <FaChevronRight /> : <FaChevronLeft />
            }
        </div>
   </div>

   <div  className="text-white bg-black lg:min-w-[calc(100vw-345px)] min-w-full ms-auto">
    <Container />
   </div>
   </div>
  )
}
