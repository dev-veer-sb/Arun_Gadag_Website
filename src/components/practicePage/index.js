import React from 'react'
import MainContentInAllPage from '../../commoncomp/Hamburger/headLinesWithLogo'
import '../practicePage/practicePage.css';

const Practice = () => {
  const legalAreas = [
    "Agricultural Law",
    "Alternative Dispute Resolution",
    "Appellate Tribunal",
    "Arbitration",
    "Banking Law",
    "Business Law",
    "Civil Litigation",
    "Criminal Cases",
    "Criminal Defamation",
    "Commercial Court Cases",
    "Civil Defamation",
    "Constitutional Law",
    "Consumer Law",
    "Criminal Law",
    "Environmental Law",
    "Estate and Trust",
    "Family Laws",
    "General Practice",
    "Insurance Laws",
    "Joint Ventures",
    "Labour Laws",
    "Property Laws",
    "Mediation",
    "Mergers and Acquisitions",
    "Motor Vehicle Law",
    "Sexual Harassment",
    "Trade",
    "Wills and Probate",
    "Companies Matters",
    "Cases under Negotiable Instruments (NCLT)",
    "Criminal Cases under IPC",
    "Karnataka Appellate Tribunal",
    "POCSO Cases"
];



  return (
    <div>
      <MainContentInAllPage/>
      <section className="about-advocate">
                    <h2>About Area of practice</h2>
                    <p>
                    Our legal expertise spans across a broad spectrum of practice areas, ensuring comprehensive legal solutions tailored to your unique needs. Our commitment to excellence is reflected in every case we handle, from the initial consultation to the final resolution. </p> 
                </section>

<div className='serviceBody'>
                {legalAreas.map((value)=>{
                  return (<div className="serviceContainers">
{value}
                </div>)})}
                </div>
              
      </div>
  )
}

export default Practice