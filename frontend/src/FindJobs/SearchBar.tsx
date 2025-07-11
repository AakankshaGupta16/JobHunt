import { useState } from "react";
import MultiSelectCreatable from "./MultiSelectCreatable";
import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
        <div key={index} className="w-1/5">
          <MultiSelectCreatable {...item} />
        </div>
      ))}

      <Divider mr="xs" size="xs" orientation="vertical" />

      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex justify-between mb-1">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>

        <RangeSlider
          value={value}
          onChange={setValue}
          size="xs"
      
          styles={{
            bar: {
              backgroundColor: "#FFD700", // bright yellow
            },
            thumb: {
              borderColor: "#FFD700",
              backgroundColor: "#FFD700",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
