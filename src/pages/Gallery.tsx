import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Import all images from the assets/gallery directory
import img1 from '@/assets/gallery/IMG-20250722-WA0011.jpg';
import img2 from '@/assets/gallery/IMG-20250722-WA0012.jpg';
import img3 from '@/assets/gallery/IMG-20250722-WA0013.jpg';
import img4 from '@/assets/gallery/IMG-20250722-WA0014.jpg';
import img5 from '@/assets/gallery/IMG-20250722-WA0015.jpg';
import img6 from '@/assets/gallery/IMG-20250722-WA0016.jpg';
import img7 from '@/assets/gallery/IMG-20250722-WA0017.jpg';
import img8 from '@/assets/gallery/IMG-20250722-WA0018.jpg';
import img9 from '@/assets/gallery/IMG-20250722-WA0019.jpg';
import img10 from '@/assets/gallery/IMG-20250722-WA0020.jpg';
import img11 from '@/assets/gallery/IMG-20250722-WA0021.jpg';
import img12 from '@/assets/gallery/IMG-20250722-WA0022.jpg';
import img13 from '@/assets/gallery/IMG-20250722-WA0023.jpg';
import img14 from '@/assets/gallery/IMG-20250722-WA0024.jpg';
import img15 from '@/assets/gallery/WhatsApp Image 2025-07-22 at 14.47.38_0e009246.jpg';
import img16 from '@/assets/gallery/WhatsApp Image 2025-07-22 at 14.48.05_85497c9b.jpg';
import img17 from '@/assets/gallery/visiting cards.png';

const galleryImages = [
  { id: 1, src: img1, alt: 'Gallery Image 1' },
  { id: 2, src: img2, alt: 'Gallery Image 2' },
  { id: 3, src: img3, alt: 'Gallery Image 3' },
  { id: 4, src: img4, alt: 'Gallery Image 4' },
  { id: 5, src: img5, alt: 'Gallery Image 5' },
  { id: 6, src: img6, alt: 'Gallery Image 6' },
  { id: 7, src: img7, alt: 'Gallery Image 7' },
  { id: 8, src: img8, alt: 'Gallery Image 8' },
  { id: 9, src: img9, alt: 'Gallery Image 9' },
  { id: 10, src: img10, alt: 'Gallery Image 10' },
  { id: 11, src: img11, alt: 'Gallery Image 11' },
  { id: 12, src: img12, alt: 'Gallery Image 12' },
  { id: 13, src: img13, alt: 'Gallery Image 13' },
  { id: 14, src: img14, alt: 'Gallery Image 14' },
  { id: 15, src: img15, alt: 'Gallery Image 15' },
  { id: 16, src: img16, alt: 'Gallery Image 16' },
  { id: 17, src: img17, alt: 'Gallery Image 17' },
];

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery - Dashmesh Printers';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Browse our gallery of printing work and designs from Dashmesh Printers.';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">Explore our collection of printing work and designs</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-max">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a 
                      href={image.src} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block p-3 bg-white text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label="View full size"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Inspired by Our Work?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's bring your ideas to life with our premium printing services. Get a free quote today!
            </p>
            <Link to="/quote">
              <Button className="btn-accent px-8 py-6 text-lg">
                Get Your Quote Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
