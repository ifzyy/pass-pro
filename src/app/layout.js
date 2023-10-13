"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/app/Nav";
import SplashScreen from "./splashscreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Index from "./page";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}) {
  const pathName = usePathname();
const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  
  return (
    <html lang="en">
      <body>
        {isLoading && isHome ? (
          <SplashScreen  finishLoading={(()=> setIsLoading(false))}/>
        ) : (
          <>
            <Nav />
            <Index />
          {children}
          </>
        )}
      </body>
    </html>
  );
}
