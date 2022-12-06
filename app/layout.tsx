import GlobalHeader from "@components/GlobalHeader/GlobalHeader";
import '@styles/globals.scss'
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <head />
    <body>
      <GlobalHeader />
      {children}
    </body>
  </html>
)

export default RootLayout