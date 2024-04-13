// Data Import
import { Skills } from "db/APIs"


// Component Import
import PrimaryHeading from "@/components/Headers/PrimaryHeading";
import SkillsCard from "@/components/Cards/Skills_Card";


// Primary Component
export default function Skills_Section() {
    const Data = Skills
    
    if (Data) {
        return (
            <section className="section">
                <PrimaryHeading
                    Intro="CHECK OUT MY"
                    Heading="Technical Skills"
                />

                <div className="cards-section">
                    {Data.map((skill_details, index) => (
                        <SkillsCard SkillDetails={skill_details} Card_No={index} />
                    ))}
                </div>
            </section>
        )
    }
}
