export interface experienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experienceDetails: experienceProps[] = [
  {
    title: "Software Engineer Intern",
    company: "Maxgen Technologies Pvt. Ltd",
    duration: "Jan 2023 – May 2023",
    description: "Developed a fault-tolerant sharded, distributed Kafka-backed price-inventory pipeline streaming 30k messages per day, enabling sub-second updates and cutting manual data cleanup by 60%. Implemented Redis caching and MySQL indexing for scalable booking service, reducing p95 latency from 800ms to 300ms for 5000 concurrent users. Built Prometheus/Grafana SLOs and runbooks, cutting MTTR by 40% and ending OAuth2 auth incidents.",
    technologies: ["Kafka", "Redis", "MySQL", "Prometheus", "Grafana"]
  },
  {
    title: "Machine Learning Intern",
    company: "Sparks To Ideas",
    duration: "May 2022 – Aug 2022",
    description: "Collected, cleaned, and engineered features for multi-source datasets, improving model accuracy by 17%. Fine-tuned PyTorch classification and NLP models, reducing false positives by 12% via hyperparameter tuning. Deployed models via FastAPI REST API integrated into a client dashboard, enabling sub-second predictions and real-time analytics.",
    technologies: ["PyTorch", "FastAPI", "NLP", "Scikit-learn", "Docker"]
  },
  {
    title: "Software Engineer Intern",
    company: "Cloudwapp Technologies Pvt. Ltd",
    duration: "Feb 2021 – May 2021",
    description: "Built fault-tolerant middleware for legacy task API, reducing server crashes by 70% and auto-recovering 85% of failed requests for 1000+ users. Added Slack alerts and on-call runbooks, lifting backend uptime to 99.9% and cutting support tickets by 80%. Refactored memory-leak hotspots and optimized query paths, boosting application performance by 30% while mentoring the team in Agile sprints.",
    technologies: ["Node.js", "Express", "MongoDB", "Slack", "Agile"]
  },
  {
    title: "Web Developer Intern",
    company: "Global Galaxy International Consultancy",
    duration: "Aug 2020 – Nov 2020",
    description: "Architected client platform migration from jQuery to React, reducing page-load time by 56% and improving mobile engagement by 20%. Integrated Lighthouse CI & Core Web Vitals, CDN-tuning assets for a 40% speed gain in 2 weeks. Built a GitHub Actions pipeline running Jest & Lighthouse, raising test coverage to 85% and reducing bugs.",
    technologies: ["React", "JavaScript", "GitHub Actions", "Lighthouse"]
  }
];
