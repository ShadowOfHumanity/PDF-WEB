import BigCard from "../components/bigCard"
import { FaFilePdf } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import BlackButton from "../components/blackButton"
import SmallCard from "../components/smallCard";
import LogoComponent from "../components/LogoComponent";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-2 py-4 sm:p-4 md:p-6 max-w-full lg:max-w-7xl">
        <BigCard title="Welcome to PDFMaster" className="mb-4 sm:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-3/5">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
                        Boost your<br />
                        productivity with<br />
                        our PDF solutions
                    </h1>

                    <p className="mt-2 sm:mt-4 mb-2 sm:mb-4 text-sm sm:text-base"> 
                        Secure and efficient PDF tools for all your needs with
                        <br className="hidden sm:block"/> advanced features.
                    </p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
                        <BlackButton text="Explore" onClick={() => {}} className="mt-2 sm:mt-4 px-4 sm:px-6 md:px-10 text-[13px] sm:text-[15px]" />
                        <BlackButton text="Try Now" onClick={() => {}} className="mt-2 sm:mt-4 px-4 sm:px-6 md:px-10 text-[13px] sm:text-[15px]" />
                    </div>
                </div>
                <FaFilePdf className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] text-black-600 mb-3 sm:mb-5 md:mb-15 mx-auto md:mx-50" />
            </div>
        </BigCard>

    <div className="flex flex-col sm:flex-row justify-between gap-2">
        {/*CARDS SECTION WITH PLACEHOLDER FOR API CALLS NUMBERS */}
        <SmallCard title="" className="mb-4 flex-1">
            <br/>
            <div className="flex flex-row gap-3 items-center h-full justify-center">
                <div>
                    <p className="text-xs sm:text-s">Engaged users</p>
                    <h3 className="text-3xl sm:text-5xl font-medium text-black leading-tight">{"50M+"}</h3>  
                </div>
                <LogoComponent className="" />
            </div>
            <br/>
        </SmallCard>

        <SmallCard title="" className="mb-4 flex-1">
            <br/>
            <div className="flex flex-row gap-3 items-center h-full justify-center">
                <div>
                    <p className="text-xs sm:text-s">PDFs processed</p>
                    <h3 className="text-3xl sm:text-5xl font-medium text-black leading-tight">{"100TB+"}</h3>  
                </div>
                <FaFilePdf className="text-5xl sm:text-7xl text-black-600" />
            </div>
            <br/>
        </SmallCard>

        <SmallCard title="" className="mb-4 flex-1">
            <br/>
            <div className="flex flex-row gap-3 items-center h-full justify-center">
                <div>
                    <p className="text-xs sm:text-s">PDFs converted</p>
                    <h3 className="text-3xl sm:text-5xl font-medium text-black leading-tight">{"20M+"}</h3>  
                </div>
                <IoMdCloudDownload className="text-5xl sm:text-7xl text-black-600" />
            </div>
            <br/>
        </SmallCard>

        <SmallCard title="" className="mb-4 flex-1">
            <br/>
            <div className="flex flex-row gap-3 items-center h-full justify-center">
                <div>
                    <p className="text-xs sm:text-s">Get started for free</p>
                    <h3 className="text-3xl sm:text-5xl font-medium text-black leading-tight">{"Preview"}</h3>  
                </div>
                <Link to={"/Subscription"}><FaArrowAltCircleRight className="text-2xl sm:text-3xl mb-6 sm:mb-14 text-black-600" /></Link>
            </div>
            <br/>
        </SmallCard>
    </div>

    </div>
  )
}

export default HomePage