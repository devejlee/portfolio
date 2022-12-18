'use client';
import styles from "@components/Tooltip/Tooltip.module.scss"
import React, { ReactNode, useState } from "react";

interface TooltipProps {
  text: string
  direction: 'top' | 'right' | 'bottom' | 'left'
  children: ReactNode
}

const Tooltip = ({ text, direction, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.tooltipWrapper}>
      {showTooltip && <div className={`${styles.tooltipText} ${styles[`tooltipText-${direction}`]}`}>{text}</div>}
      {children}
    </div>
  );
}

export { Tooltip }