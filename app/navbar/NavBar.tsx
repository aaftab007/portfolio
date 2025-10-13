"use client";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const handleScroll = (sectionId: string) => {
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const elem = document.getElementById(sectionId);
      console.log("Looking for element:", sectionId, "Found:", elem); // Debug
      
      if (elem) {
        // Calculate offset for fixed navbar
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        console.error("Element not found:", sectionId);
        // Fallback: try scrolling to top of page
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0  mx-auto  flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
      <Link
        href="https://drive.google.com/file/d/1h6_Y0O2k_tMjh4YAKGz6TxEOGtJGGTAS/view?usp=sharing"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          className="py-2 px-2 text-[16px] sm:px-4 md:py-1"
        />
      </Link>

      <button
        data-blobity-magnetic="false"
        onClick={() => handleScroll("home")}
        aria-label="Scroll to Home Section"
        className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 cursor-pointer hover:bg-white/10 transition-colors"
      >
        Home
      </button>
      <button
        data-blobity-magnetic="false"
        onClick={() => handleScroll("work")}
        aria-label="Scroll to Work Section"
        className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 cursor-pointer hover:bg-white/10 transition-colors"
      >
        Work
      </button>

      <button
        data-blobity-magnetic="false"
        onClick={() => handleScroll("about")}
        aria-label="Scroll to About Section"
        className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 cursor-pointer hover:bg-white/10 transition-colors"
      >
        About
      </button>

      <button
        data-blobity-magnetic="false"
        onClick={() => handleScroll("contact")}
        aria-label="Scroll to Contact Section"
        className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4 cursor-pointer hover:bg-white/10 transition-colors"
      >
        Contact
      </button>
    </nav>
  );
};

export default NavBar;
