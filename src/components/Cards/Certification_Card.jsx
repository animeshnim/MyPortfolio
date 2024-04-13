// View Certificate Button
function ViewCertificateButton({ url, text, className }) {
    if (url) {
        return (
            <div className={`${className} flex`}>
                <a href={`${url}`} target="_blank" className="bg-blue-600 text-white font-semibold text-center rounded-lg px-4 py-2 w-full">{text}</a>
            </div>
        )
    }
}


// Primary Component
export default function Certification_Card({ CertificationDetails, Card_No }) {
    return (
        <div className={
            "card " + (
                (Card_No % 4 === 0) ? "bg-card-1"
                : (Card_No % 4 === 1) ? "bg-card-2"
                : (Card_No % 4 === 2) ? "bg-card-3"
                : (Card_No % 4 === 3) ? "bg-card-4"
            : "")
        }>
            <div className="">
                <div className="md:grid md:grid-cols-[1fr_2fr_48px] md:gap-6 lg:gap-10">
                    <div className="mb-6 md:mb-0 sm:flex sm:items-center md:items-start sm:justify-between sm:gap-2">
                        <div className="font-bold text-blue-800 sm:flex sm:gap-2 md:flex-col">
                            <p>{CertificationDetails.issued_date}</p>
                            {CertificationDetails.will_expire
                                ? (
                                    <p className="text-gray-600 md:grid lg:block">
                                        <span>(Valid Upto: </span>
                                        <span>{CertificationDetails.valid_upto})</span>
                                    </p>
                                )
                                : null
                            }
                        </div>
                        <div>
                            <ViewCertificateButton
                                url={CertificationDetails.url}
                                text="View"
                                className="hidden sm:flex md:hidden"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 text-lg">
                        <div className="flex flex-col gap-1 lg:flex-row">
                            <p className="font-bold">{CertificationDetails.certificate}</p>
                            <p className="hidden lg:block">from</p>
                            <p className="font-semibold text-gray-800">{CertificationDetails.institute}</p>
                        </div>
                        {CertificationDetails.certificate_id
                            ? (
                                <p className="text-sm">
                                    <span className="font-semibold">Certificate ID: </span>
                                    <span>{CertificationDetails.certificate_id}</span>
                                </p>
                            ): null
                        }
                    </div>

                    <div className="lg:grid items-center">
                        <ViewCertificateButton
                            url={CertificationDetails.url}
                            text={<i className="las la-external-link-alt text-xl"></i>}
                            className="hidden md:flex"
                        />
                    </div>
                </div>
            </div>

            <ViewCertificateButton
                url={CertificationDetails.url}
                text="View Certificate"
                className="mt-4 sm:hidden"
            />

            {/* {CertificationDetails.url
                ? (
                    <div className="flex mt-4">
                        <a href={`${CertificationDetails.url}`} target="_blank" className="bg-blue-600 text-white font-semibold text-center rounded-lg px-4 py-2 w-full">View Certificate</a>
                    </div>
                ) : null
            } */}
        </div>
    )
}
