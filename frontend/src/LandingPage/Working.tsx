import React from 'react';

import { Work } from "../Data/Data";

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How it <span className="text-bright-sun-400">Works</span>
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Effortlessly navigate through the process and land your dream job.
      </div>
      <div className="flex px-16 justify-between items-center">
        <div>
          <img className="w-[30rem]" src="images/Girl.png" alt="Girl" />
        </div>
        <div className="flex flex-col gap-10">
          {/* Changed 'work.map' to 'Work.map' */}
          {Work.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg hover"
            >
              <div className="h-24 w-24 flex-shrink-0 bg-bright-sun-300 rounded-full flex items-center justify-center">
                <img
                  className="h-16 w-16 object-contain"
                  src={`images/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;