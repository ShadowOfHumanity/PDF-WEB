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
import SmallCard from "../components/smallCard";
import { CiTextAlignCenter } from "react-icons/ci";
import { Link } from "react-router-dom";

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
            <Link to="/ai-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center ">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group"
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
            </Link>

            {/* PDF OCR Button */}
            <Link to="/ocr-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group"
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
            </Link>

            {/* PDF → IMG Button */}
            <Link to="/img-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
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
            </Link>

            {/* IMG → PDF Button */}
            <Link to="/img-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 group"
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
            </Link>

            {/* Edit PDF Button */}
            <Link to="/edit-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
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
            </Link>

            {/* Secure PDF Button */}
            <Link to="/secure-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
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
            </Link>

            {/* Compress Button */}
            <Link to="/compress-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
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
            </Link>

            {/* Sign PDF Button */}
            <Link to="/sign-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
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
            </Link>

            {/* Convert Button */}
            <Link to="/convert-pdf" className="no-underline text-inherit ">
              <div className="flex flex-col items-center">
                <button
                  className="cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
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
            </Link>

            {/* More Button - NOTE: CHECK HOW CANVA DOES IT */}
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

      {/* Featured Cards Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Featured Tools
          </h2>
          <p className="text-gray-600 mt-2">Our most popular PDF tools</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* AI Assistant Card */}
          {/* LINK INSTRUCTION: Replace "/ai-assistant" with route path */}
          <Link
            to="/ai-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-purple-500 shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center">
                  <FaRobot className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-purple-600 transition-colors duration-300">
                  AI Assistant
                </h3>
                <div className="h-1 w-12 bg-purple-500 my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Smart document analysis powered by AI
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Summarize and extract key information from your PDFs
                </p>
                <div className="mt-auto">
                  <Link
                    to="/ai-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-purple-600 hover:bg-purple-700 text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5"
                  >
                    Try Now
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>

          {/* Text Recognition Card */}
          <Link
            to="/ocr-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-[#13A3B5] shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-blue-100  w-14 h-14 rounded-full flex items-center justify-center">
                  <CiTextAlignCenter className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-[#13A3B5] transition-colors duration-300">
                  OCR Technology
                </h3>
                <div className="h-1 w-12 bg-[#13A3B5] my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Extract text from images and scans
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Convert scanned documents into searchable text
                </p>
                <div className="mt-auto">
                  <Link
                    to="/ocr-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#13A3B5] hover:bg-[#0f8b9a] text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5"
                  >
                    Extract Text
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>

          {/* PDF --> IMG Card*/}
          <Link
            to="/img-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-green-500 shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center">
                  <FaFileAlt className="text-3xl text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-green-600 transition-colors duration-300">
                  PDF Images
                </h3>
                <div className="h-1 w-12 bg-green-500 my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Convert PDF pages to image formats
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Export PDF pages as JPG, PNG or TIFF files
                </p>
                <div className="mt-auto">
                  <Link
                    to="/img-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5"
                  >
                    Imagize Now
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>
          {/* Edit PDF Card */}
          <Link
            to="/edit-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-red-300 shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300 group-hover:transform ">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 ">
                  <FaEdit className="text-3xl text-red-500 transition-transform duration-300  " />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-red-500 transition-colors duration-300">
                  Edit PDF
                </h3>
                <div className="h-1 w-12 bg-red-300 my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Modify and customize your PDF documents
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Add text, images, annotations, and more to your PDFs
                </p>
                <div className="mt-auto">
                  <Link
                    to="/edit-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-red-400 hover:bg-red-500 text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5 transition-all duration-300 hover:shadow-md"
                  >
                    Edit Now
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>

          {/* Secure PDF Card */}
          <Link
            to="/secure-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-blue-300 shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300 group-hover:transform ">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 ">
                  <FaLock className="text-3xl text-blue-500 transition-transform duration-300 " />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-blue-500 transition-colors duration-300">
                  Secure PDF
                </h3>
                <div className="h-1 w-12 bg-blue-300 my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Protect your sensitive documents
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Add passwords and encryption to your PDF files
                </p>
                <div className="mt-auto">
                  <Link
                    to="/secure-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-blue-400 hover:bg-blue-500 text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5 transition-all duration-300 hover:shadow-md"
                  >
                    Secure Now
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>

          {/* Compress PDF Card */}
          <Link
            to="/compress-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-purple-400  shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300 group-hover:transform ">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-purple-200  w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 ">
                  <FaCompress className="text-3xl text-purple-400  transition-transform duration-300 " />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-purple-600  transition-colors duration-300">
                  Compress PDF
                </h3>
                <div className="h-1 w-12 bg-purple-400  my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Reduce file size without losing quality
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Optimize PDFs for easier sharing and storage
                </p>
                <div className="mt-auto">
                  <Link
                    to="/compress-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-purple-500  hover:bg-purple-600  text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5 transition-all duration-300 hover:shadow-md"
                  >
                    Compress Now
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>
          
          {/* Sign PDF Card */}
          <Link
            to="/sign-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-teal-300 shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300 group-hover:transform">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300">
                  <FaSignature className="text-3xl text-teal-500 transition-transform duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-teal-500 transition-colors duration-300">
                  Sign PDF
                </h3>
                <div className="h-1 w-12 bg-teal-300 my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Add digital signatures to your documents
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Legally sign PDFs and request signatures from others
                </p>
                <div className="mt-auto">
                  <Link
                    to="/sign-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-teal-400 hover:bg-teal-500 text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5 transition-all duration-300 hover:shadow-md"
                  >
                    Sign Now
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>

          {/* Convert PDF Card */}
          <Link
            to="/convert-pdf"
            className="no-underline text-inherit w-full sm:w-[45%] md:w-72 lg:w-80 group"
          >
            <SmallCard className="bg-white border-t-4 border-orange-300 shadow-md hover:shadow-lg h-[300px] sm:h-[320px] md:h-[340px] transition-all duration-300 group-hover:transform">
              <div className="flex flex-col items-center h-full p-4">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300">
                  <FaFilePdf className="text-3xl text-orange-500 transition-transform duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 group-hover:text-orange-500 transition-colors duration-300">
                  Convert PDF
                </h3>
                <div className="h-1 w-12 bg-orange-300 my-2 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Transform PDFs to other formats
                </p>
                <p className="text-gray-500 text-xs sm:text-sm text-center mt-1">
                  Convert to Word, Excel, PowerPoint and more
                </p>
                <div className="mt-auto">
                  <Link
                    to="/convert-pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-orange-400 hover:bg-orange-500 text-white py-1.5 px-5 rounded-lg no-underline inline-block text-sm mt-5 transition-all duration-300 hover:shadow-md"
                  >
                    Convert Now
                  </Link>
                </div>
              </div>
            </SmallCard>
          </Link>
        </div>
      </div>
    </div>
  );
};

// CSS for grid pattern in banner
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;
document.head.appendChild(styleTag);

export default HomePage;
