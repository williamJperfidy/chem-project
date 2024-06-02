import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
      <nav>
      <div style={{ fontWeight: 900, fontSize:18, color:"#009dff", textAlign:"left", paddingLeft:0, paddingRight:25 }}><Link href="/" className="reactLink">Elephant's Toothpaste</Link></div>
        <div><Link href="/theexperiment" className="reactLink"><span className="navChild">THE EXPERIMENT</span></Link></div>
        <div><Link href="/science" className="reactLink"><span className="navChild">SCIENTIFIC BASIS</span></Link></div>
      </nav>

      {children}
      <div style={{ marginBottom:15, color:"white"}}>Hello</div>
</body>

    </html>
  );
}
