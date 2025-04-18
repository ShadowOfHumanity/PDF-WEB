import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

// Placeholder page components
const HomePage = () => <div className="container mx-auto p-6">Home Page</div>;
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
            <Route path="/" element={<HomePage />} />
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