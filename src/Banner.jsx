import BannerImage from "/Users/ruhan/Desktop/BootCamp/Ai-model-hub/assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
    
        <div className="lg:space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#9514FA] text-sm font-medium px-5 py-2 rounded-full">
            <i class="fa-regular fa-circle-dot"></i> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tighter">
            Supercharge Your <br />Digital Workflow
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products

          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-purple-400 transition-all px-5 py-3  rounded-full font-semibold lg:text-lg shadow-xl flex items-center gap-3 group text-white">
              Explore Products
            </button>
            <button className="border border-[#9514FA] hover:bg-purple-100 transition-all px-5 py-3 rounded-full font-semibold lg:text-lg shadow-xl flex items-center gap-3 group text-[#9514FA]">
             <i className="fa-solid fa-play"></i> Watch Demo
            </button>
            
            
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;