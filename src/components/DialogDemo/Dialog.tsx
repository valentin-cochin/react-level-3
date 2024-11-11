import React, { ReactNode, useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  isModal?: boolean;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, isModal = true, header, body, footer }) => {
  useEffect(() => {
    if (isModal && isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling for modal
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModal, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isModal ? 'bg-black bg-opacity-50' : ''}`}
      style={{ pointerEvents: isModal ? 'auto' : 'none' }} // Only capture clicks if it's modal
    >
      <div
        className={`bg-white rounded shadow-lg max-w-md w-full p-4 ${isModal ? '' : 'relative z-10'}`}
        style={{ pointerEvents: 'auto' }} // Always allow clicks inside the dialog
        onClick={(e) => e.stopPropagation()}
      >
        {header && <div className="border-b p-2 text-lg font-bold">{header}</div>}
        {body && <div className="p-2">{body}</div>}
        {footer && <div className="border-t p-2 flex justify-end">{footer}</div>}
        {!footer && (
          <button
            onClick={onClose}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Dialog;
