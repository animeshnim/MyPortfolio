"use client"


// Imports
import { useState } from "react";
import Image from "next/image";


// Primary Component
export default function Project_Card({ ProjectDetails, Card_No }) {
    const [IsAccordianOpen, setIsAccordianOpen] = useState(false);

    function toggleAccordian() {
        if (IsAccordianOpen) {
            setIsAccordianOpen(false)
        } else {
            setIsAccordianOpen(true)
        }
    }

    
    // More Information Button
    function MoreInfoButton({  }) {
        return (
            <button type="button" onClick={() => toggleAccordian()} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
                {IsAccordianOpen
                    ? (<p className="">
                        <i className="las la-minus"></i>
                        <span className="pl-2">Collapse Highlights</span>
                    </p>)
                    : (<p>
                        <i className="las la-plus"></i>
                        <span className="pl-2">Expand Highlights</span>
                    </p>)
                }
            </button>
        )
    }


    return (
        <div className={
            "card grid gap-8 lg:gap-10 md:grid-cols-2 " + (
                (Card_No % 4 === 0) ? "bg-card-1"
                : (Card_No % 4 === 1) ? "bg-card-2"
                : (Card_No % 4 === 2) ? "bg-card-3"
                : (Card_No % 4 === 3) ? "bg-card-4"
            : "")
        }>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <div className="p-2 lg:p-3 bg-neutral-400 rounded-lg lg:rounded-xl">
                        <Image
                            src={ProjectDetails.preview_image}
                            alt="Project Image"
                            width={0}
                            height={0}
                            style={{width: '100%', height: 'auto', borderRadius: '0.4rem'}}
                            unoptimized
                        />
                    </div>
                    <div className="flex gap-2">
                    {ProjectDetails.live_url
                            ? <a href={ProjectDetails.live_url} target="_blank" className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg w-full">Live Preview</a>
                            : null
                        }

                        {ProjectDetails.code_url
                            ? <a href={ProjectDetails.code_url} target="_blank" className="bg-blue-600 text-white text-center px-4 py-2 rounded-lg w-full">View Code</a>
                            : null
                        }
                    </div>
                </div>
                {ProjectDetails.highlights
                    ? (<div className="hidden md:block lg:hidden">
                        <MoreInfoButton />
                    </div>) : null
                }
            </div>
            <div className="flex flex-col gap-6 justify-between">
                <div className="flex flex-col gap-6 pt-1">
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-xl lg:text-2xl">{ProjectDetails.title}</p>
                        <p className="">{ProjectDetails.description}</p>
                    </div>
                    {ProjectDetails.tech_stack
                        ? (
                            <div className="text-sm lg:text-base">
                                <p className="font-bold text-base lg:text-lg mb-2">Tech Stack :</p>
                                <div>
                                    <ul className="list-disc ml-4 grid gap-1">
                                        {ProjectDetails.tech_stack.map((stack, id) => (
                                            <li key={id} className="">
                                                <span className="font-semibold">{stack.category}: </span>
                                                <span>{stack.tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : null
                    }
                </div>

                {ProjectDetails.highlights
                        ? (<div className="block md:hidden lg:block">
                            <MoreInfoButton />
                        </div>) : null
                    }
            </div>

            {ProjectDetails.highlights
                ? (<div className={IsAccordianOpen ? "block md:col-span-2" : "hidden"}>
                    <p className="text-lg font-semibold mb-3">Highlights :</p>
                    <div>
                        <ul className="list-disc px-4 text-justify grid gap-2">
                            {ProjectDetails.highlights.map((highlight, id) => (
                                <li key={id}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </div>) : null
            }
        </div>
    )
}
