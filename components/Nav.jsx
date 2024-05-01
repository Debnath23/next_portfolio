"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/projects",
    name: "My Projects",
  },
  {
    id: 3,
    path: "/contact",
    name: "Contact",
  },
];

export default function Nav({ containerStyles, linkStyles, underlineStyles }) {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.id}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
