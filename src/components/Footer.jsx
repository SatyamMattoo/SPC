const Footer = () => {
  return (
    <footer className="bg-white py-6 text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Company Logo" className="w-12 h-12 mr-3" />
          <h3 className="text-lg font-bold">SmartClean</h3>
        </div>

        {/* Email Section */}
        <div className="text-sm md:text-base">
          <p>
            📧 Email us at:{" "}
            <a
              href="mailto:contact@smartclean.com"
              className="text-blue-400 underline hover:text-blue-500"
            >
              contact@smartclean.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-6 text-xs text-gray-800">
        © {new Date().getFullYear()} SmartClean. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
