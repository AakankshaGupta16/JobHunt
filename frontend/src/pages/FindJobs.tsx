
import SearchBar from '../FindJobs/SearchBar'; 
import Jobs from '../FindJobs/Jobs';
import { Divider } from '@mantine/core';
const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size="xs" mx="md"/>
      <SearchBar />
      <Divider size="xs" mx="md"/>
      <Jobs/>
    </div>
  );
};

export default FindJobs;