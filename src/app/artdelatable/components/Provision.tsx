import Travel from '../../../../public/assets/travel.svg';
import Dinner from '../../../../public/assets/dinner.svg';
import Cart from '../../../../public/assets/cart.svg';
import Delivery from '../../../../public/assets/delivery.svg';

import Image from 'next/image';

const Provision: React.FC = () => {
  return (
    <div className="relative py-10 text-center mt-32">
      {/* Background with reduced opacity */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#EE4197] to-[#FFFFFF]"
        style={{ opacity: 0.1 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-[35px] font-medium font-cabinet-grotesk">
          On s’occupe de <span className="text-[#5CD2DD]">tout</span>
        </h2>
        {/* Subheading */}
        <p className="text-[14px] mt-4 text-[#9C9C9C] font-geist">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>

        {/* Icons and Text */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-10">
          {/* Group 1 */}
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            {/* Icon 1 */}
            <Image
              src={Travel}
              alt="Travel Icon"
              className="w-[50px] h-[51px]"
            />
            {/* Text 1 */}
            <div className="text-center mt-4">
              <p className="text-xl font-medium font-cabinet-grotesk text-[#393939]">
                Livraison & Reprise
              </p>
              <p className="text-sm font-geist text-[#9C9C9C]">Selon vos besoins</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#9C9C9C] w-40 -translate-y-[25px] -ml-[60px] -mr-[40px] sm:w-28" />

          {/* Group 2 */}
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            {/* Icon 2 */}
            <Image
              src={Dinner}
              alt="Dinner Icon"
              className="w-[50px] h-[51px]"
            />
            {/* Text 2 */}
            <div className="text-center mt-4">
              <p className="text-xl font-medium font-cabinet-grotesk text-[#393939]">
                Nettoyage
              </p>
              <p className="text-sm font-geist text-[#9C9C9C]">Selon vos besoins</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#9C9C9C] w-40 -translate-y-[25px] -ml-[40px] -mr-[60px] sm:w-28" />

          {/* Group 3 */}
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            {/* Icon 3 */}
            <Image
              src={Cart}
              alt="Cart Icon"
              className="w-[50px] h-[51px]"
            />
            {/* Text 3 */}
            <div className="text-center mt-4">
              <p className="text-xl font-medium font-cabinet-grotesk text-[#393939]">
                Commande Illimitée
              </p>
              <p className="text-sm font-geist text-[#9C9C9C]">Tout est possible</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#9C9C9C] w-40 -translate-y-[25px] -ml-[60px] -mr-[70px] sm:w-28" />

          {/* Group 4 */}
          <div className="flex flex-col items-center mb-6 sm:mb-0">
            {/* Icon 4 */}
            <Image
              src={Delivery}
              alt="Delivery Icon"
              className="w-[50px] h-[51px]"
            />
            {/* Text 4 */}
            <div className="text-center mt-4">
              <p className="text-xl font-medium font-cabinet-grotesk text-[#393939]">
                Transport & Enlèvement
              </p>
              <p className="text-sm font-geist text-[#9C9C9C]">On s’occupe de tout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provision;
