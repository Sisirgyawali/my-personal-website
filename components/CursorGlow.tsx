"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    const grow = () => {
      glow.style.width = "56px";
      glow.style.height = "56px";
      glow.style.opacity = "0.8";
    };

    const shrink = () => {
      glow.style.width = "32px";
      glow.style.height = "32px";
      glow.style.opacity = "0.55";
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="cursor-glow" />;
}
