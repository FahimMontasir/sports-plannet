import React from 'react';
import './DetailsHeading.css'

const DetailsHeading = ({ strLogo, strBanner }) => {
  return (
    <div className='detail-heading' style={{
      backgroundImage: `url(${strBanner})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%'
    }}>
      <img src={strLogo} alt="team log" />
    </div>
  );
};

export default DetailsHeading;