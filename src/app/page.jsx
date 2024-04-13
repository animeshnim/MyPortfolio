// Component Imports
import Header_Section from "@/components/Sections/Header_Section"
import About_Section from "@/components/Sections/About_Section"
import Skills_Section from "@/components/Sections/Skills_Section"
import Project_Section from "@/components/Sections/Project_Section"
import Experience_Section from "@/components/Sections/Experience_Section"
import Certification_Section from "@/components/Sections/Certification_Section"
import Award_Section from "@/components/Sections/Award_Section"
import Education_Section from "@/components/Sections/Education_Section"
import Footer_Section from '@/components/Sections/Footer_Section';


// Home Page
export default function HomePage() {
    return (
        <main>
            <Header_Section />
            <About_Section />
            <Skills_Section />
            <Project_Section />
            <Experience_Section />
            <Certification_Section />
            <Award_Section />
            <Education_Section />
            <Footer_Section />
        </main>
    )
}
