"use client";

import React, { useState } from "react";
import SidebarNav from "@/components/SidebarNav";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="sidebar-layout">
      <SidebarNav isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="sidebar-content min-h-screen">
        {children}
      </main>
    </div>
  );
}
