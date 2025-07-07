"use client";
import { useState } from "react";
import AppBar from "./AppBar";
import DrawerNav from "./DrawerNav";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ThemeProvider>
      <AppBar onOpenDrawer={() => setDrawerOpen(true)} />
      <DrawerNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className="flex min-h-screen flex-col pt-16">{children}</main>
    </ThemeProvider>
  );
}
