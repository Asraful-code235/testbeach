"use client";
import Image from "next/image";
import { useState } from "react";

export default function GroupCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image5.jpg",
    "/images/image4.jpg",
    "/images/image4.jpg",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className=" w-full py-12 px-8 relative">
      <div className="carousel relative w-full overflow-hidden h-[500px] md:max-h-[800px]">
        <div
          className="carousel-inner flex transition-all duration-500 delay-300"
          style={{
            transform: `translateX(-${currentIndex * 10}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images?.map((image, index) => (
            <div key={index} className="carousel-slide h-[500px] ">
              <Image
                src={image}
                width={500}
                height={500}
                alt={`Image ${index + 1}`}
                className="w-auto h-[500px] md:h-[800px] aspect-video object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center gap-4 mt-6">
        <button
          className="prev-button px-4 py-2 bg-opacity-80  rounded-full bg-gray-300 hover:bg-gray-400"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="next-button px-4 py-2 bg-opacity-80  rounded-full bg-gray-300 hover:bg-gray-400"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
