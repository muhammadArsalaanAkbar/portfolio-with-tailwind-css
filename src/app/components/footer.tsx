// components/Footer.js

function Footer () {
    return (
      <footer className="bg-gray-800 text-gray-400 py-4 ">
        <div className="container mx-auto text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} [Muhammad Arsalan Akbar ]. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/projects" className="hover:text-white">Projects</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  