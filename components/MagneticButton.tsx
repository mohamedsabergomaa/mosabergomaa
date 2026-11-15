"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  "data-cursor"?: string;
  "data-cursor-label"?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={pos}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.4 }}
      className={clsx("inline-flex", className)}
      {...(rest as Record<string, string>)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
