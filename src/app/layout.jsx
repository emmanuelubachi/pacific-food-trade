import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pacific Food Trade: Data-Driven Insights",
  description: "PACIFIC DATAVIZ CHALLENGE 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
