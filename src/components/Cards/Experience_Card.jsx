"use client"


// Imports
import { useState } from "react";


// Primary Component
export default function Experience_Card({ ExperienceDetails, Card_No }) {
    const [IsAccordianOpen, setIsAccordianOpen] = useState(false);

    function toggleAccordian() {
        if (IsAccordianOpen) {
            setIsAccordianOpen(false)
        } else {
            setIsAccordianOpen(true)
        }
    }


    return (
        <div className={
            "card " + (
                (Card_No % 4 === 0) ? "bg-card-4"
                : (Card_No % 4 === 1) ? "bg-card-3"
                : (Card_No % 4 === 2) ? "bg-card-1"
                : (Card_No % 4 === 3) ? "bg-card-2"
            : "")
        }>
            <div className="flex gap-4 justify-between">
                <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-10 lg:items-center">
                    <p className="font-bold text-blue-800 mb-4 lg:mb-0">
                        <span>{ExperienceDetails.start_date} - </span>
                        {ExperienceDetails.end_date
                            ? (<span>{ExperienceDetails.end_date}</span>)
                            : (<span>Present</span>)
                        }
                    </p>

                    <div className="grid gap-1 text-lg lg:flex lg:gap-2">
                        <p className="font-bold">{ExperienceDetails.position}</p>
                        <p className="hidden lg:block">at</p>
                        <p className="font-semibold text-gray-800">{ExperienceDetails.organization}</p>
                    </div>
                </div>

                <div className="hidden sm:flex items-center">
                    <button type="button" onClick={() => toggleAccordian()} className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 w-full">
                        {IsAccordianOpen
                            ? (<i className="las la-minus"></i>)
                            : (<i className="las la-plus"></i>)
                        }
                    </button>
                </div>
            </div>

            <div className={IsAccordianOpen ? "block mt-6" : "hidden"}>
                <p className="text-lg font-semibold mb-3">Highlights :</p>
                <div>
                    <ul className="list-disc px-4 text-justify grid gap-2">
                        {ExperienceDetails.highlights.map((highlight, id) => (
                            <li key={id}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-4 sm:hidden">
                <button type="button" onClick={() => toggleAccordian()} className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 w-full">
                    {IsAccordianOpen ? "Collapse" : "View More"}
                </button>
            </div>
        </div>
    )
}
