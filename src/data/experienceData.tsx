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
            "As a working student in DevOps for Data Science at Infineon, I developed deployment pipelines for containerized applications on OpenShift and automated workflows using GitLab CI/CD. My work also included implementing reverse proxies to ensure secure access control and contributing to reliable and reproducible deployments with Docker."
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
            "At Infineon, I contributed to AI-based image processing projects aimed at improving efficiency. My responsibilities included data collection and analysis, preprocessing and classification of datasets, and supporting the optimization of performance in applied machine learning workflows using Python, PyTorch, and OpenCV."

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
            "During my internship at Intive, I supported data analysis in agile projects and gained hands-on experience in developing data-driven web applications with React for the frontend and Flask for the backend. I applied machine learning techniques such as classification, regression, and data preprocessing, while also deepening my understanding of core concepts like generalization, overfitting, and fairness in ML models."
        ]
    },
    {
        id: 4,
        period: "01/2022 - 04/2023",
        employer: "Intive GmbH | Regensburg",
        role: "Working Student, ",
        roleHighlight: "QA Engineering",
        skills: ["Kotlin", "Swift", "UI-Tests", "Unit Tests", "Regression Tests", "Jira"],
        details: [
            "At Intive, I contributed to QA Engineering by ensuring the quality of mobile iOS and Android applications within agile teams. I developed automated UI tests in Swift and Kotlin and created as well as maintained test cases and unit tests to support continuous delivery and reliable app performance."

        ]
    }
    
];