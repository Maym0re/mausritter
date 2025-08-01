'use client';
import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  width?: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Sidebar({
  isOpen,
  onClose,
  side = 'right',
  width = 'w-96',
  children,
  title,
  className = ''
}: SidebarProps) {
  if (!isOpen) return null;

  const sideClass = side === 'right' ? 'right-0' : 'left-0';
  const slideClass = side === 'right'
    ? 'transform transition-transform duration-300 ease-in-out translate-x-0'
    : 'transform transition-transform duration-300 ease-in-out translate-x-0';

  return (
    <>
      {/* Backdrop - затемнение фона */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      />

      {/* Сайдбар */}
      <div
        className={`
          fixed top-0 ${sideClass} h-full ${width} 
          bg-white border-l border-gray-200 shadow-xl z-50
          flex flex-col
          ${slideClass} ${className}
        `}
      >
        {/* Заголовок с кнопкой закрытия */}
        {title && (
          <div className="flex flex-row justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Контент */}
        <div className="flex-1 flex-row overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </>
  );
}
