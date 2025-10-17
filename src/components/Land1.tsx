import React from "react";

const Land1: React.FC = () => {
  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#214361]">
            Yatra Elevators & Escalators
          </h1>
          <p className="text-gray-600">
            Yatra Elevators & Escalators means choosing responsibility, innovation, and a customer-based approach. We have designed to offer advanced vertical mobility solutions that conglomerate advanced technology with powerful engineering, promising safety, efficiency, and comfort in every ride. From Tailor made designs to accurate installations and responsive post-sales support, we are committed to delivering excellence at each and every stage. Our deep analysing of market needs, matching to global standards and a passion for quality set us to be unique. At Yatra, we don’t just move people, we inspire them
          </p>

          <a
            href="/"
            className="inline-block bg-[#214361] text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            DownLoad Brochure
          </a>

         <div className="flex bg-[#214361] text-white p-6 rounded-lg">
  <div className="flex-1 text-center">
    <div className="text-3xl font-bold">85%</div>
    <div className="text-sm">Project Finished</div>
  </div>
  <div className="flex-1 text-center">
    <div className="text-3xl font-bold">99%</div>
    <div className="text-sm">Rated 4.9/5 over 1200 reviews</div>
  </div>
</div>
</div>

        {/* Right Content */}
        <div className="relative">
          {/* Person Image */}
          <img
            src="https://cdn.prod.website-files.com/63d89637bd85e23e97297104/641a9ce60ec6dbc4d73c32bf_New%20Idea.webp"
            alt="Person"
            className="w-full rounded-lg"
          />

          {/* Overlay Card on Hand */}
          <div className="absolute bottom-10 right-6 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3 w-72">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/47.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>

            {/* Text + Button */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">
                Social marketing and advertising.
              </p>
              <button className="mt-2 bg-[#214361] text-white text-sm px-3 py-1 rounded-lg hover:opacity-90">
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Overlay Card near Head (LEFT side) */}
          <div className="absolute top-10 left-10 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-40">
            <img
              src="https://cdn.prod.website-files.com/63d89637bd85e23e97297104/641a9d08fbf80dc0ad7572b3_Digital%20Marketing.webp"
              alt="Digital Marketing"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <p className="mt-2 text-xs font-medium text-[#214361] text-center">
              Digital Marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Land1;
