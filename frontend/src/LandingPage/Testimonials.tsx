
import { Avatar, Rating } from "@mantine/core"; // Correct import for Mantine components
import { testimonials } from "../Data/Data"; // Assuming this path is correct for your testimonials data

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">User</span> says about us?
      </div>
      <div className="flex justify-evenly"> {/* Corrected from justify-evenly, as it was truncated in image */}
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-[23%] border-bright-sun-400 p-3 border rounded-xl mt-10"
          >
            <div className="flex gap-2 items-center">
              <Avatar className="h-14 w-14" src="avatar.png" alt="it's me" /> {/* Assuming avatar.png is in public folder */}
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">{data.name}</div>
                {/* Ensure Rating component is correctly implemented from Mantine */}
                <Rating value={data.rating} fractions={2} readOnly />
              </div>
            </div>
            {/* Testimonial description */}
            <div className="text-mine-shaft-300">
              {data.description} {/* Assuming 'description' field for testimonial text */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;