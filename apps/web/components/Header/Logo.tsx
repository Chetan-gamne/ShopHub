import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="zishop-logo"
        width={53}
        height={25}
        objectFit="contain"
        className="cursor-pointer md:ltr:-mr-3"
      />
    </Link>
  );
};

export default Logo;
