import React from "react";

type Props = {
  isVisible: boolean;
  onClose: any;
  className?: string
  children?: React.ReactNode;
};

export default function Modal({ isVisible, onClose, className, children }: Props) {
  if (!isVisible) {
    return null;
  }

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm ${className}`}
      aria-hidden={true}
      id="wrapper"
      onClick={handleClose}
    >
      {children}
    </div>
  );
}
