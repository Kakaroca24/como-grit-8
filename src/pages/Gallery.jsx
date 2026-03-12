import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Gallery2 from '../assets/gallery2.webp'
import Gallery3 from '../assets/gallery3.webp'
import Gallery4 from '../assets/gallery4.webp'
import Gallery5 from '../assets/gallery5.webp'
import Gallery6 from '../assets/gallery6.webp'
import Gallery7 from '../assets/gallery7.webp'
import Gallery8 from '../assets/gallery8.webp'
import Gallery9 from '../assets/gallery9.webp'
import Gallery10 from '../assets/gallery10.webp'
import Gallery11 from '../assets/gallery11.webp'
import Gallery12 from '../assets/gallery12.webp'
import Gallery21 from '../assets/image18.webp'
import Gallery22 from '../assets/image19.webp'
import Gallery23 from '../assets/image4.webp'


export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

const galleryImages = [
  { id: 2, url: Gallery2 },
  { id: 3, url: Gallery3 },
  { id: 4, url: Gallery4 },
  { id: 5, url: Gallery5 },
  { id: 6, url: Gallery6 },
  { id: 7, url: Gallery7 },
  { id: 8, url: Gallery8 },
  { id: 9, url: Gallery9 },
  { id: 10, url: Gallery10 },
  { id: 11, url: Gallery11 },
  { id: 12, url: Gallery12 },
  
{ id: 21, url: Gallery21 },
  { id: 22, url: Gallery22 },
  { id: 23, url: Gallery23 },
];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

         <div className="text-center mb-12 sm:mb-20 animate-fadeInDown">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
    {t('galleryPageTitle')}
  </h1>
  <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 animate-expandWidth"></div>
  <div className="text-base sm:text-lg text-slate-600  max-w-5xl mx-auto leading-relaxed px-4">
    <p className="mb-4">
      {t('galleryPageIntro1')} <span className="text-blue-600">{t('galleryPageIntro2')}</span> {t('galleryPageIntro3')} <span className="text-blue-600">{t('galleryPageIntro4')}</span>{t('galleryPageIntro5')}
    </p>
    <p>
      {t('galleryPageIntro6')}
    </p>
  </div>
</div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(index)}
                className={`group relative cursor-pointer overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 hover:border-blue-600 rounded-lg ${
                  isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                } ${
                  (index % 7 === 0 || index % 7 === 4) ? 'row-span-2' : 'aspect-square'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  minHeight: (index % 7 === 0 || index % 7 === 4) ? '400px' : '200px'
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {galleryImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">No images to display</p>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-overlayFadeIn"
          onClick={handleClose}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-6" onClick={(e) => e.stopPropagation()}>

            <div className="relative w-full h-full max-w-6xl flex items-center justify-center px-12 sm:px-16">
              <img
                src={selectedImage.url.replace('w=800', 'w=1600')}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain animate-imageFadeZoom rounded-lg sm:rounded-xl shadow-2xl"
              />
            </div>

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-white/80 p-2 sm:p-3 bg-black/30 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 z-20 animate-buttonSlideIn"
              style={{ animationDelay: '0.3s' }}
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-all duration-300 hover:scale-125 active:scale-95 z-20 animate-arrowSlideIn group"
              style={{ animationDelay: '0.2s' }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:drop-shadow-lg transition-all" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-all duration-300 hover:scale-125 active:scale-95 z-20 animate-arrowSlideIn group"
              style={{ animationDelay: '0.25s' }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:drop-shadow-lg transition-all" />
            </button>

            <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-2xl z-20 border border-white/25 hover:border-white/40 transition-all animate-counterSlideUp">
              <p className="text-white text-sm sm:text-base font-semibold">
                {currentIndex + 1} <span className="text-white/70 font-normal">{t('galleryImageCounter')}</span> {galleryImages.length}
              </p>
            </div>


          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes overlayFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(4px);
          }
        }

        @keyframes imageFadeZoom {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes arrowSlideIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes buttonSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px) translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes counterSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonsSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        .animate-overlayFadeIn {
          animation: overlayFadeIn 0.4s ease-out;
        }

        .animate-imageFadeZoom {
          animation: imageFadeZoom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-arrowSlideIn {
          animation: arrowSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-buttonSlideIn {
          animation: buttonSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-counterSlideUp {
          animation: counterSlideUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-buttonsSlideUp {
          animation: buttonsSlideUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
}