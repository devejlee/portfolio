import { GlobalHeader } from "@components/GlobalHeader/GlobalHeader";
import '@styles/globals.scss'
import styles from '@app/layout.module.scss'
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <head />
    <body className={styles.wrapper}>
      <GlobalHeader />
      {children}
    </body>
  </html>
)

export default RootLayout