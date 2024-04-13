// Data Import
import { WorkExperiences } from "db/APIs";


// Component Imports
import PrimaryHeading from "@/components/Headers/PrimaryHeading";
import Experience_Card from "@/components/Cards/Experience_Card";


// Primary Section
export default function Experience_Section() {
    const Data = WorkExperiences
    
    if (Data) {
        return (
            <section className="section">
                <PrimaryHeading
                    Intro="EXPLORE MY"
                    Heading="Work Experiences"
                />
                <div className="cards-section">
                    {Data.map((experience_details, index) => (
                        <Experience_Card ExperienceDetails={experience_details} Card_No={index} />
                    ))}
                </div>
            </section>
        )
    }
}
