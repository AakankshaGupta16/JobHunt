import { jobList } from "../Data/JobsData"; // Assuming this is the correct path to your jobList data
import JobCard from "./JobCard"; // Assuming JobCard component is in the same directory
import Sort from "./Sort"; // Assuming Sort component is in the same directory

const Jobs = () => {
  return (
    <div className="p-5"> {/* Outer padding for the entire Jobs section */}
      <div className="flex justify-between"> {/* Container for "Recommended Jobs" and Sort component */}
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort /> {/* The Sort component */}
      </div>

      {/* Grid or flex container for JobCard components */}
      {/* Assuming you want to display the job cards in a grid or flow layout */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Added a grid for layout based on common patterns */}
        {jobList.map((job, index) => (
          // Pass individual job data as props to JobCard
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;