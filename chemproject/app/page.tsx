/*import Image from "next/image";*/
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{ textAlign:"center" }}>
        <span className="eh1 title" style={{ textAlign:"center", marginBottom:5, marginTop:"5%" }}>Elephant's Toothpaste</span>
        <img src="/image2vector.svg" width="80%"></img>
        <section style={{ display:"grid", gridTemplateColumns:"47.5% 5% 47.5%", textAlign:"left", margin:"15px 0 15px 0" }}>
          <Link href="/theexperiment" className="reactLink">
          <div className="mpdiv">
            <span className="eh2" style={{ fontSize:"25px", padding:"0 0 5px 0", fontFamily:"Segoe UI", fontWeight:700 }}>The Experiment 🡢</span>
            <span>See details regarding the elephants toothpaste experiment.</span>
          </div>
          </Link>
          <div></div>
          <Link href="/science" className="reactLink">
          <div className="mpdiv">
          <span className="eh2" style={{ fontSize:"25px", padding:"0 0 5px 0", fontFamily:"Segoe UI", fontWeight:700 }}>The Science 🡢</span>
            <span>See details regarding the chemistry behind an elephant's toothpaste reaction</span>
          </div>
          </Link>

        </section>
        <span style={{ fontSize:20, display:"inline-block" }}>Project by Nathan Kitlas and William Lee for Mr Avena's Chemistry Class</span>
      </div>
    </main>
  );
}
