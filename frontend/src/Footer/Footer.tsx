import React from 'react';
// Import icons from @tabler/icons-react as seen in image_e9b794.jpg
import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBriefcase } from "@tabler/icons-react";
// Import footerLinks from your Data file as seen in image_e9b794.jpg
import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (
<div className="pt-20 pb-5 flex gap-5 justify-around bg-mine-shaft-950 font-['poppins']">      <div className="flex px-16 justify-between items-start"> {/* Main flex container for footer content */}

        {/* Left Section: JobHook Logo/Text and Description */}
        <div className="w-1/4 flex flex-col gap-4"> {/* w-1/4 for width, flex-col for stacking, gap for spacing */}
          <div className="flex gap-1 items-center"> {/* For the JobHook icon and text */}
            <IconBriefcase className="h-6 w-6 stroke-[2.5] text-bright-sun-400" /> {/* Icon and its styling */}
            <div className="text-xl font-semibold text-bright-sun-400">JobHunt</div> {/* JobHook text */}
          </div>
          <div className="text-sm text-mine-shaft-300"> {/* Description text */}
            Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-3 text-bright-sun-400"> {/* Flex container for icons */}
            <div className="p-2 rounded-full cursor-pointer bg-mine-shaft-900 hover:bg-mine-shaft-600 transition-colors duration-200">
              <IconBrandFacebook />
            </div>
            <div className="p-2 rounded-full cursor-pointer bg-mine-shaft-900 hover:bg-mine-shaft-600 transition-colors duration-200">
              <IconBrandInstagram />
            </div>
            <div className="p-2 rounded-full cursor-pointer bg-mine-shaft-900 hover:bg-mine-shaft-600 transition-colors duration-200">
              <IconBrandX /> {/* Icon for X (Twitter) */}
            </div>
          </div>
        </div>

        {/* Right Sections: Product, Company, Support Links */}
        <div className="flex gap-20"> {/* Flex container for the three link columns, adjust gap as needed */}
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4"> {/* Each column */}
              <div className="text-lg font-semibold text-bright-sun-400 mb-2">
                {column.title} {/* Column title (e.g., Product, Company) */}
              </div>
              {column.link.map((linkText, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#" // Replace with actual links if available
                  className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transition-colors duration-200 hover:translate-x-2"
                  style={{ transition: 'transform 0.3s ease-in-out' }} // Explicit transition for translate-x
                >
                  {linkText} {/* Individual link text */}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;