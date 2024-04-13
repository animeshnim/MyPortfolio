"use client";


// Imports
import { useState } from "react";


// Primary Component
export default function Education_Card({ EducationDetails, Card_No }) {
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
                (Card_No % 4 === 0) ? "bg-card-1"
                : (Card_No % 4 === 1) ? "bg-card-2"
                : (Card_No % 4 === 2) ? "bg-card-3"
                : (Card_No % 4 === 3) ? "bg-card-4"
            : "")
        }>
            <div className="md:grid md:grid-cols-[1.2fr_2fr] lg:grid-cols-[1fr_2fr] md:gap-6 lg:gap-10">
                <p className="font-bold text-blue-800 mb-6 lg:mb-0">
                    <span>{EducationDetails.start_date} - </span>
                    {EducationDetails.end_date
                        ? (<span>{EducationDetails.end_date}</span>)
                        : (<span>Pursuing</span>)
                    }
                </p>

                <div className="grid gap-1 text-lg">
                    <p className="">
                        <span className="font-bold block lg:inline">{EducationDetails.course}</span>
                        <span className="hidden lg:inline"> in </span>
                        <span className="font-semibold text-gray-700 block lg:inline">{EducationDetails.subject}</span>
                    </p>
                    <div className="grid gap-1">
                        <p className="font-bold text-gray-800">{EducationDetails.institute}</p>
                        <p className="font-semibold text-gray-700">{EducationDetails.university}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
