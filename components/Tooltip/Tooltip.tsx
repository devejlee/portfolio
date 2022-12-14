'use client';
import styles from "@components/Tooltip/Tooltip.module.scss"
import React, { ReactNode, useState } from "react";

interface TooltipProps {
  text: string
  children: ReactNode
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.tooltipWrapper}>
      {showTooltip && <div className={styles.tooltipText}>{text}</div>}
      {children}
    </div>
  );
}

export { Tooltip }