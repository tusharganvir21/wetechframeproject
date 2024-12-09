import { Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Logo from "../../../../public/assets/new-logo.svg";
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <hr className="border-t mt-[70px] border-[#39393930]" />
      <div className="flex items-center justify-end py-10 px-10">
        {/* Footer Content */}
        <div className="container mx-auto px-6 flex justify-start items-center my-4">
          {/* Logo */}
          <Image
            src={Logo}
            alt="weframetech logo"
            width={133.01}
            height={65}
            className="object-contain"
          />

          {/* Information Sections */}
          <div className="flex space-x-12 ml-[50px]">
            {/* Infos Pratiques */}
            <div>
              <h2 className="font-bold text-lg font-cabinet-grotesk text-[#393939]">INFOS PRATIQUES</h2>
              <ul className="mt-4 text-sm font-geist text-[#393939]">
                <li>À propos</li>
                <li>Livraisons & Reprises</li>
                <li>Mode d’emploi</li>
                <li>F.A.Q</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="font-bold text-lg font-cabinet-grotesk text-[#393939]">LÉGAL</h2>
              <ul className="mt-4 text-sm font-geist text-[#393939]">
                <li>Mentions légales</li>
                <li>CGU</li>
                <li>CGV</li>
                <li>Politique de confidentialité</li>
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h2 className="font-bold text-lg font-cabinet-grotesk text-[#393939]">MON COMPTE</h2>
              <ul className="mt-4 text-sm font-geist text-[#393939]">
                <li>Accéder à mon compte</li>
                <li>Ma liste d’envie</li>
                <li>Créer un compte</li>
                <li>Mot de passe oublié</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="flex-col items-center justify-end space-x-4 mr-[100px] text-[#393939]">
          <h2 className="font-bold text-lg font-cabinet-grotesk pl-[42px] mb-2">NOUS SUIVRE</h2>
          <div className="flex space-x-4 ml-4">
            {/* Twitter Icon */}
            <div className="w-[42px] h-[42px] flex items-center justify-center border border-[rgba(57,57,57,0.35)] rounded-[6px]">
              <Twitter />
            </div>
            {/* Instagram Icon */}
            <div className="w-[42px] h-[42px] flex items-center justify-center border border-[rgba(57,57,57,0.35)] rounded-[6px]">
              <Instagram />
            </div>
            {/* LinkedIn Icon */}
            <div className="w-[42px] h-[42px] flex items-center justify-center border border-[rgba(57,57,57,0.35)] rounded-[6px]">
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
