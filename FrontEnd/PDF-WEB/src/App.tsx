import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import SubscriptionPage from "./pages/SubscriptionPage";

// Placeholder page components
const ToolsOverviewPage = () => <div className="container mx-auto p-6">Tools Overview Page</div>;
const HelpPage = () => <div className="container mx-auto p-6">Help Page</div>;

const AiPdfPage = () => <div className="container mx-auto p-6">AI PDF Page</div>;
const OcrPdfPage = () => <div className="container mx-auto p-6">OCR PDF Page</div>;
const SecurePdfPage = () => <div className="container mx-auto p-6">Secure PDF Page</div>;
const ImgPdfPage = () => <div className="container mx-auto p-6">Image to PDF Page</div>;
const EditPdfPage = () => <div className="container mx-auto p-6">Edit PDF Page</div>;
const CompressPdfPage = () => <div className="container mx-auto p-6">Compress PDF Page</div>;
const SignPdfPage = () => <div className="container mx-auto p-6">Sign PDF Page</div>;
const ConvertPdfPage = () => <div className="container mx-auto p-6">Convert PDF Page</div>;

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
            <Route path="/ai-pdf" element={<AiPdfPage />} />
            <Route path="/ocr-pdf" element={<OcrPdfPage />} />
            <Route path="/secure-pdf" element={<SecurePdfPage/>} />
            <Route path="/img-pdf" element={<ImgPdfPage />} />
            <Route path="/pdf-image" element={<ImgPdfPage />} />
            <Route path="/edit-pdf" element={<EditPdfPage />} />
            <Route path="/compress-pdf" element={<CompressPdfPage />} />
            <Route path="/sign-pdf" element={<SignPdfPage />} />
            <Route path="/convert-pdf" element={<ConvertPdfPage />} /> 
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