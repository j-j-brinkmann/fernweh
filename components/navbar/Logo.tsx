import Link from "next/link";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "../ui/button";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: ["400"],
});

function Logo() {
  return (
    <div className="flex">
      <Button size="icon" asChild>
        <Link href="/">
          <FaPaperPlane className="w-6 h-6" />
        </Link>
      </Button>
      <Link href="/" className="flex">
        <span className={`${lobster.variable} mx-1.5 mt-0.5 text-2xl`}>
          Fernweh
        </span>
      </Link>
    </div>
  );
}

export default Logo;
