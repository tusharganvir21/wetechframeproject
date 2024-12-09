import { useRef } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import SideTable from '../../../../public/assets/side-table.svg';
import Image from 'next/image';

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -330, // Scroll left by the width of each item
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 330, // Scroll right by the width of each item
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#FBF9F899] h-[570px] w-auto mt-10 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-[35px] font-cabinet-grotesk text-[#393939] font-medium mb-6">
          Articles similaires
        </h2>
        <p className="text-base font-medium underline text-[#393939]">VOIR TOUTE LA COLLECTION</p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar w-full max-w-full h-[437px] gap-5"
        >
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className="min-w-[330px] max-w-[330px] h-[436px] relative flex-shrink-0"
            >
              <div className="bg-[#F9F7F5] h-[360px] rounded-md">
                {/* Heart Icon */}
                <FavoriteBorderOutlinedIcon className=" text-gray-500 m-3 text-4xl" />

                {/* ART DE LA TABLE Text */}
                <div className="absolute top-2 right-2 bg-white rounded-md px-1 mt-1">
                  <span className="text-[10px] font-geist font-medium">ART DE LA TABLE</span>
                </div>

                {/* Card Content */}
                <div className="py-4 flex-col justify-between">
                  {/* Image */}
                  <div className="h-[150px] w-full flex items-center justify-center overflow-hidden mb-2">
                    <Image
                      src={SideTable}
                      alt="Item Image"
                      className="object-contain w-auto h-[224px]"
                    />
                  </div>
                </div>
              </div>

              {/* Title and Price */}
              <div className="flex p-2 justify-between items-center">
                <h3 className="text-2xl font-playfair text-[#393939]">Title</h3>
                <p className="text-2xl font-geist text-[#393939]">0€</p>
              </div>

              {/* Additional Details */}
              <div className="flex px-2 mt-2 justify-between items-center text-sm text-[#9C9C9C] font-geist">
                <p>0,35€/Pièce · <span className="text-[10px]">RÉF : VABGN5</span></p>
                <span className="w-[68px] h-[26px] bg-[#F1F4F6] text-[#546A7D] rounded-full px-2 font-geist text-[11px]">
                  20 pièces
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Buttons */}
        <button
          className="w-[46px] h-[46px] absolute top-1/2 left-[-25px] transform -translate-y-1/2 bg-[#5CD2DD] text-white p-2 sm:left-[-10px] lg:left-[-25px]"
          onClick={scrollLeft}
        >
          <ArrowBackOutlinedIcon className="text-white" />
        </button>
        <button
          className="w-[46px] h-[46px] absolute top-1/2 right-[-25px] transform -translate-y-1/2 bg-[#5CD2DD] text-white p-2 sm:right-[-10px] lg:right-[-25px]"
          onClick={scrollRight}
        >
          <ArrowForwardOutlinedIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
