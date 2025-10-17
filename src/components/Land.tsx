import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-[#214361]">
              Yatra <span className="text-[#214361]">Elevators & Escalators </span>
            </h1>

            <p className="mt-4 text-gray-600 hidden md:block">
              Yatra Elevators & Escalators means choosing responsibility, innovation, and a customer-based approach. We have designed to offer advanced vertical mobility solutions that conglomerate advanced technology with powerful engineering, promising safety, efficiency, and comfort in every ride. From Tailor made designs to accurate installations and responsive post-sales support, we are committed to delivering excellence at each and every stage. Our deep analysing of market needs, matching to global standards and a passion for quality set us to be unique. At Yatra, we don’t just move people, we inspire them
            </p>
           

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-[#214361] text-white rounded-xl font-semibold shadow-md hover:opacity-90"
              >
                DownLoad Brochure
              </a>
              
            </div>

            
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://cdn.prod.website-files.com/61d76483c0f9a6333f6af4fa/61d76483c0f9a68cb26af5f9_nue%20blockchain%20hero%20image%20(1).svg"
              alt="Blockchain Illustration"
              className="w-96 lg:w-[500px]"
            />
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Avatars */}
          <div className="flex items-center">
            <div className="flex -space-x-4">
              <img
                src="https://cdn.prod.website-files.com/61b1691ce8e93c4dc52477f0/61b1777509ecf0c777772a6f_Avatar%2001.png"
                alt="Avatar 1"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://cdn.prod.website-files.com/61b1691ce8e93c4dc52477f0/61b17777ef3acd43d0bbb4e9_Avatar%2002.png"
                alt="Avatar 2"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://cdn.prod.website-files.com/61b1691ce8e93c4dc52477f0/61b17778d164d7f9f7c9c5b8_Avatar%2003.png"
                alt="Avatar 3"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
            <span className="ml-4 text-gray-600 font-medium">
              Get to know our team →
            </span>
          </div>

          {/* Partners */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 font-medium">Our Partners</span>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                See All
              </a>
            </div>
            <div className="flex space-x-6">
              <img
                src="https://cdn.prod.website-files.com/61b1691ce8e93c4dc52477f0/61b175dbd1ffed24bf34ade7_Logo%201.svg"
                alt="Logo 1"
                className="h-8"
              />
              <img
                src="https://cdn.prod.website-files.com/61b1691ce8e93c4dc52477f0/61b175dd1ddc83147ee1f503_Logo%202.svg"
                alt="Logo 2"
                className="h-8"
              />
              <img
                src="https://cdn.prod.website-files.com/61b1691ce8e93c4dc52477f0/61b175deef3acd6626bb8e30_Logo%203.svg"
                alt="Logo 3"
                className="h-8"
              />
              <img
                src="https://cdn.prod.website-files.com/61b1691ce8e93c4dc52477f0/61b175e009ecf083c777107a_Logo%204.svg"
                alt="Logo 4"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
