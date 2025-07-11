import { IconBriefcase } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import { Indicator } from '@mantine/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">

      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconBriefcase className="h-10 w-10" stroke={2} />
        <div className="text-3xl font-semibold">JobHunt</div>
      </div>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/find-jobs" className="hover:underline">Find Jobs</Link>
        <Link to="/find-talent" className="hover:underline">Find Talent</Link>
        <Link to="/upload-job" className="hover:underline">Upload Job</Link>
        <Link to="/about" className="hover:underline">About us</Link>
      </div>

      <div className="flex gap-3 items-center">

        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="bright-sun.4" offset={4} size={9} processing>
            <IconBell stroke={2} className="w-5 h-5" />
          </Indicator>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-sm">Marshal</div>

          <Avatar src="avatar.png" alt="it's me" radius="xl" size={34} />
        </div>

        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <IconSettings stroke={2} className="w-5 h-5" />
        </div>

      </div>
    </div>
  );
};

export default Header;
