'use client';

import React from "react";
import './globals.css'
import Authentication from "@/components/rename";
import MainAppBar from "@/components/AppBar";
import BottomAppBar from "@/components/AppBar/BottomAppBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Authentication>
          <div className="w-screen h-screen flex flex-col">
            <MainAppBar/>
            <div className="grow w-full">
              <div className="h-fit overflow-auto bg-white">
                { children }
              </div>
            </div>
            <BottomAppBar/>
          </div>
        </Authentication>
      </body>
    </html>
  )
}
