import SubscriptionCard from "../components/SubscriptionCard"
import BigCard from "../components/bigCard"

// Define features for each plan
const freeFeatures = [
    { name: "All PDF Tools", description: "With Ads", included: true },
    { name: "PDF Conversion", description: "1 daily limit", included: true },
    { name: "PDF Compression", description: "Basic compression", included: true },
    { name: "AI Features", description: "Limited access", included: true },
    { name: "PDF Signing", description: "Basic signatures", included: true },
    { name: "PDF Editing", description: "Not available", included: false },
];

const standardFeatures = [
    { name: "All PDF Tools", description: "With Ads", included: true },
    { name: "OCR Technology", description: "Full access", included: true },
    { name: "PDF Compression", description: "Advanced compression", included: true },
    { name: "PDF Signing", description: "Advanced signatures", included: true },
    { name: "PDF Conversion", description: "Unlimited", included: true },
    { name: "AI Features", description: "5 daily uses", included: true },
    
];

const proFeatures = [
    { name: "All PDF Tools", description: "No Ads", included: true },
    { name: "OCR Technology", description: "Unlimited & advanced", included: true },
    { name: "PDF Compression", description: "Premium compression", included: true },
    { name: "PDF Signing", description: "Premium digital signatures", included: true },
    { name: "PDF Conversion", description: "Unlimited & batch processing", included: true },
    { name: "AI Features", description: "Unlimited usage", included: true },
];

const SubscriptionPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the perfect plan for your PDF needs. All plans include our core tools with different usage limits.
        </p>
      </div>
      
      {/* BUTTONS DONT TAKE THE PERSON TO ANYWHERE. FOR FUTURE */}
      {/* Plans Section */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto">
        {/* Free Plan */}
        <SubscriptionCard 
          title="Free" 
          price="Free" 
          feautures={freeFeatures} 
          buttonText="Get Started" 
          buttonLink="/signup" 
          description="Basic access with registration" 
          className="w-full md:w-1/3 mb-6 md:mb-0"
          color="teal"
        />
        
        {/* Standard Plan */}
        <SubscriptionCard 
          title="Standard" 
          price="€1.99" 
          feautures={standardFeatures} 
          buttonText="Subscribe Now" 
          buttonLink="/signup?plan=standard" 
          description="Enhanced tools with unlimited conversions" 
          main={true}
          className="w-full md:w-1/3 mb-6 md:mb-0"
          color="purple"
          smallTopText="Free for Maltese residents"
        />
        
        {/* Pro Plan */}
        <SubscriptionCard 
          title="Pro" 
          price="€5.99" 
          feautures={proFeatures} 
          buttonText="Go Pro" 
          buttonLink="/signup?plan=pro" 
          description="Complete premium experience" 
          className="w-full md:w-1/3"
          color="orange"
        />
      </div>
      
      {/* Additional Info */}
      <BigCard className="mt-12 max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">All plans include</h2>
          <p className="text-gray-600">
            Access to our suite of PDF tools for viewing, editing, and managing your documents.
            Upgrade to remove ads, increase usage limits, and unlock premium features.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <p className="mb-2"><span className="font-medium">Maltese residents:</span> Get Standard plan features for free with proof of residence.</p>
            Need a custom plan for your business? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>
          </div>
        </div>
      </BigCard>
    </div>
  )
}

export default SubscriptionPage