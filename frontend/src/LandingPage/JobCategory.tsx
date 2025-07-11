import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import '@mantine/carousel/styles.css'; // REQUIRED for carousel to work


const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mineshaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      {/* ✅ Carousel must wrap .Slide components */}
      <Carousel
        slideSize="22%"
        slideGap="md"
        
        emblaOptions={{ loop: true }}
        className="mt-10 px-4"
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 p-4 
    border-2 border-yellow-300 
    hover:border-yellow-400 
    hover:shadow-[0_0_15px_2px_rgba(253,224,71,0.75)] 
    rounded-xl bg-mine-shaft-900 shadow-md my-5
    transition-all duration-300 ease-in-out 
    mx-auto cursor-pointer">

              <div className="p-2 bg-bright-sun-300 rounded-full mb-2">
                <img
                  className="h-8 w-8"
                  src={`/Category/${category.image}`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold text-center">{category.name}</div>
              <div className="text-sm text-center text-mine-shaft-300 mt-1">{category.desc}</div>
              <div className="text-bright-sun-300 text-lg mt-2">{category.jobs}+ Jobs</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
