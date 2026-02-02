"use client";

import { usePathname } from "next/navigation";
import { DesktopTrafficLight } from "./desktop-traffic-light";

export function DesktopHeader() {
  const pathname = usePathname();

  if (pathname.includes("/search")) {
    return null;
  }

  // This is used to make the header draggable on macOS
  return (
    <div
      data-tauri-drag-region
      className="absolute top-0 left-0 right-0 h-5 z-[51] group border-radius-[10px] overflow-hidden"
    >
      <div className="hidden group-hover:flex">
        <DesktopTrafficLight />
      </div>
    </div>
  );
}
