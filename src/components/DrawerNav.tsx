"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../constants";

export default function DrawerNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 z-[110] bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md">
          <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2 mt-6 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block py-3 px-2 rounded text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 px-6">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
