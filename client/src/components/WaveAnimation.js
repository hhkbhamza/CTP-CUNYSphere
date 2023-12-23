import React from 'react';
import Wave from 'react-wavify';

const WaveAnimation = () => {
  const waveOptions = {
    height: 20,
    amplitude: 20,
    speed: 0.15,
    points: 3
  };

  return (
    <Wave
      fill='#f79902'
      paused={false}
      style={{ display: 'flex' }}
      options={waveOptions}
    />
  );
};

export default WaveAnimation;