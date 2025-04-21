
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaImage,
  FaFileAlt,
  FaSearch,
  FaLock,
  FaEdit,
  FaSignature,
  FaCompress,
  FaExchangeAlt,
  FaFileUpload
} from "react-icons/fa";
import { MdSplitscreen } from "react-icons/md";
import { BiMerge } from "react-icons/bi";
import BigCard from "../components/bigCard";
import { JSX } from "react";

// Tool data structure
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  color: string;
  route: string;
}

//  Tool Card  
const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
      style={{ backgroundColor: `${tool.color}05` }}
    >
      {/* Color top */}
      <div className="h-1" style={{ backgroundColor: tool.color }}></div>
      
      <div className="p-5 flex flex-col h-full">
        {/* Header w icon n name */}
        <div className="flex items-center mb-4">
          <div 
            className="w-12 h-12 rounded-md flex items-center justify-center shadow-sm mr-3" 
            style={{ backgroundColor: tool.color }}
          >
            <span className="text-white">{tool.icon}</span>
          </div>
          <h3 className="font-semibold text-lg" style={{ color: tool.color }}>{tool.name}</h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
        
        {/* Footer */}
        <div className="mt-auto pt-3 border-t" style={{ borderColor: `${tool.color}20` }}>
          <div 
            className="text-sm font-medium flex items-center group" 
            style={{ color: tool.color }}
          >
            Use Tool
            <svg 
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Decorative element, 1st is a bubble on the bottom right, 2nd is the colourful thing on the left*/}
      <div 
        className="absolute bottom-0 right-0 w-16 h-16 -m-6 rounded-full opacity-5" 
        style={{ backgroundColor: tool.color }}
      ></div>
      <div 
        className="absolute top-8 left-0 w-1 h-12 rounded-r-full" 
        style={{ backgroundColor: tool.color }}
      ></div>
    </div>
  );
};

// all tools for mapping
const tools: Tool[] = [
  {
    id: "ai-pdf",
    name: "AI PDF Assistant",
    description: "Leverage AI to analyze, summarize, and extract key information from your PDF documents.",
    icon: <FaRobot className="text-3xl" />,
    color: "#8d46e7",
    route: "/ai-pdf"
  },
  {
    id: "ocr-pdf",
    name: "PDF OCR",
    description: "Convert scanned documents and images into searchable, editable text using OCR technology.",
    icon: <FaSearch className="text-3xl" />,
    color: "#13a3b5",
    route: "/ocr-pdf"
  },
  {
    id: "img-to-pdf",
    name: "Image to PDF",
    description: "Convert images from various formats (JPG, PNG, BMP) into professional PDF documents.",
    icon: <FaImage className="text-3xl" />,
    color: "#ff6105",
    route: "/img-pdf"
  },
  {
    id: "pdf-to-img",
    name: "PDF to Image",
    description: "Extract pages from PDF documents and save them as image files in various formats.",
    icon: <FaFileAlt className="text-3xl" />,
    color: "#0ba84a",
    route: "/pdf-image"
  },
  {
    id: "edit-pdf",
    name: "Edit PDF",
    description: "Modify your PDF content - add text, images, shapes, and annotations to existing documents.",
    icon: <FaEdit className="text-3xl" />,
    color: "#ff3b4b",
    route: "/edit-pdf"
  },
  {
    id: "secure-pdf",
    name: "Secure PDF",
    description: "Protect sensitive PDF files with passwords, encryption, and permission controls.",
    icon: <FaLock className="text-3xl" />,
    color: "#4a6bff",
    route: "/secure-pdf"
  },
  {
    id: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce file size while maintaining quality, perfect for sharing and uploading documents.",
    icon: <FaCompress className="text-3xl" />,
    color: "#8d46e7",
    route: "/compress-pdf"
  },
  {
    id: "sign-pdf",
    name: "Sign PDF",
    description: "Add digital signatures to your documents for secure, legally valid authentication.",
    icon: <FaSignature className="text-3xl" />,
    color: "#08c1b8",
    route: "/sign-pdf"
  },
  {
    id: "convert-pdf",
    name: "Convert PDF",
    description: "Transform PDFs to other formats like Word, Excel, PowerPoint, and more.",
    icon: <FaExchangeAlt className="text-3xl" />,
    color: "#ff8c00",
    route: "/convert-pdf"
  },
  {
    id: "split-pdf",
    name: "Split PDF",
    description: "Divide PDFs into separate files by pages, chapters, or custom ranges.",
    icon: <MdSplitscreen className="text-3xl" />,
    color: "#0ba84a",
    route: "/split-pdf"
  },
  {
    id: "merge-pdf",
    name: "Merge PDFs",
    description: "Combine multiple PDF files into a single document with custom ordering.",
    icon: <BiMerge className="text-3xl" />,
    color: "#13a3b5",
    route: "/merge-pdf"
  },
  {
    id: "upload-pdf",
    name: "Upload & Manage",
    description: "Upload, organize, and manage your PDF files in one convenient location.",
    icon: <FaFileUpload className="text-3xl" />,
    color: "#5a6778",
    route: "/upload-manage"
  },
];

const ToolsOverviewPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <BigCard className="mb-8">
        <div className="text-center py-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">PDF Tools Overview</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of powerful PDF tools designed to help you work more efficiently with your documents.
            Each tool is optimized for speed, security, and ease of use.
          </p>
        </div>
      </BigCard>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.id} 
            to={tool.route}
            className="relative block text-current no-underline"
          >
            <ToolCard tool={tool} />
          </Link>
        ))}
      </div>

      {/* Bottom  */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-3">Can't find what you need?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          If you're looking for a specific PDF functionality that isn't listed here, 
          we might have it in development or could consider adding it.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Request a Feature
        </Link>
      </div>
    </div>
  );
};

export default ToolsOverviewPage;