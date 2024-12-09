import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SideTable from '../../../../public/assets/side-table.svg';
import Image from 'next/image';

const Cards: React.FC = () => {
  return (
    <div className="my-10 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[35px] font-cabinet-grotesk font-medium text-[#393939]">
          Ces produits pourraient vous intéresser
        </h2>
        <p className="text-base font-cabinet-grotesk font-medium underline text-[#393939]">
          VOIR TOUTE LA COLLECTION
        </p>
      </div>

      {/* Static Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="bg-[#F9F7F5] w-[506.67px] h-[438px] rounded-lg flex-shrink-0 relative sm:w-[100%] md:w-[48%] lg:w-[30%]"
          >
            <div className="bg-[#F9F7F5] h-[360px]">
              {/* Heart Icon */}
              <FavoriteBorderOutlinedIcon className="text-gray-500 m-3 text-4xl" />
              {/* ART DE LA TABLE Text */}
              <div className="absolute top-2 right-2 bg-white text-[10px] font-medium font-geist rounded-md px-1 mt-1">
                <span className="text-[10px] font-semibold">ART DE LA TABLE</span>
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
            <div className="pt-[80px] px-2">
              <div className="flex p-2 justify-between items-center">
                <h3 className="text-2xl font-playfair text-[#393939]">Title</h3>
                <p className="text-2xl font-medium font-geist text-[#393939]">0€</p>
              </div>

              {/* Additional Details */}
              <div className="flex px-2 mt-2 justify-between items-center text-sm text-[#9C9C9C] font-geist">
                <p>0,35€/Pièce · <span className="text-[10px]">RÉF : VABGN5</span></p>
                <span className="w-[68px] h-[26px] bg-[#F1F4F6] text-[#546A7D] rounded-full p-1 px-2 font-geist text-[11px]">
                  20 pièces
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
