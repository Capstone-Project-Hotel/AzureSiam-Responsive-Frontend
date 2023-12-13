import "./globals.css";
import type { Metadata } from "next";

import StyledComponentsRegistryAntd from "../lib/AntdRegistry";
import StyledComponentsRegistry from "../lib/ScRegistry";

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AzureSiam Responsive",
  description: "Hotel Booking Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistryAntd>
          <StyledComponentsRegistry> {children}</StyledComponentsRegistry>
        </StyledComponentsRegistryAntd>
      </body>
    </html>
  );
}
