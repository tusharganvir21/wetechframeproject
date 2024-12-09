import { ArrowForward } from '@mui/icons-material';
import Subscribe from '../../../../public/assets/subscribe.svg';
import Image from 'next/image';

const SubscribeComponent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 mt-20">
      {/* Left Side: Image */}
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-[703px] w-full">
        <Image
          src={Subscribe}
          alt="Subscribe"
          className="h-[300px] w-full object-cover rounded-[20px]"
        />
      </div>

      {/* Right Side: Subscribe Container */}
      <div className="flex flex-col justify-center bg-[#FFF3F9] p-8 rounded-[20px] w-full max-w-[818px] lg:h-[300px] lg:ml-5">
        {/* Heading */}
        <h2 className="text-[35px] lg:text-[43px] font-medium font-cabinet-grotesk text-[#393939]">
          S&apos;inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
        </h2>

        {/* Subheading */}
        <p className="text-[14px] font-geist mt-4 text-[#BDA2B0] mb-6">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&apos;t.
          Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy
          highlights lunch. Company another pushback items dear or any.
        </p>

        {/* Input Field and Button */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="john@doe.com"
            className="p-3 rounded-md w-full max-w-[650px] font-geist text-[#A68A98] border border-[#F5E1EB] focus:outline-none focus:ring-2 focus:ring-[#5CD2DD]"
          />
          <button className="flex items-center font-cabinet-grotesk bg-[#5CD2DD] text-white px-6 py-3 rounded-md mt-4 lg:mt-0">
            <span className="mr-2">S&apos;inscrire</span>
            <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;
