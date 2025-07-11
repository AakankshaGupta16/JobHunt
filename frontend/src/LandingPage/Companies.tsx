import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data"; 

const Companies = () => { 
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-10 text-mine-shaft-100">
        Trusted By <span className="text-bright-sun-400">1000+</span> Companies
      </div>
      <Marquee pauseOnHover={true}>
        <div className="flex">
          {companies.map((company, index) => ( 
            <div key={index} className="mx-8 py-2 px-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer">
              <img className="h-14" src={`/companies/${company}.png`} alt={company} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Companies; // Export the renamed component