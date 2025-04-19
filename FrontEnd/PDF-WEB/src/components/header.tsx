import { FaFolder } from "react-icons/fa6";
import BlackButton from "./blackButton";
import MinimalisticLinks from "./minamilisticLinks";

const Header = () => {
  return (

    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaFolder className="text-2xl text-black-600 " />
          <h1 className="text-xl font-medium text-gray-800 tracking-tight">PDFMaster</h1>
        </div>
        <div className="flex items-center gap-8"> 
        <MinimalisticLinks to="/Home" text="Home" />
        <MinimalisticLinks to="/Tools-Overview" text="Tools overview" />
        <MinimalisticLinks to="/Help" text="Help" />
        <MinimalisticLinks to="/Subscription" text="Subscription" />
        </div>
        <BlackButton text="Sign in" onClick={() => {}} />
      </div>
    </header>
  )
}

export default Header