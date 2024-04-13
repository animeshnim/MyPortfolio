// Data Import
import { User } from 'db/APIs.js';


// Imports
import Image from "next/image";


// Section Image
function Section_Image() {
    return (
        <Image 
            src="/static/images/Hero_Image.svg"
            alt="Intro-Image" 
            width={0}
            height={0}
            style={{width: '100%', height: 'auto'}}
            unoptimized
            priority
        />
    )
}


// Primary Component
export default function Header_Section({  }) {
    const UserDetails = User

    return (
        <section className="grid lg:grid-cols-2 p-4 gap-4 min-h-[100svh] max-w-screen-2xl mx-auto my-auto">
            <div className="p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                <div className="">
                    <div className="">
                        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold mt-2 mb-1 md:mb-2 xl:mb-3">{`${UserDetails.name}`}</h1>
                        <p className="text-lg md:text-xl xl:text-3xl font-medium">{`${UserDetails.title}`}</p>
                        <div className="md:text-lg lg:text-base font-medium my-6 xl:my-10">
                            <p className="md:hidden">{`${UserDetails.short_tagline}`}</p>
                            <p className="hidden md:block">{`${UserDetails.long_tagline}`}</p>
                        </div>
                    </div>
                </div>

                <div className="py-6 lg:hidden">
                    <Section_Image />
                </div>

                <div className="md:text-lg text-center mt-8 md:mt-12 lg:mt-8 xl:mt-6">
                    <a href={`${UserDetails.resume_url}`} target="_blank" className="inline-block px-6 py-4 bg-blue-600 text-white font-medium w-full rounded-lg">
                        <i className="las la-download text-2xl mr-2"></i>
                        <span>Get Resume</span>
                    </a>
                </div>
            </div>

            <div className="hidden lg:flex flex-col justify-center p-4 md:p-8 lg:p-12 xl:p-16">
                <Section_Image />
            </div>
        </section>
    )
}
