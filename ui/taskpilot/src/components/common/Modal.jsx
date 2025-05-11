import { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center w-full bg-gray-500 bg-opacity-50">
          <div ref={modalRef} className="shadow-xl w-full max-w-md p-1">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
