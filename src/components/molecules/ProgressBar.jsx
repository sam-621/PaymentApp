import React from 'react';
import '../../style/molecules/ProgressBar.css';

const ProgressBar = ({ isFirstFill, isSecondFill, isThirdFill }) => {
  return (
    <div className="ProgressBar">
      <div className={isFirstFill ? 'Fill' : ''}></div>
      <hr className={isFirstFill ? 'BarFill' : ''} />
      <div className={isSecondFill ? 'Fill' : ''}></div>
      <hr className={isSecondFill ? 'BarFill' : ''} />
      <div className={isThirdFill ? 'Fill' : ''}></div>
    </div>
  );
};

export default ProgressBar;
