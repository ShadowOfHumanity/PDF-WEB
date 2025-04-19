import {
  FaRobot,
  FaImage,
  FaFileAlt,
  FaFilePdf,
  FaEllipsisH,
  FaSearch,
  FaLock,
  FaEdit,
  FaSignature,
  FaCompress,
  FaFile,
  FaFileImport,
} from "react-icons/fa";

const Banner = () => {
    return ( 
        // Banner
        
        <div className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {/* PDF-like decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-bl-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-gray-700 rounded-tr-3xl opacity-20"></div>
        
        {/* PDF corner fold effect */}
        <div className="absolute top-0 right-16 md:right-32">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-800 relative">
            <div className="absolute right-0 top-0 w-0 h-0 border-t-[16px] md:border-t-[24px] border-r-[16px] md:border-r-[24px] border-t-white border-r-transparent"></div>
            </div>
        </div>
        
        {/* Floating PDF icons */}
        <div className="absolute left-[10%] top-[20%] text-gray-600 opacity-10">
            <FaFilePdf size={40} />
        </div>
        <div className="absolute right-[15%] bottom-[15%] text-gray-600 opacity-10">
            <FaFile size={32} />
        </div>
        <div className="absolute left-[25%] bottom-[10%] text-gray-600 opacity-10">
            <FaFileImport size={36} />
        </div>

        <div className="container mx-auto text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Transform Your Documents
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 text-gray-200">
            Professional PDF tools to edit, convert, and manage your documents
            with ease
            </p>

            {/* THIS BUTTON DOES NOTHING YET*/}
            <button className="bg-white text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all">
            Get Started
            </button>
        </div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Horizontal line decorations */}
        <div className="absolute bottom-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
        </div>
    );
};

const HomePage = () => {
  return (
    <div className="w-full">
      
      <Banner />

      {/* Tool Buttons */}
      <div className="container mx-auto px-4 py-8 -mt-6 sm:-mt-8 md:-mt-10">
        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {/* PDF AI Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group"
                style={{ backgroundColor: "#EAD4FF", borderColor: "#EAD4FF" }}
              >
                <span className="text-gray-700 transition-all duration-200 group-hover:text-purple-700">
                  <FaRobot
                    size={26}
                    className="transition-all duration-300 group-hover:scale-125 group-hover:transform"
                  />
                </span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700">
                PDF AI
              </span>
            </div>

            {/* PDF OCR Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group"
                style={{ backgroundColor: "#13a3b5", borderColor: "#13a3b5" }}
              >
                <span className="text-white transition-all duration-300 group-hover:text-blue-100">
                  <FaSearch
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:scale-125 group-hover:rotate-[-12deg]"
                  />
                </span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700">
                PDF OCR
              </span>
            </div>

            {/* PDF → IMG Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: "#0ba84a", borderColor: "#0ba84a" }}
              >
                <span className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
                <span className="text-white transition-all duration-300 group-hover:text-green-100 relative z-10">
                  <FaFileAlt
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:scale-125 group-hover:rotate-[-8deg] group-hover:translate-y-[-2px]"
                  />
                </span>
                <span className="absolute inset-0 border-2 border-green-300 opacity-0 group-hover:opacity-50 rounded-full group-hover:scale-110 transition-all duration-500"></span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                PDF → IMG
              </span>
            </div>

            {/* IMG → PDF Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group"
                style={{ backgroundColor: "#ff6105", borderColor: "#ff6105" }}
              >
                <span className="text-white transition-all duration-300 group-hover:text-yellow-100">
                  <FaImage
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:rotate-12 group-hover:scale-125"
                  />
                </span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700">
                IMG → PDF
              </span>
            </div>

            {/* Edit PDF Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: "#ff3b4b", borderColor: "#ff3b4b" }}
              >
                <span className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
                <span className="text-white transition-all duration-300 group-hover:text-red-100 relative z-10">
                  <FaEdit
                    size={26}
                    className="transition-all duration-500 group-hover:transform origin-bottom-right group-hover:scale-125 group-hover:translate-x-1 group-hover:translate-y-[-2px] group-hover:rotate-[-12deg]"
                  />
                </span>
                <span className="absolute inset-0 border-2 border-red-300 opacity-0 group-hover:opacity-50 rounded-full group-hover:scale-110 transition-all duration-500"></span>
                <span className="absolute h-[2px] w-0 bg-white bottom-[40%] left-[40%] opacity-0 group-hover:opacity-70 group-hover:w-[20%] transition-all duration-700 delay-100"></span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                Edit PDF
              </span>
            </div>

            {/* Secure PDF Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: "#4a6bff", borderColor: "#4a6bff" }}
              >
                <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
                <span className="text-white transition-all duration-300 group-hover:text-blue-100 relative z-10">
                  <FaLock
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:scale-125 group-hover:translate-y-[-1px]"
                  />
                </span>
                <span className="absolute inset-0 border-2 border-blue-300 opacity-0 group-hover:opacity-50 rounded-full group-hover:scale-110 transition-all duration-500"></span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                Secure PDF
              </span>
            </div>

            {/* Compress Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: "#8d46e7", borderColor: "#8d46e7" }}
              >
                <span className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
                <span className="text-white transition-all duration-300 group-hover:text-purple-100 relative z-10">
                  <FaCompress
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:scale-110 group-hover:rotate-[15deg]"
                  />
                </span>
                <span className="absolute inset-0 border-2 border-purple-300 opacity-0 group-hover:opacity-50 rounded-full group-hover:scale-110 transition-all duration-500"></span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                Compress
              </span>
            </div>

            {/* Sign PDF Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: "#08c1b8", borderColor: "#08c1b8" }}
              >
                <span className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
                <span className="text-white transition-all duration-300 group-hover:text-teal-100 relative z-10">
                  <FaSignature
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:scale-125 group-hover:translate-x-1"
                  />
                </span>
                <span className="absolute inset-0 border-2 border-teal-300 opacity-0 group-hover:opacity-50 rounded-full group-hover:scale-110 transition-all duration-500"></span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-teal-600 transition-colors duration-300">
                Sign PDF
              </span>
            </div>

            {/* Convert Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: "#ff8c00", borderColor: "#ff8c00" }}
              >
                <span className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
                <span className="text-white transition-all duration-300 group-hover:text-orange-100 relative z-10">
                  <FaFilePdf
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:scale-125 group-hover:rotate-[-8deg]"
                  />
                </span>
                <span className="absolute inset-0 border-2 border-orange-300 opacity-0 group-hover:opacity-50 rounded-full group-hover:scale-110 transition-all duration-500"></span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                Convert
              </span>
            </div>

            {/* More Button */}
            <div className="flex flex-col items-center">
              <button
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
                style={{ backgroundColor: "#5a6778", borderColor: "#5a6778" }}
              >
                <span className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></span>
                <span className="text-white transition-all duration-300 group-hover:text-gray-200 relative z-10">
                  <FaEllipsisH
                    size={26}
                    className="transition-all duration-500 group-hover:transform group-hover:scale-125"
                  />
                </span>
                <span className="absolute inset-0 border-2 border-gray-400 opacity-0 group-hover:opacity-50 rounded-full group-hover:scale-110 transition-all duration-500"></span>
              </button>
              <span className="mt-2 text-xs sm:text-sm text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                More
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of HomePage content */}
    </div>
  );
};

// Add the CSS for grid pattern
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;
document.head.appendChild(styleTag);

export default HomePage;
