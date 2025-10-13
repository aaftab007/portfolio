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
    name: "Multi-Agent RAG Consultation System",
    description:
      "Built a multi-agent LLM system with Legal, Tech, and Business agents using Sentence-Transformers & Ollama RAG. Designed PDF chunking and citation-aware retrieval for semantic search across 25+ documents. Fully local deployment → zero API cost and inter-agent coordination framework.",
    technologies: ["Python", "RAG", "Ollama", "Sentence-Transformers", "LangChain"],
    github: "https://github.com/aaftab007/Multi-Agent-RAG-Consultation-System",
    demo: "",
    image: require(".//../../public/projects/fraud-detection-illustration.png"),
    available: true,
  },
  {
    id: 1,
    name: "AI Safety Vulnerability Analysis System",
    description:
      "Conducted adversarial robustness research using Monte Carlo Tree Search to test LLM safety (vicuna-7B, llama-2). Built gradient-based evaluation to detect prompt-injection weaknesses and benchmarked with AdvBench. Supported responsible disclosure of safety vulnerabilities.",
    technologies: ["PyTorch", "Transformers", "MCTS", "AI Safety", "Evaluation Pipelines"],
    github: "https://github.com/aaftab007/AI-Safety-Vulnerability-Analysis-System",
    demo: "",
    image: require(".//../../public/projects/cybersecurity-illustration.png"),
    available: true,
  },
  {
    id: 2,
    name: "Real-Time Crypto Price Streaming Platform",
    description:
      "Built a real-time crypto streamer using Playwright + ConnectRPC supporting 15+ pairs with sub-second latency. Designed LRU cache system reducing memory use 5× per stream. Deployed Next.js + Fastify stack with health monitoring and auto recovery.",
    technologies: ["TypeScript", "Next.js", "Playwright", "ConnectRPC", "Fastify"],
    github: "https://github.com/aaftab007/crypto-price-streamer",
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


