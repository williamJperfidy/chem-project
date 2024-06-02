export default function Home() {
  return (
    <main>
      <span className="eh1">What is Elephant's Toothpaste?</span>
      <section className="esh2parent">
        <img src="/elephant-toothpaste-removebg-preview.png" width="100%"></img>
        <div>
          <span className="esh2">
            Elephant's toothpaste is a foamy substance caused by a chemical
            reaction, resulting in a large "volcano" of foam visually analagous
            to what one might imagine an elephant's toothpaste to look like.{" "}
          </span>
        </div>
      </section>
      <span className="eh2">The Chemistry</span>
      <ol>
        <li className="listGridText"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/Hydrogen-Peroxide" className="extLink">Hydrogen peroxide</a> is mixed with liquid washing detergent.</li>
        <li className="listGridText">Because the reaction is too slow, a <a href="https://www.energy.gov/science/doe-explainscatalysts" className="extLink">catalyst</a> is added to
          expedite the reaction. This catalyst is usually in the form of yeast.</li>
          <li className="listGridText">The hydrogen peroxide will decompose into oxygen and water. The
            detergent traps the oxygen, creating a foam.</li>
            <li className="listGridText">A food coloring is usually used in order to create a more dramatic and visually appealing reaction.</li>
            <li className="listGridText">This reaction is considered as <a href="https://www.bbc.co.uk/bitesize/articles/zb7wwnb" className="extLink">exothermic</a> as it releases heat.</li>
      </ol>
    </main>
  );
}
