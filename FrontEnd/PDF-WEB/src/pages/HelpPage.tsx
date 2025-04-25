import React, { useState } from 'react'

const HelpPage = () => {
  // State to track which section is currently active in the sidebar
  
  const [activeSection, setActiveSection] = useState('getting-started')

 // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-5">
      <div className="w-full md:w-64 md:flex-shrink-0 bg-gray-100 rounded-lg p-5 mb-6 md:mb-0 md:mr-8 shadow-sm md:sticky md:top-5 md:h-fit">
        <h3 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Help Topics</h3>
        <ul className="space-y-2">
          <li className={`rounded p-2 transition-colors ${activeSection === 'getting-started' ? 'bg-gray-200 font-semibold' : ''}`}>
            <a href="#getting-started" className="block text-gray-800 no-underline" onClick={() => scrollToSection('getting-started')}>🧭 Getting Started</a>
          </li>
          <li className={`rounded p-2 transition-colors ${activeSection === 'tool-guides' ? 'bg-gray-200 font-semibold' : ''}`}>
            <a href="#tool-guides" className="block text-gray-800 no-underline" onClick={() => scrollToSection('tool-guides')}>🛠️ Tool Guides</a>
          </li>
          <li className={`rounded p-2 transition-colors ${activeSection === 'privacy-security' ? 'bg-gray-200 font-semibold' : ''}`}>
            <a href="#privacy-security" className="block text-gray-800 no-underline" onClick={() => scrollToSection('privacy-security')}>🔒 Privacy & Security</a>
          </li>
          <li className={`rounded p-2 transition-colors ${activeSection === 'troubleshooting' ? 'bg-gray-200 font-semibold' : ''}`}>
            <a href="#troubleshooting" className="block text-gray-800 no-underline" onClick={() => scrollToSection('troubleshooting')}>💬 Troubleshooting</a>
          </li>
          <li className={`rounded p-2 transition-colors ${activeSection === 'faq' ? 'bg-gray-200 font-semibold' : ''}`}>
            <a href="#faq" className="block text-gray-800 no-underline" onClick={() => scrollToSection('faq')}>❓ FAQ</a>
          </li>
          <li className={`rounded p-2 transition-colors ${activeSection === 'contact' ? 'bg-gray-200 font-semibold' : ''}`}>
            <a href="#contact" className="block text-gray-800 no-underline" onClick={() => scrollToSection('contact')}>📩 Contact / Feedback</a>
          </li>
        </ul>
      </div>
      {/* main area */}
      <div className="flex-1">
        <section id="getting-started" className="mb-10 scroll-mt-5">
          <h1 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-5">🧭 Getting Started</h1>
          <p className="mb-5">Welcome to the PDF Web App! This app allows you to convert, merge, split, compress, or edit PDFs easily online.</p>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">No Software Download Required</h3>
            <p>All PDF operations are performed directly in your web browser. No need to install any software or plugins.</p>
          </div>
        </section>

        <section id="tool-guides" className="mb-10 scroll-mt-5">
          <h1 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-5">🛠️ Tool Guides</h1>
          
          <div className="bg-white rounded-lg p-5 mb-7 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0 border-b border-gray-100 pb-2">PDF to Word</h3>
            <div className="flex flex-wrap gap-4 my-5">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <p className="m-0">Upload your PDF document</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <p className="m-0">Select "Convert to Word" option</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <p className="m-0">Click "Download" to get your Word document</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <h4 className="text-base font-medium text-gray-700 mt-0">Will the format be preserved?</h4>
              <p className="m-0">Our converter attempts to maintain the original layout, fonts, and images. Complex layouts might require minor adjustments.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-7 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0 border-b border-gray-100 pb-2">Merge PDFs</h3>
            <div className="flex flex-wrap gap-4 my-5">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <p className="m-0">Upload multiple PDF files</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <p className="m-0">Arrange them in the desired order by dragging</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <p className="m-0">Click "Merge" and download the combined PDF</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <h4 className="text-base font-medium text-gray-700 mt-0">Can I preview before merging?</h4>
              <p className="m-0">Yes, thumbnails of all pages are available for preview before finalizing the merge.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-7 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0 border-b border-gray-100 pb-2">Split PDF</h3>
            <div className="flex flex-wrap gap-4 my-5">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <p className="m-0">Upload your PDF document</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <p className="m-0">Select pages or ranges to extract (e.g., "1-3, 5, 8-10")</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <p className="m-0">Click "Split" and download the resulting file(s)</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-7 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0 border-b border-gray-100 pb-2">Compress PDF</h3>
            <div className="flex flex-wrap gap-4 my-5">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <p className="m-0">Upload your PDF document</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <p className="m-0">Select compression level (Low, Medium, High)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <p className="m-0">Click "Compress" and download the optimized PDF</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <h4 className="text-base font-medium text-gray-700 mt-0">Will compression affect quality?</h4>
              <p className="m-0">Higher compression levels may reduce image quality. Use "Low" for minimal quality loss.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-7 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0 border-b border-gray-100 pb-2">Edit PDF</h3>
            <div className="flex flex-wrap gap-4 my-5">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <p className="m-0">Upload your PDF document</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <p className="m-0">Use the toolbar to add text, images, highlights, or drawings</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <p className="m-0">Save changes and download the edited PDF</p>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy-security" className="mb-10 scroll-mt-5">
          <h1 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-5">🔒 Privacy & Security</h1>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">Are files deleted after use?</h3>
            <p>Yes, all uploaded files are automatically deleted from our servers after 24 hours. We recommend downloading your processed files promptly.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">Are uploads encrypted?</h3>
            <p>All file transfers use secure HTTPS connections with TLS encryption. Your documents are protected during upload and download.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">How long are files stored?</h3>
            <p>Files are temporarily stored while being processed and for a maximum of 24 hours afterward, after which they are permanently deleted.</p>
          </div>
        </section>

        <section id="troubleshooting" className="mb-10 scroll-mt-5">
          <h1 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-5">💬 Troubleshooting</h1>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">Why won't my file upload?</h3>
            <p>Check that your file is under the 100MB size limit and is a supported file type. If your connection is unstable, try uploading on a different network.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">My conversion failed</h3>
            <p>Ensure your PDF isn't password-protected or corrupted. Some PDFs with complex elements might not convert correctly. Try using a different PDF if possible.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">My output is blank</h3>
            <p>This usually happens with scanned PDFs or documents without selectable text. Try using our OCR feature first to make the text recognizable.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">The site is not loading correctly</h3>
            <p>Clear your browser cache, try a different browser, or disable extensions that might interfere with our web application.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">Browser Compatibility</h3>
            <p>Our application works best on recent versions of Chrome, Firefox, Edge, and Safari. Internet Explorer is not supported.</p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-5">
          <h1 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-5">❓ Frequently Asked Questions</h1>
          
          <div className="bg-gray-50 rounded-lg p-5 mb-5">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">Is it free to use?</h3>
            <p>Basic functionality is free. Premium features require a subscription or individual purchases.</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 mb-5">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">How can I batch process files?</h3>
            <p>Premium users can upload multiple PDFs at once for batch processing. Select the files and choose the same operation to apply to all.</p>
          </div>
        </section>

        <section id="contact" className="mb-10 scroll-mt-5">
          <h1 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-5">📩 Contact / Feedback</h1>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">Bug Reports or Feature Suggestions</h3>
            <p>We value your feedback. Please use our <a href="#" className="text-blue-600 hover:text-blue-800">feedback form</a> to report bugs or suggest new features.</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mt-0">Contact Support</h3>
            <p>Need help? Contact our support team at <a href="mailto:support@pdfwebapp.com" className="text-blue-600 hover:text-blue-800">support@pdfwebapp.com</a> or submit a <a href="#" className="text-blue-600 hover:text-blue-800">support ticket</a>.</p>
          </div>
          
         
        </section>
      </div>
    </div>
  )
}

export default HelpPage