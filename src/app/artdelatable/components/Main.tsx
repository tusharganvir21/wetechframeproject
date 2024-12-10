import { useState } from "react";
import { Circle } from "@mui/icons-material"; // Circle icon
import { Add } from '@mui/icons-material'; // Add icon for LIVRAISONS and QUESTIONS
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import Table from '../../../../public/assets/art-de-la-table.svg';
import SideTable from '../../../../public/assets/side-table.svg';
import Scale from '../../../../public/assets/scale.svg';
import NotCircle from '../../../../public/assets/circle.svg';
import Image from 'next/image';


const Main: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value, 10));
    setQuantity(value);
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <p className="text-[#393939] text-sm">
        <span className="font-medium">Home</span>
        <Circle style={{ fontSize: 8 }} className="mx-2 text-[#9C9C9C]" />
        <span className="text-[#9C9C9C] font-medium">Art De La Table</span>
      </p>

      {/* Main Content */}
      <div className="flex mt-6 space-x-6 flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative mx-auto bg-[#F8F6F4] w-full lg:w-[761px] h-[652px] rounded-md">
          {/* Side images positioned vertically at the top-left corner */}
          <div className="absolute mt-2 ml-2 space-y-1.5">
            {Array(4).fill('').map((_, index) => (
              <div
                key={index}
                className="w-[55px] h-[55px] bg-white rounded-sm p-1 flex justify-center items-center"
                style={{ opacity: index === 0 ? 0.8 : 0.5 }} > {/* Apply opacity conditionally */}
                <Image src={SideTable} alt="Side Table" className="w-[40px] h-[40px] object-contain" />
              </div>
            ))}
          </div>

          {/* Main image positioned at the center */}
          <Image
            src={Table}
            alt="Cheese - appareil à raclette"
            className="w-[552px] h-[552px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-md mix-blend-multiply"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4 mt-6 lg:mt-0">
          {/* Name and Price */}
          <div>
            <h2 className="font-playfair text-[30px] leading-[37.5px] font-normal flex justify-between items-center">
              Cheese - appareil à raclette 1/2 roue
              <FavoriteBorderOutlinedIcon className="text-[#111928] text-3xl" />
            </h2>
            <p className="text-2xl font-geist font-normal">39,50€ <span className="font-normal text-sm text-[#9C9C9C]">/piece</span> </p>
          </div>

          {/* Grey Horizontal Line */}
          <hr className="border-[rgba(156,156,156,0.4)]" />

          {/* Scale, Circle, and REF */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Image src={Scale} alt="Scale Icon" width={24} height={24} />
              <span className="text-base font-geist font-normal text-gray-900">20cm</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src={NotCircle} alt="Circle Icon" width={24} height={24} />
              <span className="text-base font-geist font-normal text-gray-900">50cm</span>
            </div>
            <div className="pl-[600px] font-geist ml-auto text-xs font-normal text-[#9C9C9C]">REF:&nbsp;<span className="font-medium">VABGN5</span></div>
          </div>

          {/* Grey Horizontal Line */}
          <hr className="border-[rgba(156,156,156,0.4)]" />

          {/* Location Information */}
          <div className="text-[#5D5D5D] text-sm space-y-2 font-geist">
            <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
            <p>Réglable en hauteur</p>
            <p>Appareil à raclette professionnel</p>
            <p>Boîtier de chauffe horizontal réglable en hauteur</p>
          </div>

          {/* Power Information */}
          <div className="text-[#5D5D5D] text-sm space-y-1 font-geist">
            <p>220V</p>
            <p>900W</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr className="border-[rgba(156,156,156,0.4)]" />

          {/* Add to Cart Section */}
          <div className="flex items-center space-x-4">
            {/* Quantity Selector */}
            <div className="flex w-[153px] h-[49px] items-center border rounded-sm overflow-hidden">
              <button
                className="flex items-center justify-center w-[50px] h-full text-[#9C9C9C] hover:bg-gray-300"
                aria-label="Decrease quantity"
                onClick={handleDecrease}
              >
                <RemoveOutlinedIcon />
              </button>
              <input
                type="text"
                value={quantity}
                min="1"
                className="w-[50px] text-center border-l border-r focus:outline-none font-geist text-base font-medium"
                aria-label="Quantity"
                onChange={handleChange}
              />
              <button
                className="flex items-center justify-center w-[50px] h-full text-[#9C9C9C] hover:bg-gray-300"
                aria-label="Increase quantity"
                onClick={handleIncrease}
              >
                <AddOutlinedIcon />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="px-4 py-2 w-full lg:w-[592px] h-[50px] flex-grow text-white font-cabinet-grotesk bg-[#5CD2DD] rounded-md hover:bg-[#379da7]"
              aria-label="Add to cart"
            >
              AJOUTER AU PANIER
            </button>
          </div>

        </div>
      </div>

      {/* Description and Sections in One Row */}
      <div className="flex flex-col lg:flex-row space-x-6 mt-16 p-8">
        {/* Left side: Description Section */}
        <div className="w-full lg:w-1/2 space-y-4 pl-9 pr-[130px]">
          <h2
            className="font-cabinet-grotesk text-gray-900 leading-7"
            style={{
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "25px",
            }}
          >
            Description produit
          </h2>

          <p
            className="text-gray-600 font-geist"
            style={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "18.2px",
              color: "#9C9C9C",
            }}
          >
            Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot; pour
            votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage,
            une fête d&apos;anniversaire ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection
            rigoureuse par notre équipe. Il est en location chez nous sous la référence &quot;VAJGC&quot;. 
            Nous sommes à votre disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d&apos;autres
            produits à louer de ce type dans la catégorie &quot;Art de la Table&quot;.
          </p>
        </div>

        {/* Right side: LIVRAISONS and QUESTIONS Sections */}
        <div className="w-1/2 space-y-6">
          <div className="flex justify-between items-center border p-4">
            <span className="text-lg font-semibold">LIVRAISONS</span>
            <Add className="text-blue-500 cursor-pointer" />
          </div>

          <div className="flex justify-between items-center border p-4">
            <span className="text-lg font-semibold">QUESTIONS</span>
            <Add className="text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
