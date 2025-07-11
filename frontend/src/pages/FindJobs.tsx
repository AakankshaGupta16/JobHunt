
import SearchBar from '../FindJobs/SearchBar'; 
import Jobs from '../FindJobs/Jobs';
const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Jobs/>
    </div>
  );
};

export default FindJobs;