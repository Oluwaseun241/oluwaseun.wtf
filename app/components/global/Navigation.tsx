"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

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
    // { label: "Playlists", path: "/playlists" },
    // { label: "Studio", path: "/studio" },
  ];

  return (
    <nav className={`flex items-center ${className}`}>
      <div className="flex space-x-6 text-gray-500">
        {navItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path !== "/" && pathname.startsWith(item.path));

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`hover:text-black dark:hover:text-white transition-colors ${
                isActive ? "font-medium text-black dark:text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="ml-6">
        <ThemeToggle />
      </div>
    </nav>
  );
}
