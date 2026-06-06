"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ padding: "80px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {children}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #${id} {
            padding: 60px 16px !important;
          }
        }
        @media (max-width: 480px) {
          #${id} {
            padding: 48px 14px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
