import React, { useEffect, useState } from 'react';
import Toast, { ToastType } from './Toast';
import styled from 'styled-components';

export interface ToastMessage {
  id: number,
  title?: string,
  message: string,
  type: ToastType,
}

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: ToastType, title?: string) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, title, message, type }]);
    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    window.addToast = addToast;
  }, []);

  return (
    <div style={{zIndex: "99"}} className="fixed top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
