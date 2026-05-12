export interface experienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experienceDetails: experienceProps[] = [
  {
    title: "Embedded Performance & Power Optimization Engineer",
    company: "Micron Technology",
    duration: "Aug 2024 – Present",
    description: "Led system-level performance and power optimization for Micron memory subsystems (DDR5/LPDDR/NAND-based storage platforms) using Perf, OProfile, and LTTng, reducing memory subsystem power consumption by 23%. Designed and tuned DRAM power management policies including self-refresh states, power-down modes, and dynamic frequency scaling (DFx/DFS). Conducted deep-dive tracing and interrupt latency analysis using Trace32 and LTTng, reducing latency variance by 16%. Optimized NAND flash initialization and DRAM training sequences, improving device initialization time by 14%. Developed Python-based automation frameworks for performance benchmarking and regression validation, reducing manual validation effort by 38%.",
    technologies: ["C", "C++", "Python", "DDR5", "LPDDR", "NVMe", "NAND Flash", "Perf", "LTTng", "Trace32", "JTAG", "GDB", "PCIe"]
  },
  {
    title: "Embedded Software Engineer – Performance & Power Optimization",
    company: "Infineon Technologies",
    duration: "Feb 2022 – Jul 2023",
    description: "Developed and optimized C/C++ firmware for automotive microcontrollers (AURIX/TriCore-based platforms), improving real-time responsiveness in safety-critical systems. Performed system-level performance profiling using Tracealyzer and ETM/ITM trace tools, reducing interrupt latency by 18% through optimized ISR design. Implemented FreeRTOS-based task scheduling enhancements and memory pool optimization, improving system determinism. Achieved 20% improvement in standby power efficiency by tuning power modes and clock gating strategies. Optimized CAN, LIN, and SPI automotive communication drivers and contributed to AUTOSAR stack integration.",
    technologies: ["C", "C++", "FreeRTOS", "AUTOSAR", "AURIX", "CAN", "LIN", "SPI", "Tracealyzer", "ETM/ITM", "DMA", "Python"]
  },
  {
    title: "Software Engineer Intern",
    company: "Samsung R&D Institute India - Bangalore",
    duration: "May 2021 – Jul 2021",
    description: "Contributed to firmware and software development initiatives at Samsung R&D Bangalore, working on embedded software components and system-level integration tasks. Assisted in developing and validating software modules, writing unit tests, and supporting debugging efforts across the development lifecycle. Gained hands-on experience with embedded development workflows, version control practices, and cross-functional collaboration within a large-scale R&D environment.",
    technologies: ["C", "C++", "Python", "Embedded Software", "Firmware", "Linux", "Git"]
  },
  {
    title: "Software Engineer Intern",
    company: "Cloudwapp Technologies Pvt. Ltd.",
    duration: "May 2020 – Aug 2020",
    description: "Built a React + Node.js dashboard for 500+ customers, enabling self-service analytics and reducing ticket volume by 40%. Indexed 150K+ MongoDB documents, reducing dashboard load time from 3.5s to 0.8s. Secured APIs with JWT authentication and bcrypt password hashing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"]
  }
];
