// Data Import
import { About } from "db/APIs"


// Component Import
import PrimaryHeading from "@/components/Headers/PrimaryHeading"


// Primary Component
export default function About_Section() {
    const Data = About

    return (
        <section className="section">
            <PrimaryHeading
                Intro="MORE INFO"
                Heading="About Me"
            />
            <div className="px-4 sm:px-8 flex flex-col gap-6 sm:gap-8 md:gap-10 pb-8 mt-8">
                {Data.map((paragraphs, index) => (
                    <p className="md:text-lg">{paragraphs}</p>
                ))}
            </div>
        </section>
    )
}
