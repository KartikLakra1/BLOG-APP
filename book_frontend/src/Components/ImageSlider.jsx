import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-[30vh] lg:h-[40vh]">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
        </div>
    );
};

export default ImageSlider;