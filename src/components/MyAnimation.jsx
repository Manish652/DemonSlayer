import React from 'react';
import Lottie from 'lottie-react';


const MyAnimation = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MyAnimation;
