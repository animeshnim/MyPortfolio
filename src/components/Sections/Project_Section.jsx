// Data Import
import { Projects } from "db/APIs";


// Component Imports
import PrimaryHeading from "@/components/Headers/PrimaryHeading";
import Project_Card from "@/components/Cards/Project_Card";


// Primary Section
export default function Project_Section() {
    const Data = Projects
    
    if (Data) {
        return (
            <section className="section">
                <PrimaryHeading
                    Intro="TAKE A LOOK AT MY"
                    Heading="Projects"
                />
                <div className="cards-section">
                    {Data.map((project_details, index) => (
                        <Project_Card ProjectDetails={project_details} Card_No={index} />
                    ))}
                </div>
            </section>
        )
    }
}
