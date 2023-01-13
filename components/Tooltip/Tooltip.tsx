'use client';
import styles from '@components/Tooltip/Tooltip.module.scss';
import { ThemeContext } from '@store/theme';
import { ReactNode, useState, useContext } from 'react';

interface TooltipProps {
  text: string
  direction: 'top' | 'right' | 'bottom' | 'left'
  children: ReactNode
}

const Tooltip = ({ text, direction, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const { theme } = useContext(ThemeContext);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.tooltipWrapper}>
      {showTooltip && <div className={`${styles.tooltipText} ${styles[`tooltipText-${direction}`]} ${theme === 'light' ? `${styles.tooltipTextLight} ${styles[`tooltipText-${direction}Light`]}` : `${styles.tooltipTextDark} ${styles[`tooltipText-${direction}Dark`]}`}`}>{text}</div>}
      {children}
    </div>
  );
};

export { Tooltip };