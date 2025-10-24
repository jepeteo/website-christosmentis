"use client";

import { useState } from "react";
import { Cookie } from "lucide-react";

export function CookieSettingsButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    // Trigger the cookie settings modal
    window.dispatchEvent(new CustomEvent("openCookieSettings"));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 w-48 rounded-lg border border-cm-divider bg-cm-surface p-2 text-xs text-cm-body shadow-lg">
            Manage cookie preferences
          </div>
        )}
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cm-divider bg-cm-surface text-cm-primary shadow-lg transition-all hover:scale-110 hover:bg-cm-primary hover:text-cm-bg focus:outline-none focus:ring-2 focus:ring-cm-primary focus:ring-offset-2"
          aria-label="Cookie Settings"
        >
          <Cookie className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
