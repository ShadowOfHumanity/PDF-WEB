import { FaFolder } from "react-icons/fa6";
import MinimalisticLinks from "./minamilisticLinks";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo n description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaFolder className="text-xl text-black-600" />
              <h2 className="font-medium text-gray-800">PDFMaster</h2>
            </div>
            <p className="text-sm text-gray-600">
              All your PDF tools in one place. Edit, convert, and manage PDF files with ease.
            </p>
          </div>
          
          {/*  links */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <MinimalisticLinks to="/Home" text="Home" />
              <MinimalisticLinks to="/Tools-Overview" text="Tools" />
              <MinimalisticLinks to="/Help" text="Help" />
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Tools</h3>
            <div className="flex flex-col gap-2">
              <MinimalisticLinks to="/merge" text="Merge PDFs" />
              <MinimalisticLinks to="/split" text="Split PDF" />
              <MinimalisticLinks to="/convert" text="Convert" />
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              <MinimalisticLinks to="/about-us" text="About Us" />
              <MinimalisticLinks to="/contact" text="Contact" />
              <MinimalisticLinks to="/Subscription" text="Subscription" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} PDFMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;