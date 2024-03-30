import { Inter } from "next/font/google";
import "../../public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chef Oso",
  description: "Recipes from Mister Oso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
