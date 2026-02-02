"use client";

export function DesktopTrafficLight() {
  return (
    <div className="fixed top-[8px] left-[8px] space-x-[8px] flex">
      {/* Close button (red) */}
      <button
        type="button"
        className="w-[10px] h-[10px] bg-border rounded-full hover:bg-red-500 cursor-pointer"
        aria-label="Close window"
      />
      {/* Minimize button (yellow) */}
      <button
        type="button"
        className="w-[10px] h-[10px] bg-border rounded-full hover:bg-yellow-500 cursor-pointer"
        aria-label="Minimize window"
      />
      {/* Maximize/Restore button (green) */}
      <button
        type="button"
        className="w-[10px] h-[10px] bg-border rounded-full hover:bg-green-500 cursor-pointer"
        aria-label="Toggle maximize"
      />
    </div>
  );
}
