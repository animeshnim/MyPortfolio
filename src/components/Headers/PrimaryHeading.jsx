// Primary Component
export default function PrimaryHeading({ Intro, Heading, Text }) {
    return (
        <header className="px-2">
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-2 sm:mb-4 md:mb-6">
                <div className="w-full h-[3px] text-center bg-gray-700 rounded-full"></div>
                <p className="min-w-fit text-sm md:text-base font-medium text-gray-700">{Intro}</p>
                <div className="w-full h-[3px] text-center bg-gray-700 rounded-full"></div>
            </div>

            <div className="flex flex-col items-center gap-6 mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-center">{Heading}</h3>
                <div className="w-[48px] h-[8px] text-center bg-purple-700 rounded-full"></div>
            </div>
        </header>
    );
}
