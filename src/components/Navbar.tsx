"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/assets/new-logo.svg";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="border-b-2">
      {/* First Row */}
      <div className="flex items-center justify-between px-6 py-3 flex-wrap sm:flex-nowrap">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-4 flex-wrap sm:flex-nowrap w-full sm:w-auto">
          {/* Logo */}
          <Link href="/" className="flex">
            <Image
              src={Logo}
              alt="weframetech logo"
              width={133.01}
              height={65}
              className="object-contain"
            />
          </Link>

          {/* Search Bar */}
          <div className="relative w-full sm:w-[768px] h-[50px]">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full h-full px-4 pr-12 py-2 rounded-md focus:outline-none text-gray-500 bg-[#F9FAFB]"
            />
            {/* Search Icon */}
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <SearchIcon className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4 sm:space-x-6 flex-wrap sm:flex-nowrap w-full sm:w-auto justify-between">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-3 py-2 text-[14px]">
              <TipsAndUpdatesOutlinedIcon className="text-gray-500" />
              <span>Inspirations</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-[14px]">
              <FavoriteBorderOutlinedIcon className="text-gray-500" />
              <span>Mes Favoris</span>
            </button>
          </div>

          {/* Rounded Button */}
          <button className="w-[28px] h-[18px] text-[10px] font-medium text-[#242D30] bg-[#CAD2D566] rounded-full">
            24
          </button>

          {/* Cart Button */}
          <button className="flex items-center justify-center space-x-2 w-[105px] h-[48px] text-white bg-[#0093D0] border border-[#007AAD] rounded-[6px] hover:bg-[#007AAD] transition-colors">
            <ShoppingCartOutlinedIcon className="text-white" />
            <span>Panier</span>
          </button>

          {/* Profile */}
          <div className="flex items-center justify-center w-[44px] h-[44px] bg-[#EAEDEE] rounded-full"></div>

          {/* Language Selector */}
          <select className="px-3 py-2 text-[14px] focus:outline-none">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex items-center justify-center bg-white py-5 overflow-x-auto">
        <div className="flex space-x-16 text-sm font-medium whitespace-nowrap">
          {/* Routing for 'ART DE LA TABLE' */}
          <Link
            href="/artdelatable"
            className={`relative hover:text-yellow-500 ${
              pathname === "/artdelatable"
                ? "text-[#0093D0] font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-20px] after:h-[3px] after:w-full after:bg-[#0093D0]"
                : "text-gray-500"
            }`}
          >
            ART DE LA TABLE
          </Link>
          {/* Other Options Without Routing */}
          <a href="#" className="hover:text-yellow-500 text-gray-500">MOBILIER</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">NAPPAGE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">MATERIAL DE SALLE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">CUISINE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">BARBEQUE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">TENTE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">CHAUFFAGE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">PODIUM - PISTE DE DANSE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">SON ET LUMIERE</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">PACKS</a>
          <a href="#" className="hover:text-yellow-500 text-gray-500">CONSOMMABLES</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
