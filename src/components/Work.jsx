import React from 'react';
import Tabs from './Tabs';
// import Tabs from './Tabs';

const Work = () => {
  const [selectedTab, setSelectedTab] = React.useState('1all');
  // console.log(selectedTab)
  return (
    <div name='work' className={`w-full my-28 md:h-screen text-gray-300 bg-[#022C43] ${selectedTab === "1all" && "md:my-80"}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#F7F700] my-name bg-white'>
            Work
          </p>
          <p className='py-6 my-name bg-white'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <Tabs
          setSelectedTab={setSelectedTab}
          items={[
            { to: "1all", name: "All Projects" },
            { to: "1", name: "MERN Projects" },
            { to: "1bis", name: "React Projects" },
            { to: "2", name: "JavaScript Applications" },
          ]}
        />
      </div>
    </div>
  );
};

export default Work;
