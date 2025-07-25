import { SpeedInsights } from "@vercel/speed-insights/next"

import "../styles/base.css";
import "../styles/fonts.css";

export const metadata = {
  title: "CRS + Salesforce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cs-transition">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
