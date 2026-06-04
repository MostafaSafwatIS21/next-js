import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "My App",
  description: "Migrating to App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
