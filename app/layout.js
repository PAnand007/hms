import "./globals.css";


export const metadata = {
  title: "HMS",
  description: "Hostel Managment System managed by ArunaBytes Innovations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
