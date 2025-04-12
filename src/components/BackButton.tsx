
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={goBack}
      className="fixed left-6 top-24 z-40 bg-white/80 backdrop-blur-sm text-regeni-teal border border-regeni-teal/20 p-2 rounded-full shadow-lg hover:bg-regeni-light transition-all"
      aria-label="Go back"
      title="Go back to previous page"
    >
      <ArrowLeft size={24} strokeWidth={1.5} />
    </button>
  );
};

export default BackButton;
