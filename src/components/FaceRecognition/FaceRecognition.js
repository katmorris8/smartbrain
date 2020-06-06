import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma4'>
      <img id='input-image' src={imageUrl} alt='' width='500px' height='auto' />
    </div>
  )
}

export default FaceRecognition;