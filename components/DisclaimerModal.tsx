import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  const { t } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex justify-center items-center p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700 flex-shrink-0">
          <h2 className="text-2xl font-bold dark:text-white">{t('disclaimer.title')}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-3xl leading-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="overflow-y-auto text-gray-700 dark:text-gray-300 space-y-4 p-6">
            <p>{t('disclaimer.p1')}</p>
            <p>{t('disclaimer.p2')}</p>
            <p>{t('disclaimer.p3')}</p>
            <p>{t('disclaimer.p4')}</p>
        </div>
        <div className="mt-auto p-4 border-t dark:border-gray-700 text-right flex-shrink-0">
            <button 
                onClick={onClose}
                className="button-like bg-brand-indigo text-white px-6 py-2 rounded-md font-semibold hover:bg-brand-indigo-light transition-colors"
            >
                {t('disclaimer.close')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;