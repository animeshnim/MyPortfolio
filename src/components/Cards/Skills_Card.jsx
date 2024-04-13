// Imports
import Image from "next/image";


// Skill Card (Individual Skill)
function Skill_Card({ SkillData }) {
    return (
        <div className="rounded-lg flex flex-col justify-between items-center gap-2 md:gap-3 p-3 md:py-5 w-[100px] md:w-[128px]">
            <div className="flex justify-center">
                <Image
                    src={SkillData.icon}
                    alt=""
                    width={0}
                    height={0}
                    style={{width: '80%', height: 'auto', borderRadius: '0.4rem'}}
                    unoptimized
                />
            </div>
            <div className="text-sm font-bold text-center">{SkillData.skill}</div>
        </div>
    )
}


// Primary Component
export default function Skills_Card({ SkillDetails, Card_No }) {
    if (SkillDetails) {
        return (
            <div className="card bg-card-extra">
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-6">{SkillDetails.category}</p>
                <div className="flex gap-3 sm:gap-6 justify-center flex-wrap">
                    {SkillDetails.skills.map((skill_data, index) => (
                        <Skill_Card SkillData={skill_data} />
                    ))}
                </div>
            </div>
        )
    }
}
