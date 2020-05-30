import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma4 w-50'>
      <img src={imageUrl} alt='import' />
    </div>
  )
}

export default FaceRecognition;