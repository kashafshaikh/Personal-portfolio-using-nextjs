import SkillCard from "./skillscard";

export default function Skills(){
    const skillsData = [
        {
            id: 1,
            title: "HTML",
            image: "/skills-images/html.jfif",
            percent: "90%",
        },
        {
            id: 2,
            title: "CSS",
            image: "/skills-images/css.png",
            percent: "75%",
        },
        {
            id: 3,
            title: "Javascript",
            image: "/skills-images/js.jfif",
            percent: "75%",
        },
        {
            id: 4,
            title: "Typescript",
            image: "/skills-images/ts.png",
            percent: "85%",
        },
        {
            id: 5,
            title: "Nextjs",
            image: "/skills-images/nextJs.webp",
            percent: "40%",
        },
        {
            id: 6,
            title: "TailwindCSS",
            image: "/skills-images/tailwind-img.png",
            percent: "85%",
        },
    ]
    return(
        <div className="pt-20 pb-16 bg-[#121212]">
            <h1 className="text-4xl md:text-5xl text-center py-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">My Skills</h1>
            <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 items-center">{skillsData.map((skill)=>{
                return <div key={skill.id}>
                    <SkillCard skill={skill}/>
                </div>
            })}
            </div>
        </div>
    )
}