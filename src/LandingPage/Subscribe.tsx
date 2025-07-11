import React from 'react';
import { Button, TextInput } from "@mantine/core"; // Import Mantine components

const Subscribe = () => {
  return (
    // Outer container for the subscribe section
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
      {/* Text content */}
      <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">
        Never Want to Miss
        <br />
        <span className="text-bright-sun-400">an Update?</span>
      </div>

      {/* Input and Button container */}
      <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
        {/* Email Input field - UPDATED STYLING */}
        <TextInput
          className="font-semibold" // Keep font-semibold for text entered
          placeholder="Your@gmail.com"
          size="xl"
          // Apply custom styles directly to Mantine's internal input element
          styles={{
            input: {
              backgroundColor: 'transparent', // Make background transparent to show parent div's dark background
              color: 'white', // Set text color to white for visibility on dark background
              border: 'none', // Remove default border if Mantine adds one
              paddingLeft: '0', // Adjust padding if needed to align with screenshot
              paddingRight: '0', // Adjust padding if needed
              '&::placeholder': { // Target placeholder text
                color: '#E0E0E0', // A lighter shade of white for placeholder (assuming mine-shaft-100 color)
              },
            },
          }}
        />
        {/* Subscribe Button */}
        <Button className="rounded-lg" size="lg" color="brightSun.4">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;