import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visual TenX",
  description: "Best Digital Marketing Company In India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
