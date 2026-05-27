export interface experienceProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experienceDetails: experienceProps[] = [
  {
    title: "Embedded Software / Firmware Engineer",
    company: "KPIT Technologies",
    duration: "Oct 2024 – Present",
    description:
      "Contributed to automotive ECU firmware for EV powertrain and battery systems on ARM Cortex-M and Infineon/NXP platforms, supporting CAN, LIN, SPI, I2C, and UART communication. Helped re-architect AUTOSAR-based modular software with C/C++ and FreeRTOS, enabling secure OTA updates, MISRA C compliance, and CI pipelines with Git and Jenkins — achieving 20% faster releases. Supported EV inverter and battery control validation with MATLAB/Simulink. Debugged ECU communication using CANoe, CANalyzer, CANape, ETAS INCA, JTAG, and logic analyzers, reducing firmware defects by 23%. Contributed to UDS (ISO 14229) and OBD-II diagnostics, improving early fault detection accuracy by 33%. Collaborated with cross-functional teams under ASPICE and ISO 26262, improving real-time system response by 17% in production.",
    technologies: [
      "C",
      "C++",
      "FreeRTOS",
      "AUTOSAR",
      "ARM Cortex-M",
      "CAN",
      "LIN",
      "SPI",
      "I2C",
      "MATLAB/Simulink",
      "CANoe",
      "UDS",
      "ISO 26262",
      "MISRA C",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company: "New York University",
    duration: "Jan 2024 – May 2024",
    description:
      "Supported research at NYU Applied Global Public Health Initiative, developing data processing pipelines in Python (pandas, spaCy) to clean and structure insights from 1,000+ global health reports. Analyzed maternal and child health datasets from WHO and NGO sources to identify regional vulnerability patterns. Applied NLP and exploratory data analysis techniques to extract insights from unstructured health data, supporting evidence mapping and research workflows across multiple public-health projects.",
    technologies: ["Python", "pandas", "spaCy", "NLP", "Data Pipelines", "SQL", "Research"],
  },
  {
    title: "Embedded Software Developer",
    company: "eInfochips (An Arrow Company)",
    duration: "Oct 2021 – Aug 2023",
    description:
      "Developed embedded firmware for IoT and industrial systems on ARM Cortex-M and NXP LPC microcontrollers in Embedded C, interfacing sensors via SPI, I2C, and UART — improving system efficiency by 22%. Designed FreeRTOS-based firmware architecture for multitasking, scheduling, and interrupt handling, achieving a 43% performance gain across client products. Implemented wireless stacks with Wi-Fi, Bluetooth Low Energy, and LoRa for device-to-cloud connectivity, reducing communication latency by 20%. Optimized sensor drivers and real-time data acquisition pipelines, improving power efficiency and extending battery life by 16%. Performed validation with JTAG/SWD, logic analyzers, and serial protocol analyzers. Used Git, Jira, and Eclipse with GCC ARM toolchains, improving delivery efficiency by 37%.",
    technologies: [
      "Embedded C",
      "C++",
      "FreeRTOS",
      "ARM Cortex-M",
      "NXP LPC",
      "SPI",
      "I2C",
      "UART",
      "BLE",
      "LoRa",
      "Wi-Fi",
      "JTAG",
      "Git",
    ],
  },
  {
    title: "Embedded Software Engineer Intern",
    company: "Samsung R&D Institute India - Bangalore",
    duration: "May 2021 – Jul 2021",
    description:
      "Contributed to firmware and embedded software development at Samsung R&D Bangalore, working on embedded software components and system-level integration tasks. Assisted in developing and validating software modules, writing unit tests, and supporting debugging efforts across the development lifecycle. Gained hands-on experience with embedded development workflows, version control practices, and cross-functional collaboration within a large-scale R&D environment.",
    technologies: ["C", "C++", "Embedded Software", "Firmware", "Linux", "Git"],
  },
];
