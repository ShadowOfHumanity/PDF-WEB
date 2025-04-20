import { FaCheck, FaTimes, FaFilePdf, FaRegFilePdf, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

{/* Features that are shown on card*/}
interface Feature {
  name: string;
  description: string;
  included: boolean;
}

interface SubscriptionCardProps {
  title: string;
  price: string;
  feautures: Feature[];
  buttonText: string;
  buttonLink: string; // WHERE THE BUTTON WILL REDIRECT
  description: string;
  main?: boolean; // Indicates if this is the main card
  className?: string; 
  color?: string;
  smallTopText?: string; // Text to show on top of the card, small and barely visible
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  feautures,
  buttonText,
  buttonLink,
  description,
  main = false,
  className = "",
  color = "blue",
  smallTopText,
}) => {
  const colorSchemes = {
    blue: {
      gradient: "bg-gradient-to-br from-[#4a6bff] to-[#2a4bdf]",
      buttonClass: "bg-white text-[#4a6bff] hover:bg-blue-50 border border-[#4a6bff]",
      iconBg: "bg-blue-100",
      pdfIcon: <FaFilePdf className="absolute bottom-2 right-2 text-white opacity-10 text-6xl" />,
    },
    purple: {
      gradient: "bg-gradient-to-br from-[#8d46e7] to-[#6a23c5]",
      buttonClass: "bg-white text-[#8d46e7] hover:bg-purple-50 border border-[#8d46e7]",
      iconBg: "bg-purple-100",
      pdfIcon: <FaRegFilePdf className="absolute bottom-2 right-2 text-white opacity-10 text-6xl" />,
    },
    green: {
      gradient: "bg-gradient-to-br from-[#0ba84a] to-[#078a3a]",
      buttonClass: "bg-white text-[#0ba84a] hover:bg-green-50 border border-[#0ba84a]",
      iconBg: "bg-green-100",
      pdfIcon: <FaFileAlt className="absolute bottom-2 right-2 text-white opacity-10 text-6xl" />,
    },
    orange: {
      gradient: "bg-gradient-to-br from-[#ff8c00] to-[#d97300]",
      buttonClass: "bg-white text-[#ff8c00] hover:bg-orange-50 border border-[#ff8c00]",
      iconBg: "bg-orange-100",
      pdfIcon: <FaFilePdf className="absolute bottom-2 right-2 text-white opacity-10 text-6xl rotate-12" />,
    },
    red: {
      gradient: "bg-gradient-to-br from-[#ff3b4b] to-[#e01e2e]",
      buttonClass: "bg-white text-[#ff3b4b] hover:bg-red-50 border border-[#ff3b4b]",
      iconBg: "bg-red-100",
      pdfIcon: <FaFilePdf className="absolute bottom-2 right-2 text-white opacity-10 text-6xl -rotate-12" />,
    },
    teal: {
      gradient: "bg-gradient-to-br from-[#08c1b8] to-[#06a59e]",
      buttonClass: "bg-white text-[#08c1b8] hover:bg-teal-50 border border-[#08c1b8]",
      iconBg: "bg-teal-100",
      pdfIcon: <FaRegFilePdf className="absolute bottom-2 right-2 text-white opacity-10 text-6xl rotate-6" />,
    },
  };

  const selectedScheme = colorSchemes[color as keyof typeof colorSchemes] || colorSchemes.blue;

  return (
    <>
    {/* Card Container */}
        <div 
        className={`relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ${
            main ? "scale-105 z-10 border-2 border-white shadow-xl" : ""
        } ${className}`}
        >
        {/* barely seeable lable */}
        {smallTopText && (
            <div className="absolute top-1 left-0 w-full text-center z-10">
            <span className="text-[10px] text-white opacity-20 font-semibold  px-2 py-0.5 rounded-sm">{smallTopText}</span>
            </div>
        )}
        
        {/* Header section with price */}
        <div className={`${selectedScheme.gradient} p-6 text-white relative`}>
            {selectedScheme.pdfIcon}
            
            <div className="absolute top-0 right-0">
            <div className="w-12 h-12 relative">
                <div className="absolute right-0 top-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-white border-r-transparent opacity-20"></div>
            </div>
            </div>
            
            {main && (
            <div className="absolute top-0 right-0 mt-4 mr-4 bg-white text-xs font-bold px-3 py-1 rounded-full text-[#4a6bff] shadow-sm">
                POPULAR
            </div>
            )}
            
            {/* getting pdf icon based on the titles */}
            <div className="flex items-center mb-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white/25 backdrop-blur-sm mr-3 shadow-sm border border-white/30`}>
                {getPDFIconForPlan(title)}
            </div>
            <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
            </div>
            
            <div className="flex items-baseline mb-2">
            <span className="text-3xl md:text-4xl font-extrabold">{price}</span>
            {price !== "Free" && <span className="ml-1 text-sm opacity-80">/month</span>}
            </div>
            
            <p className="text-sm opacity-90">{description}</p>
            
            <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="pdf-grid-pattern absolute inset-0"></div>
            </div>
        </div>

        {/* Features section */}
        <div className="p-6 bg-white">
            <ul className="space-y-2">
            {feautures.map((feature, index) => (
                <li key={index} className="flex">
                <div className="flex-shrink-0 mt-1">
                    {feature.included ? (
                    <div className={`p-1 rounded-md ${selectedScheme.iconBg}`}>
                        <FaCheck className="text-green-600 w-2 h-2" />
                    </div>
                    ) : (
                    <div className="p-1 rounded-md bg-red-100">
                        <FaTimes className="text-red-900 w-2 h-2" />
                    </div>
                    )}
                </div>
                <div className="ml-2">
                    <p className={`text-xs font-medium ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                    {feature.name}
                    {feature.description && (
                        <span className={`block text-[10px] ${feature.included ? 'text-gray-500' : 'text-gray-400'}`}>
                        {feature.description}
                        </span>
                    )}
                    </p>
                </div>
                </li>
            ))}
            </ul>

            <div className="flex items-center my-3">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className={`px-2 text-[10px] text-gray-400 flex items-center`}>
                <FaFilePdf className="mr-1 w-2 h-2" /> PDF Master
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            <Link
            to={buttonLink}
            className={`inline-block w-full text-center py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                selectedScheme.buttonClass
            } ${main ? "text-base shadow-md" : "text-sm"}`}
            >
            {buttonText}
            </Link>

        </div>
        
        {main && (
            <div className="absolute inset-0 border-2 border-white opacity-40 rounded-xl pointer-events-none"></div>
        )}
        </div>
    </>
  );
};

/// Function to get the PDF icon based on the plan title
function getPDFIconForPlan(title: string) {
  const iconClass = "w-6 h-6 text-current";
  
  switch(title.toLowerCase()) {
    case 'free':
    case 'basic':
      return <FaRegFilePdf className={iconClass} />;
    case 'standard':
    case 'pro':
      return <FaFilePdf className={iconClass} />;
    case 'premium':
      return <FaFileAlt className={iconClass} />;
    default:
      return <FaFilePdf className={iconClass} />;
  }
}


export default SubscriptionCard;