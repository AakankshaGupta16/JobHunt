import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
// If you are indeed using Mantine's Text and Divider, keep these imports:
import { Divider, Text } from "@mantine/core";

// Define an interface for better type safety for the 'job' prop
interface JobData {
  jobTitle: string;
  company: string;
  applicants: number;
  experience: string;
  jobType: string;
  location: string;
  package: string;
  postedDaysAgo: number;
  description: string;
}

interface JobCardProps {
  job: JobData; // JobCard expects a 'job' prop of type JobData
}

// Destructure 'job' directly from props
const JobCard = ({ job }: JobCardProps) => { // Use JobCardProps interface here

  // Destructure individual properties from the 'job' object for cleaner access
  const {
    jobTitle,
    company,
    applicants,
    experience,
    jobType,
    location,
    package: jobPackage, // Rename 'package' to 'jobPackage' to avoid keyword conflict
    postedDaysAgo,
    description,
  } = job;

  // Use the 'description' directly from the destructured job object
  // No need for a fallback here if your jobList data always provides a description
  const jobDescription = description;

  return (
    <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0px_1px_1px_yellow]">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            {/* Using company for dynamic image path */}
            {/* Note: Ensure 'Companies' folder name case matches in public directory */}
            <img className="h-7" src={`/Companies/${company}.png`} alt={company || "Company Logo"} />
          </div>
          <div>
            {/* Using destructured jobTitle, company, and applicants */}
            <div className="font-semibold">{jobTitle || "Job Title"}</div>
            <div className="text-xs text-mine-shaft-300">
              {company || "Company"} &#x2022; {new Date().getFullYear()}; {applicants || 0} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        {/* Using destructured experience, jobType, and location */}
        {experience && <div>{experience}</div>}
        {jobType && <div>{jobType}</div>}
        {location && <div>{location}</div>}
      </div>

      {/* Using the Mantine Text component with the dynamic description */}
      <Text className="text-xs text-mine-shaft-300 line-clamp-3">
        {jobDescription}
      </Text>

      {/* Using the Mantine Divider component */}
      <Divider size="xs" color="mineShaft.7" />

      <div className="flex justify-between items-center">
        {/* Using destructured jobPackage */}
        <div className="text-sm font-semibold text-mine-shaft-200">
          {jobPackage || "N/A"}
        </div>
        <div className="flex gap-1 items-center text-xs text-mine-shaft-400">
          <IconClockHour3 className="h-4 w-4 stroke-1.5" />
          {/* Using destructured postedDaysAgo */}
          {postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default JobCard;