import React from "react";

const images = [
  "https://www.nibavlifts.net/wp-content/uploads/2023/12/nibav-gallery-1.jpg", // Img0
  "https://www.nibavlifts.net/wp-content/uploads/2023/12/nibav-gallery-7.jpg", // Img1
  "https://www.nibavlifts.net/wp-content/uploads/2023/12/nibav-gallery-5.jpg", // Img2
  "https://www.nibavlifts.net/wp-content/uploads/2023/12/nibav-gallery-4.jpg", // Img3
  "https://www.nibavlifts.net/wp-content/uploads/2023/12/nibav-gallery-3.jpg", // Img4
  "https://www.nibavlifts.net/wp-content/uploads/2023/12/nibav-gallery-2.jpg", // Img5
  "https://www.nibavlifts.net/wp-content/uploads/2023/12/nibav-gallery-8.jpg", // Img6
];

const Gallery: React.FC = () => {
  return (
    <section className="py-10 bg-[#e6e4f2]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-center mb-8 text-gray-800">
          Gallery
        </h2>

        <div className="grid grid-cols-4 gap-3 auto-rows-[180px]">
          {/* Img 0: col 1, no row span (smaller height) */}
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img
              src={images[0]}
              alt="Img 0"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Img 1: col 2, row 1 */}
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img
              src={images[1]}
              alt="Img 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Img 3: col 3, row 1 */}
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img
              src={images[3]}
              alt="Img 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Img 6: col 4, row 1 */}
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img
              src={images[6]}
              alt="Img 6"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Img 2: col 2, row 2 */}
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img
              src={images[2]}
              alt="Img 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Img 4: col 3, row 2 */}
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img
              src={images[4]}
              alt="Img 4"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Img 5: col 3, row 3 */}
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
            <img
              src={images[5]}
              alt="Img 5"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
