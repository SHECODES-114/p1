
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
      className="fixed left-6 top-24 z-40 bg-regeni-teal text-white p-2 rounded-full shadow-lg hover:bg-regeni-green transition-all"
      aria-label="Go back"
      title="Go back to previous page"
    >
      <ArrowLeft size={24} />
    </button>
  );
};

export default BackButton;
