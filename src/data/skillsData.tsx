import cppLogo from '../assets/cpp.png'
import pythonLogo from '../assets/python.png'
import reactLogo from '../assets/React.png'
import tsLogo from '../assets/TypeScript.png'
import dockerLogo from '../assets/Docker.png'
import linuxLogo from '../assets/Linux.png'

export type SkillItems = {
    id: number;
    skill_name: string;
    img: string;
}

export const skills : SkillItems[] = [
    {
        id: 1,
        skill_name: "C++",
        img: cppLogo
    },
    {
        id: 2,
        skill_name: "Python",
        img: pythonLogo
    },
    {
        id: 3,
        skill_name: "React",
        img: reactLogo
    },
    {
        id: 4,
        skill_name: "TypeScript",
        img: tsLogo
    },
    {
        id: 5,
        skill_name: "Docker",
        img: dockerLogo
    },
    {
        id: 6,
        skill_name: "Linux",
        img: linuxLogo
    },
]