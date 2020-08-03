import React, { useRef } from 'react';
import { StyledCanvas } from './styledComponents';


const Canvas = ({ onClick }) => {

  const canvasRef = useRef(null);

  return(
    <StyledCanvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={onClick}
    />
  );
}

export { Canvas };
