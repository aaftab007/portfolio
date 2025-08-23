export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "ML Fraud Detection System",
    description:
      "Built a scalable fraud detection system using XGBoost and FastAPI, processing 30k transactions per day with 95% accuracy. Implemented real-time scoring and automated alerts.",
    technologies: ["Python", "XGBoost", "FastAPI", "GCP", "Apache Spark"],
    github: "https://github.com/aaftab007/Big_Data_Final-Project",
    demo: "",
    image: require(".//../../public/projects/fraud-detection-illustration.png"),
    available: true,
  },
  {
    id: 1,
    name: "Machine Learning in Cybersecurity",
    description:
      "Developed machine learning models for malware detection and AI security analysis. Implemented feature engineering and model validation pipelines for cybersecurity applications.",
    technologies: ["Python", "PyTorch", "scikit-learn", "NLP", "Computer Vision"],
    github: "https://github.com/aaftab007/machine-learning-cybersecurity-labs",
    demo: "",
    image: require(".//../../public/projects/cybersecurity-illustration.png"),
    available: true,
  },
  {
    id: 2,
    name: "Classical Artwork GAN",
    description:
      "Built a Generative Adversarial Network using PyTorch to generate classical artwork. Implemented custom loss functions and training pipelines for high-quality image generation.",
    technologies: ["Python", "PyTorch", "GANs", "Computer Vision", "Deep Learning"],
    github: "https://github.com/aaftab007/classical-artwork-gan",
    demo: "",
    image: require(".//../../public/projects/gan-artwork-illustration.png"),
    available: true,
  },
  {
    id: 3,
    name: "Smart Pedometer",
    description:
      "Developed a real-time embedded pedometer using STM32F429ZI microcontroller and Mbed OS. Implemented step counting algorithms and power optimization for IoT applications.",
    technologies: ["C++", "STM32", "Mbed OS", "Embedded Systems", "IoT"],
    github: "https://github.com/aaftab007/smart-pedometer",
    demo: "",
    image: require(".//../../public/projects/pedometer-illustration.png"),
    available: true,
  },
  {
    id: 4,
    name: "Tri-Wizard Quest Game",
    description:
      "Built a Harry Potter-themed maze game using Java Swing with advanced algorithms, enemy AI, and professional GUI. Implemented pathfinding and collision detection systems.",
    technologies: ["Java", "Swing", "Algorithms", "Game Development", "AI"],
    github: "https://github.com/aaftab007/tri-wizard-quest",
    demo: "",
    image: require(".//../../public/projects/wizard-game-illustration.png"),
    available: true,
  },

];


