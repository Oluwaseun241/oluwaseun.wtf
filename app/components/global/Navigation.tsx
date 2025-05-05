"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { label: "About", path: "/" },
    { label: "Career", path: "/career" },
    { label: "Writing", path: "/writing" },
    { label: "Projects", path: "/projects" },
    { label: "Playlists", path: "/playlists" },
    { label: "Studio", path: "/studio" },
  ];

  return (
    <nav className={`flex space-x-6 text-gray-500 ${className}`}>
      {navItems.map((item) => {
        const isActive =
          pathname === item.path ||
          (item.path !== "/" && pathname.startsWith(item.path));

        return (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-black transition-colors ${
              isActive ? "font-medium text-black" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
