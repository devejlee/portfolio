import styles from "@app/layout.module.scss"
import { GlobalHeader } from "@components/GlobalHeader/GlobalHeader";
import { Inter } from "@next/font/google";
import "@styles/globals.scss"
import { ReactNode } from "react";

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={inter.className}>
    <head />
    <body>
      <div className={styles.gradientTop}></div>
      <div className={styles.wrapper}>
        <GlobalHeader />
        {children}
      </div>
    </body>
  </html>
)

export default RootLayout