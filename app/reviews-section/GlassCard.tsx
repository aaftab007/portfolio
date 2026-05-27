import * as React from "react";
import Image from "next/image";

export interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  company?: string;
  duration?: string;
  technologies?: string[];
}

// Function to get company logo path
const getCompanyLogo = (companyName: string): string => {
  const logoMap: { [key: string]: string } = {
    "KPIT Technologies": "/companies/kpit-logo.png",
    "New York University": "/companies/nyu-logo.png",
    "eInfochips (An Arrow Company)": "/companies/einfochips-logo.png",
    "Samsung R&D Institute India - Bangalore": "/companies/samsung-logo.png",
    "Micron Technology": "/companies/micron-logo.png",
    "Infineon Technologies": "/companies/infineon-logo.png",
    "Cloudwapp Technologies Pvt. Ltd.": "/companies/cloudwapp-logo.png",
  };

  return logoMap[companyName] || "/companies/kpit-logo.png";
};

const ExperienceCard = React.forwardRef<HTMLDivElement, ExperienceCardProps>(
  ({ className, title, description, company, duration, technologies, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group relative flex h-full min-h-[560px] w-full flex-col rounded-2xl border border-white/20 bg-transparent p-8 transition-all duration-300 ease-out hover:border-white/40 ${className}`}
        {...props}
      >
        {/* Header Section */}
        <div className="mb-6">
          {/* Company Badge */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full overflow-hidden">
              {company ? (
                <Image
                  src={getCompanyLogo(company)}
                  alt={`${company} logo`}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-lg font-bold text-[#0E1016]">UI</span>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold text-white">
                {company || "Company"}
              </p>
              <p className="text-sm text-[#95979D]">
                {duration || "Duration"}
              </p>
            </div>
          </div>

          {/* Role Title */}
          <h3 className="text-2xl font-bold text-white mb-2">
            {title || "Experience"}
          </h3>
        </div>
        
        {/* Description */}
        <div className="mb-6 flex flex-1 flex-col">
          <p className="line-clamp-[14] flex-1 text-base leading-relaxed text-[#95979D]">
            {description || "Description of the role and responsibilities."}
          </p>
        </div>

        {/* Technology Tags */}
        {technologies && technologies.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2.5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-zinc-300 border border-white/20 transition-all duration-200 ease-out group-hover:bg-white/15 group-hover:border-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
