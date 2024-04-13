// Data Import
import { Awards } from "db/APIs";


// Component Imports
import PrimaryHeading from "@/components/Headers/PrimaryHeading";
import Award_Card from "@/components/Cards/Award_Card"


// Primary Section
export default function Award_Section() {
    const Data = Awards
    
    if (Data) {
        return (
            <section className="section">
                <PrimaryHeading
                    Intro="HAVE A LOOK AT THE"
                    Heading="Honors and Awards"
                />
                <div className="cards-section">
                    {Data.map((award_details, index) => (
                        <Award_Card AwardDetails={award_details} Card_No={index} />
                    ))}
                </div>
            </section>
        )
    }
}
