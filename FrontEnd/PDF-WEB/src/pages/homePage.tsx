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
    <div className="container mx-auto p-6">
        <BigCard title="Welcome to PDFMaster" className="mb-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-5xl font-bold text-black leading-tight">
                        Boost your<br />
                        productivity with<br />
                        our PDF solutions
                    </h1>

                    <p className="mt-4 mb-4 "> Secure and efficient PDF tools for all your needs with<br/> 
                                               advanced features.</p>
                    
                    <div>
                        <BlackButton text="Explore" onClick={() => {}} className="mt-4 mb-4 px-10 text-[15px]" />
                        <BlackButton text="Try Now" onClick={() => {}} className="mt-4 mx-4 mb-4 px-10 text-[15px]" />
                    </div>
                </div>
                <FaFilePdf className="text-[250px] text-black-600 mb-15 mx-50" />
            </div>
        </BigCard>

    <div className="flex flex-row justify-between gap-5">
        {/*CARDS SECTION WITH PLACEHOLDER FOR API CALLS NUMBERS */}
        <SmallCard title="" className="mb-6">
            <br/>
            <div className="flex flex-row gap-3">
                <div>
                    <p className="text-s">Engaged users</p>
                    <h3 className="text-5xl font-medium text-black leading-tight">{"50M+"}</h3>  
                </div>
                <LogoComponent className="mt-6" />
            </div>
        </SmallCard>

        <SmallCard title="" className="mb-6">
            <br/>
            <div className="flex flex-row gap-3">
                <div>
                    <p className="text-s">PDFs processed</p>
                    <h3 className="text-5xl font-medium text-black leading-tight">{"100TB+"}</h3>  
                </div>
                <FaFilePdf className="text-7xl text-black-600 mx-2" />
            </div>
        </SmallCard>

        <SmallCard title="" className="mb-6">
            <br/>
            <div className="flex flex-row gap-3">
                <div>
                    <p className="text-s">PDFs converted</p>
                    <h3 className="text-5xl font-medium text-black leading-tight">{"20M+"}</h3>  
                </div>
                <IoMdCloudDownload className="text-7xl text-black-600 mt-4 mx-2" />
            </div>
        </SmallCard>

        <SmallCard title="" className="mb-6">
            <br/>
        
            <div className="flex flex-row gap-3">
                
                <div>
                    <p className="text-s">Get started for free</p>
                    <h3 className="text-5xl font-medium text-black leading-tight">{"Preview"}</h3>  
                </div>
                <Link to={"/Subscription"}><FaArrowAltCircleRight className="text-3xl text-black-600 mx-2" /></Link>
            </div>
        </SmallCard>

        
    </div>

    </div>
  )
}

export default HomePage