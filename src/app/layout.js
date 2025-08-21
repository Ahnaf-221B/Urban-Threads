"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
        <SessionProvider>
          <div className="min-h-screen flex flex-col">
					<Navbar />
					<main className="flex-grow">{children}</main>
				<Footer />
				</div>
        </SessionProvider>
				
			</body>
		</html>
	);
}
