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
    name: "Real-Time Pedometer System",
    description:
      "Developed a real-time pedometer on STM32F429ZI using Mbed OS and SPI-based gyroscope interfacing, implementing threshold-based step detection and distance estimation algorithms with low-latency embedded sensor data processing. Integrated LCD visualization, sensor calibration, and real-time firmware scheduling for continuous motion tracking, optimizing embedded application responsiveness, noise filtering accuracy, and reliable real-time performance on constrained microcontroller hardware.",
    technologies: ["C++", "STM32", "Mbed OS", "SPI", "FreeRTOS", "Embedded Systems"],
    github: "https://github.com/aaftab007/smart-pedometer",
    demo: "",
    image: require(".//../../public/projects/pedometer-illustration.png"),
    available: true,
  },
  {
    id: 1,
    name: "RISC-V Processor Simulator",
    description:
      "Built a RISC-V processor simulator supporting single-stage and five-stage pipelined architectures, implementing instruction decoding, ALU execution, memory operations, branch handling, and register write-back for low-level architectural analysis. Implemented hazard detection, data forwarding, pipeline stalling, and control-flow handling mechanisms, enabling performance analysis of instruction throughput, pipeline efficiency, and execution behavior across multiple RISC-V test scenarios.",
    technologies: ["C++", "RISC-V", "Computer Architecture", "Pipeline Design", "Hazard Detection"],
    github: "https://github.com/aaftab007/risc-v-processor",
    demo: "",
    image: require(".//../../public/projects/riscv-processor-illustration.jpg"),
    available: true,
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Real-Time Crypto Price Streaming Platform",
    description:
      "Built a real-time crypto streamer using Playwright + ConnectRPC supporting 15+ pairs with sub-second latency. Designed LRU cache system reducing memory use 5× per stream. Deployed Next.js + Fastify stack with health monitoring and auto recovery.",
    technologies: ["TypeScript", "Next.js", "Playwright", "ConnectRPC", "Fastify"],
    github: "https://github.com/aaftab007/crypto-price-streamer",
    demo: "",
    image: require(".//../../public/projects/gan-artwork-illustration.png"),
    available: true,
  },
];


