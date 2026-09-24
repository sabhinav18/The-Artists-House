import React, { useEffect, useRef, useState } from "react";

/**
 * Subtle custom cursor for desktop. Disabled on touch/tablet via CSS
 * (see .cursor-dot media query in index.css) and skipped entirely if the
 * device has no fine pointer.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleOver = (e) => {
      if (e.target.closest("[data-cursor-hover]")) setExpanded(true);
    };
    const handleOut = (e) => {
      if (e.target.closest("[data-cursor-hover]")) setExpanded(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  if (!enabled) return null;

  return <div ref={dotRef} className={`cursor-dot ${expanded ? "expand" : ""}`} aria-hidden="true" />;
}
