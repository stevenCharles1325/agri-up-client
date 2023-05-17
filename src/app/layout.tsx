'use client';

import React from "react";
import './globals.css'
import MainAppBar from "@/components/AppBar";
import BottomAppBar from "@/components/AppBar/BottomAppBar";
import Authenticator from "@/components/Authentication";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Authenticator>
          <div className="w-screen h-screen flex flex-col">
            <MainAppBar/>
            <div className="grow w-full">
              <div className="h-fit overflow-auto bg-white">
                { children }
              </div>
            </div>
            <BottomAppBar/>
          </div>
        </Authenticator>
      </body>
    </html>
  )
}
