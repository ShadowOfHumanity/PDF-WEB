import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import LandingPage from "./pages/landingPage";
import HomePage from "./pages/HomePage";

// Placeholder page components
const ToolsOverviewPage = () => <div className="container mx-auto p-6">Tools Overview Page</div>;
const HelpPage = () => <div className="container mx-auto p-6">Help Page</div>;
const SubscriptionPage = () => <div className="container mx-auto p-6">Subscription Page</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> 
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={ <LandingPage />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Tools-Overview" element={<ToolsOverviewPage />} />
            <Route path="/Help" element={<HelpPage />} />
            <Route path="/Subscription" element={<SubscriptionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App; 