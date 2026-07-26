import Navbar from "../Header/Navbar";
import bg from '../../assets/images/re-create_image_for_desktop_202606180714.jpeg'
import FooterContent from "./FooterContent/FooterContent";

export default function Herosection({bgImage,onImageSelect}) {
  
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <Navbar />

      <div className="relative z-10 px-14 pt-44 text-white">

        <h1 className="text-8xl font-bold font-display">
          Croatia
        </h1>

        <p className="mt-4 text-2xl font-light max-w-lg">
          Dear travellers, enjoy Croatia and travel safely and responsibly.
        </p>

      </div>
      {/* Foote Content text and slider */}

      <div className="absolute bottom-10 left-10 right-10">
         <FooterContent bgImage={bgImage} onImageSelect={onImageSelect} />
    
      </div>
    </div>
  );
}