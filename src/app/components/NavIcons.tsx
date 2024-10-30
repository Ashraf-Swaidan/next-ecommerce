"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CartModal from "./CartModal";


const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

    //  temporary
  const isLoggedIn = false;
  const handleProfile = () => {
    if(!isLoggedIn) {
        router.push("login");
    }
    setIsProfileOpen((prev) => (!prev))
  }
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-9 left-0  text-sm shadow-md z-20">
            <Link href={"/"}>Profile</Link>
            <div className="mt-2 cursor-pointer"> Logout</div>
        </div>
        
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
        src="/cart.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => setIsCartOpen(prev => !prev)}
      />
      <div className="absolute -top-3 -right-4 w-5 h-5 bg-alert rounded-full text-white text-sm flex items-center justify-center">2</div>
       
      </div>
      
      {isCartOpen && (
        <CartModal />
      )}
    </div>
  );
};

export default NavIcons;
