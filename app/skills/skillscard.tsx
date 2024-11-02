import Image from "next/image";

type Props={
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    };
};

export default function SkillCard({skill}:Props){
    const {image, percent, title} = skill;
    return(
        <div className="p-6 hover:bg-gradient-to-r from-purple-800 to-pink-800 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
            <Image src={image} alt={title} width={80} height={80} className="object-cover mx-auto"/>
            <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
            <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-50">{percent}</div>
        </div>
    )
}

