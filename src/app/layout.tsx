import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "AdiVerse Portfolio",
  description: "Developer Portfolio of AsRathore",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

      </body>

    </html>
  )
}