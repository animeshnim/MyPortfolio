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
export default function Award_Card({ AwardDetails, Card_No }) {
    return (
        <div className={
            "card " + (
                (Card_No % 4 === 0) ? "bg-card-4"
                : (Card_No % 4 === 1) ? "bg-card-3"
                : (Card_No % 4 === 2) ? "bg-card-1"
                : (Card_No % 4 === 3) ? "bg-card-2"
            : "")
        }>
            <div className="">
                <div className="md:grid md:grid-cols-[1fr_2fr_48px] md:gap-6 lg:gap-10 lg:items-center">
                    <div className="mb-6 md:mb-0 sm:flex sm:items-center md:items-start sm:justify-between sm:gap-2">
                        <p>
                            <span className="font-medium text-gray-700 md:block lg:inline">Awarded on </span>
                            <span className="font-bold text-blue-800">{AwardDetails.issued_date}</span>
                        </p>
                        <div>
                            <ViewCertificateButton
                                url={AwardDetails.url}
                                text="View"
                                className="hidden sm:flex md:hidden"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 text-lg">
                        <div className="flex flex-col gap-1 lg:flex-row">
                            <p className="font-bold">{AwardDetails.award} Award</p>
                            <p className="hidden lg:block">from</p>
                            <p className="font-semibold text-gray-800">{AwardDetails.organization}</p>
                        </div>
                    </div>

                    <div className="lg:grid items-center">
                        <ViewCertificateButton
                            url={AwardDetails.url}
                            text={<i className="las la-external-link-alt text-xl"></i>}
                            className="hidden md:flex"
                        />
                    </div>
                </div>
            </div>

            <ViewCertificateButton
                url={AwardDetails.url}
                text="View Certificate"
                className="mt-4 sm:hidden"
            />
        </div>
    )
}
