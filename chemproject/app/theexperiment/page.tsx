export default function Home() {
    return (
      <main>        
        <span className="eh1" style={{ textAlign:"left", display:"inline-block", fontSize:70, marginBottom:10 }}>Supplies and Equipment</span>
        <ol>
          <li className="listGridText">20oz Gatorade bottle</li>
          <li className="listGridText">Standard detergent</li>
          <li className="listGridText">Hydrogen peroxide <img src="https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/structures/265/851/c3680381-a60f-4424-82fd-6b1681321cb0/640/c3680381-a60f-4424-82fd-6b1681321cb0.png" height="25px"></img></li>
          <li className="listGridText">Baker's Yeast</li>
        </ol>
        <span className="eh1" style={{ textAlign:"left", display:"inline-block", fontSize:70, marginBottom:10 }}>Experiment Records</span>
        <div style={{ display:"grid", gridTemplateColumns:"33% 33% 33%" }}>
        <span className="eh2">Trial 1</span>
        <span className="eh2">Trial 2</span>
        <div></div>
        <video width="320" height="500" controls>
          <source src="/IMG_1110.mp4" type="video/mp4"></source>
            Your browser does not support this video.
        </video>
        <video width="320" height="500" controls>
          <source src="/IMG_1111.mp4" type="video/mp4"></source>
            Your browser does not support this video.
        </video>
        <div>
        <div style={{ backgroundColor: "#009dff", padding:"20px", lineHeight:.99, fontSize:20}}>
          <span style={{ color:"white", }}>The largest elephant's toothpaste record is held by Mark Rober, et. al. at a height of 20 meters.  The record was created on August 22nd, 2020, when the fountain was created.</span>
        </div>
        </div>
        </div>
        
        <br></br>
        
      </main>
    );
  }  