"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const [variant, setVariant] = useState<"default" | "view" | "drag" | "play">(
    "default"
  );
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    // Only run on pointer devices
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      if (interactive) {
        const v = interactive.dataset.cursor as
          | "view"
          | "drag"
          | "play"
          | undefined;
        setVariant(v ?? "view");
        const lbl = interactive.dataset.cursorLabel;
        setLabel(lbl ?? (v === "play" ? "PLAY" : "VIEW"));
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: variant === "default" ? 1 : 3.5
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250 }}
      >
        <div
          className={`h-3 w-3 rounded-full ${
            variant === "default" ? "bg-accent" : "bg-accent/90"
          } mix-blend-difference`}
        />
      </motion.div>
      <motion.div
        ref={labelRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          opacity: hidden || variant === "default" ? 0 : 1
        }}
      >
        <span className="font-mono text-[10px] font-medium tracking-widest text-bg-primary mix-blend-difference">
          {label}
        </span>
      </motion.div>
    </>
  );
}
