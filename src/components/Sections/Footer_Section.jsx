// Data Imports
import { User } from "db/APIs.js"


// Primary Component
export default function Footer_Section({  }) {
    const UserDetails = User

    return (
        <section className="section px-6 sm:px-8 pb-4 sm:pb-8 lg:pb-20">
            <div className="grid gap-16 sm:gap-8 sm:grid-cols-2 md:px-4 lg:px-0 lg:grid-cols-[1.7fr_1fr_1fr]">
                <div className="px-4">
                    <h4 className="mb-6 sm:mb-4 text-lg font-bold">Contact Me</h4>
                    <div className="flex flex-col gap-4">
                        <a href={`tel:${UserDetails.phone}`}>
                            <div className="font-semibold">Phone</div>
                            <div className="text-blue-800 font-medium">{UserDetails.phone}</div>
                        </a>
                        <a href={`mailto:${UserDetails.email}`}>
                            <div className="font-semibold">E-mail</div>
                            <div className="text-blue-800 font-medium">{UserDetails.email}</div>
                        </a>
                        <a href={`${UserDetails.resume_url}`} target="_blank">
                            <div className="font-semibold">Resume</div>
                            <div className="text-blue-800 font-medium">Download Resume</div>
                        </a>
                    </div>
                </div>

                {UserDetails.profiles
                    ? (<div className="px-4">
                        <h4 className="mb-6 sm:mb-4 text-lg font-bold">Elsewhere</h4>
                        <div className="flex flex-col gap-4">
                            {UserDetails.profiles.map((profile_details, index) => (
                                <a href={`${profile_details.url}`} target="_blank">
                                    <div className="font-semibold">{profile_details.name}</div>
                                    <div className="text-blue-800 font-medium">{profile_details.url.slice(8)}</div>
                                </a>
                            ))}
                        </div>
                    </div>) : null
                }

                <footer className="lg:row-start-1">
                    <p className="lg:hidden sm:mt-6">
                        <span><i className="las la-copyright"></i> </span>
                        <span className="font-semibold">Animesh Nim.</span>
                        <span> All Rights Reserved.</span>
                    </p>
                    <div className="hidden lg:flex gap-2 items-center bg-card-extra rounded-full p-2 mr-10">
                        <div>
                            <p><i className="las la-copyright text-5xl"></i> </p>
                        </div>
                        <div className="">
                            <p className="font-semibold text-lg">Animesh Nim</p>
                            <p className="font-medium"> All Rights Reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}
