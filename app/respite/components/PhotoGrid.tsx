import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface PhotoGridProps {
  images?: string[];
}

export default function PhotoGrid({ images = [] }: PhotoGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Show modal with selected image
  const handleSelectImage = (url: string) => {
    setSelectedImage(url);
    setModalVisible(true);
  };

  // Close modal and clear selected image
  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((url, index) => (
          <div
            key={url}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => handleSelectImage(url)}
            onKeyDown={() => handleSelectImage(url)}
          >
            <img
              src={url}
              alt={`house ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalVisible && selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }}
            className="fixed inset-0 bg-coolGray-950 bg-opacity-60 flex items-center justify-center z-50"
            
            // Clicking the overlay closes the modal
            onClick={handleCloseModal}
          >
            {/* Stop click events from bubbling up when clicking inside the modal */}
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
              <button
                type="button"
                className="absolute top-2 right-2 text-white text-3xl font-bold p-1 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition-colors"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}