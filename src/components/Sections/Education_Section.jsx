// Data Import
import { Educations } from "db/APIs";


// Component Imports
import PrimaryHeading from "@/components/Headers/PrimaryHeading";
import Education_Card from "@/components/Cards/Education_Card";


// Primary Section
export default function Education_Section() {
    const Data = Educations
    
    if (Data) {
        return (
            <section className="section">
                <PrimaryHeading
                    Intro="FORGOT TO MENTION, MY"
                    Heading="Academic Qualification"
                />
                <div className="cards-section">
                    {Data.map((education_details, index) => (
                        <Education_Card EducationDetails={education_details} Card_No={index} />
                    ))}
                </div>
            </section>
        )
    }
}
