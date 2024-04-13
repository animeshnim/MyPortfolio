// Data Import
import { Certifications } from "db/APIs";


// Component Imports
import PrimaryHeading from "@/components/Headers/PrimaryHeading";
import Certification_Card from "@/components/Cards/Certification_Card";


// Primary Section
export default function Certification_Section() {
    const Data = Certifications
    
    if (Data) {
        return (
            <section className="section">
                <PrimaryHeading
                    Intro="CHECK OUT MY"
                    Heading="Certifications"
                />
                <div className="cards-section">
                    {Data.map((certification_details, index) => (
                        <Certification_Card CertificationDetails={certification_details} Card_No={index} />
                    ))}
                </div>
            </section>
        )
    }
}
