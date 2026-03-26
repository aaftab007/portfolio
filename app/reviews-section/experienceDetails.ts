export interface experienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experienceDetails: experienceProps[] = [
  {
    title: "Graduate Research Associate",
    company: "NYU Applied Global Public Health Initiative",
    duration: "Aug 2024 – May 2025",
    description: "Developed GPT-4 + spaCy pipelines to extract and summarize insights from 2K+ global-health reports, accelerating literature review and policy analysis. Built predictive ML models (XGBoost, logistic regression) for maternal and child health risk mapping across 10+ regions. Automated ETL workflows with Airflow, FastAPI, and SQL, cutting data refresh latency by 40%.",
    technologies: ["Python", "GPT-4", "spaCy", "Airflow", "SQL", "XGBoost", "FastAPI"]
  },
  {
    title: "Software Engineer Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    duration: "Jan 2023 – May 2023",
    description: "Optimized REST APIs (Node.js + Express) for user auth and content delivery — 35% faster average response time serving 10K+ daily requests. Redesigned MySQL schema with indexing and normalization — 40% faster queries on analytics endpoints. Deployed AWS EC2 + RDS backend stack with CloudWatch monitoring for API health.",
    technologies: ["Node.js", "Express", "MySQL", "AWS", "RDS", "CloudWatch"]
  },
  {
    title: "Software Engineer Intern",
    company: "Cloudwapp Technologies Pvt. Ltd.",
    duration: "Feb 2021 – May 2021",
    description: "Built a React + Node.js dashboard for 500+ customers, enabling self-service analytics and reducing ticket volume by 40%. Indexed 150K+ MongoDB documents → reduced dashboard load time 3.5s → 0.8s. Secured APIs with JWT authentication and bcrypt password hashing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"]
  },
  {
    title: "Machine Learning Intern",
    company: "Sparks To Ideas",
    duration: "May 2022 – Aug 2022",
    description: "Developed spam detection model using TF-IDF + logistic regression — 85% precision / 82% recall on 3K+ customer tickets. Analyzed 200+ misclassified samples, introducing multilingual and short-query augmentation. Deployed classifier to production, reducing manual review workload by 30% weekly.",
    technologies: ["Python", "scikit-learn", "TF-IDF", "Logistic Regression"]
  }
];
