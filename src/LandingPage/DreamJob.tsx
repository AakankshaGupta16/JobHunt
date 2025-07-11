import { TextInput, Avatar } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
  return (
    <div className="flex items-center justify-between px-20">
      {/* LEFT SECTION */}
      <div className="flex flex-col w-[45%] gap-4">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream </span><span>job </span>with us
        </div>

        <div className="text-lg text-mine-shaft-100">
          Good Life begins with a Good Company. Start and Explore thousands of Job at one place!
        </div>

        {/* Input section */}
        <div className="flex gap-4 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-500"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-500"
            label="Job Type"
            placeholder="Full Time"
          />
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[55%] flex items-center justify-center">
        <div className="relative w-[30rem]">
          {/* Boy Image */}
          <img src="/Boy.png" alt="boy" />

          {/* Floating Job Card google*/}
          <div className="absolute top-[30%] left-[78%] w-60 rounded-lg border border-bright-sun-400 bg-mine-shaft-900/80 backdrop-blur-md p-4 shadow-md">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center overflow-hidden p-1">
                <img src="/Google.jpeg" alt="Google" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-sm text-white font-semibold">Data Analyst</div>
                <div className="text-xs text-mine-shaft-300">New York</div>
              </div>
            </div>
            <div className="flex gap-2 mt-3 text-xs text-mine-shaft-300">
              <span>1 day ago</span>
              <span>•</span>
              <span>120 Applicants</span>
            </div>
          </div>
          {/* Floating Job Card microsoft */}
          <div className="absolute top-[20%] -left-[25%] w-60 rounded-lg border border-bright-sun-400 bg-mine-shaft-900/80 backdrop-blur-md p-4 shadow-md">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center overflow-hidden p-1">
                <img src="/Microsoft.png" alt="Microsoft" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-sm text-white font-semibold">Software Engineer</div>
                <div className="text-xs text-mine-shaft-300">Seattle</div>
              </div>
            </div>
            <div className="flex gap-2 mt-3 text-xs text-mine-shaft-300">
              <span>2 day ago</span>
              <span>•</span>
              <span>100 Applicants</span>
            </div>
          </div>

          {/* Avatar Group */}
          <div className="absolute -right-10 -bottom-5 flex flex-col items-center">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">10k+ got job!</div>
            <Avatar.Group>
              <Avatar src="image.png" />
              <Avatar src="image.png" />
              <Avatar src="image.png" />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
