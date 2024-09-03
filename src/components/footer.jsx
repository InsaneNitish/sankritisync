import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">धरोहरDevs</h2>
          <p className="text-sm mt-2">Explore India's Cultural Heritage</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/heritage" className="text-white hover:underline">Heritage Sites</a>
          <a href="/about" className="text-white hover:underline">About</a>
          <a href="/contact" className="text-white hover:underline">Contact</a>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg
              className="w-6 h-6 text-white hover:text-gray-300 transition duration"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M22.675 0h-21.35c-.734 0-1.325.59-1.325 1.326v21.348c0 .735.591 1.326 1.325 1.326h11.495v-9.294h-3.124v-3.62h3.124v-2.67c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.465.098 2.797.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.76v2.314h3.59l-.467 3.62h-3.123v9.293h6.125c.735 0 1.326-.591 1.326-1.326v-21.348c0-.736-.591-1.326-1.326-1.326z"
              />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg
              className="w-6 h-6 text-white hover:text-gray-300 transition duration"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M23.953 4.57a10.06 10.06 0 01-2.825.775 4.931 4.931 0 002.163-2.724 10.088 10.088 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482 13.959 13.959 0 01-10.141-5.14 4.822 4.822 0 001.523 6.574 4.897 4.897 0 01-2.229-.616c-.054 2.07 1.441 4.052 3.64 4.495a4.92 4.92 0 01-2.224.084c.622 1.944 2.423 3.357 4.554 3.396a9.867 9.867 0 01-6.1 2.105c-.398 0-.79-.024-1.174-.068a13.936 13.936 0 007.547 2.209c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.015-.637a9.936 9.936 0 002.466-2.548l-.047-.02z"
              />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg
              className="w-6 h-6 text-white hover:text-gray-300 transition duration"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.347 3.608 1.322.976.975 1.26 2.242 1.322 3.608.058 1.265.07 1.645.07 4.85s-.012 3.585-.07 4.85c-.062 1.366-.347 2.633-1.322 3.608-.975.976-2.242 1.26-3.608 1.322-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.347-3.608-1.322-.976-.975-1.26-2.242-1.322-3.608-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.347-2.633 1.322-3.608.975-.976 2.242-1.26 3.608-1.322 1.265-.058 1.645-.07 4.85-.07zm0-2.163c-3.26 0-3.667.014-4.947.072-1.401.062-2.75.375-3.835 1.46-1.084 1.085-1.398 2.434-1.46 3.835-.058 1.28-.072 1.687-.072 4.947s.014 3.667.072 4.947c.062 1.401.375 2.75 1.46 3.835 1.085 1.084 2.434 1.398 3.835 1.46 1.28.058 1.687.072 4.947.072s3.667-.014 4.947-.072c1.401-.062 2.75-.375 3.835-1.46 1.084-1.085 1.398-2.434 1.46-3.835.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.062-1.401-.375-2.75-1.46-3.835-1.085-1.084-2.434-1.398-3.835-1.46-1.28-.058-1.687-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.758-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.12c-2.188 0-3.957-1.77-3.957-3.957 0-2.188 1.77-3.957 3.957-3.957 2.188 0 3.957 1.77 3.957 3.957 0 2.188-1.77 3.957-3.957 3.957zm6.406-11.845c-.796 0-1.441.645-1.441 1.441 0 .796.645 1.441 1.441 1.441s1.441-.645 1.441-1.441c0-.796-.645-1.441-1.441-1.441z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center py-5 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} धरोहरDevs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
