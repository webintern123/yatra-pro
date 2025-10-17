// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="border-t border-gray-200" style={{ backgroundColor: "#214361" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="w-40">
              <img
                src="/Yata white .svg" // replace with your inline SVG or logo path
                alt="Azenda Logo"
                className="w-full"
              />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-200 leading-relaxed">
              This powerful tool eliminates the need to leave Salesforce to get
              things done & create a custom proposal with dynamic pricing tables.
            </p>

            {/* Store Links */}
            {/* Store Links */}
<div className="flex gap-4">
  <a href="#">
    <img
      src="https://cdn.prod.website-files.com/67ee4eb1923bd785f5798a15/67f37db10dd54a570383d922_playstore-white.svg%20(3).svg"
      alt="Google Play"
      className="h-10 filter invert"
    />
  </a>
  <a href="#">
    <img
      src="https://cdn.prod.website-files.com/67ee4eb1923bd785f5798a15/67f37ded3ed6c653fc9bc1a7_Link%20(2).svg"
      alt="App Store"
      className="h-10 filter invert"
    />
  </a>
</div>

          </div>

          {/* Right Section */}
          <div className="grid grid-cols-3 gap-8">
            {/* Menu */}
            <div>
              <p className="font-semibold text-white mb-4">Menu</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <p className="font-semibold text-white mb-4">Features</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Integration</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-semibold text-white mb-4">Company</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Demo Request</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-500 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © Azenda 2025. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
