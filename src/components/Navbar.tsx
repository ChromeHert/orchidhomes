"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants"
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
    const [mobiledrawer, setMobileDrawer] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawer(!mobiledrawer);
    };

  return (
    <>
        <nav className="fixed top-2 z-50 w-full px-4">
            <div className="flex items-center justify-between rounded-lg bg-black py-3">
                <div className="flex flex-shrink-0 items-center justify-between">
                    <Image 
                    src='/logo.png'
                    alt="site-logo" 
                    width={60} 
                    height={30}/>
                    <span className="text-base tracking-tight text-white">OrchidHomes</span>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex items-center gap-8">
                        {NAV_LINKS.map((item, index) => (<li key={index}>
                            <Link className="text-base text-white hover:text-neutral-500" href={item.url}> 
                            {item.title} 
                            </Link>
                        </li>) )}
                    </ul>
                </div>
                <div className="hidden text-base text-white gap-4 lg:flex">
                    <Button variant="outline" className="bg-black">
                        Sign in
                    </Button>
                    <Button className="bg-slate-800 mx-3">
                        Sign up
                    </Button>
                </div>
                
            <div className="flex-col justify-end text-white md:flex lg:hidden mr-2">
               <button onClick={toggleNavbar}>
                {mobiledrawer ? <X /> : <Menu />}
                </button> 
            </div>
            </div>
            {mobiledrawer && (
                <div className="rounded-md bg-black lg:hidden">
                    <ul className="flex flex-col items-center">
                    {NAV_LINKS.map((item, index) => (
                        <li key={index} className="py-4">
                            <Link className="text-base text-white hover:text-amber-700" href={item.url}> 
                            {item.title} 
                            </Link>
                        </li>
                    ))}
                    </ul>
                    <div className="flex items-center justify-center pb-8 text-white lg:hidden">
                    <Button variant="outline" className="mr-2 bg-black">Sign in</Button>

                    <Button className="bg-slate-800">Sign up</Button>
                    </div>
                </div>
            )}
        </nav>
    </>
  )
}

export default Navbar