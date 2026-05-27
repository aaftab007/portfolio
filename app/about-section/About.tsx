import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I DESIGN REAL-TIME EMBEDDED SYSTEMS AND FIRMWARE FOR AUTOMOTIVE, IOT, AND EDGE PLATFORMS."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "Embedded Software & Firmware Engineer with 3+ years of experience building real-time embedded systems for industrial IoT and automotive applications — skilled in C, C++, Embedded C, RTOS architectures, ARM Cortex-M platforms, low-level driver development, and system optimization."
              }
            />
            <AnimatedBody
              text={
                "At KPIT Technologies and eInfochips, I've worked on automotive ECU firmware, AUTOSAR and FreeRTOS-based designs, sensor integration, and communication protocols (CAN, SPI, I2C, UART), with hands-on debugging using JTAG, oscilloscopes, and logic analyzers."
              }
            />
            <AnimatedBody
              text={
                "I focus on reliable, scalable firmware across edge and cloud-connected systems — from protocol stacks and OTA updates to AWS IoT and Azure integration. Open to collaborations in embedded systems, firmware engineering, and IoT product development."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Embedded & Firmware"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "C, C++, Embedded C, FreeRTOS, AUTOSAR, MISRA-C, driver development, bootloaders, interrupt handling, embedded Linux (Yocto)"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Platforms & MCUs"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "ARM Cortex-M, STM32, ESP32, NXP i.MX6UL, TI MCUs, Infineon/NXP automotive platforms, Linux-based embedded systems"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Protocols & IoT"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "SPI, I2C, UART, CAN, LIN, BLE, Wi-Fi, LoRaWAN, OTA updates, sensor interfacing, edge data acquisition"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Cloud & Debugging"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "AWS IoT Core, Azure IoT Hub, CI/CD, Git, Jenkins, JTAG, CANoe, oscilloscopes, logic analyzers, unit & integration testing"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Publication"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Driver Drowsiness Detection Using AI — International Journal of All Research Education and Scientific Methods (IJARESM), vol. 10, issue 6, June 2022."
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
