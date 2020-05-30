import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma4 w-60'>
      <img src={imageUrl} alt='' />
    </div>
  )
}

export default FaceRecognition;