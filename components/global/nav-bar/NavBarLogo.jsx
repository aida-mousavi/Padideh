import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoDesktop from "@/public/image/logo.svg";

export default function NavBarLogo() {
  return (
    <Link href={"/"} className=" hidden lg:flex ">
    <Image
      alt="LOGO"
      src={LogoDesktop}
      className=" -translate-x-8  "
    />  
  </Link>
  )
}

