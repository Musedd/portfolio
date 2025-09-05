export type ExperienceItem = {
    id: number;
    period: string;
    employer: string;
    role: string;
    roleHighlight: string,
    skills: string[];
    details: string[];
};

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        period: "08/2024 - present",
        employer: "Infineon Technologies AG | Regensburg",
        role: "Working Student, ",
        roleHighlight: "DevOps in Data Science",
        skills: ["Docker", "CI/CD", "GitLab", "OpenShift"],
        details: [
            "Development of deployment pipelines for data science applications on OpenShift",
            "Containerization of applications with Docker to ensure reproducible deployments",
            "Implementation of reverse proxies for access restriction",
            "Automation of deployments using CI/CD workflows in Gitlab"
        ]
    },
    {
       id: 2,
        period: "12/2023 - 07/2024",
        employer: "Infineon Technologies AG | Regensburg",
        role: "Working Student, ",
        roleHighlight: "Performance optimization in AI- Projects",
        skills: ["Python", "PyTorch", "OpenCV", "Matplotlib"],
        details: [
            "Support in AI-based image processing projects to improve efficiency",
            "Data collection and analysis of raw data",
            "Classification and preprocessing of datasets"
        ] 
    },
    {
        id: 3,
        period: "04/2023 - 08/2023",
        employer: "Intive GmbH | Regensburg",
        role: "Intern, ",
        roleHighlight: "Machine Learning Engineer",
        skills: ["Python", "Panda", "TensorFlow", "React", "Flask"],
        details: [
            "Supported data analysis in agile projects",
            "Developed data-driven web applications using React for the frontend and Flask for the backend",
            "Applied techniques such as classification, regression, and data preprocessing",
            "Learned fundamental concepts of machine learning such as generalization, overfitting, and fairness in ML models"
        ]
    },
    {
        id: 4,
        period: "01/2022 - 04/2023",
        employer: "Intive GmbH | Regensburg",
        role: "Working Student, ",
        roleHighlight: "QA Engineering",
        skills: ["Kotlin", "Swift", "UI-Tests", "Unit Tests", "Jira"],
        details: [
            "Ensured the quality of mobile iOS and Android applications in agile teams",
            "Developed automated UI tests in Swift and Kotlin",
            "Created and maintained test cases and unit tests"
        ]
    }
    
];