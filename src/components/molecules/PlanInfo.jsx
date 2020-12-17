import React from 'react';
import '../../style/molecules/PlanInfo.css';

const PlanInfo = ({ plan, price }) => {
  return (
    <div className="PlanInfo">
      <div className="Plan-name">
        <h1>Plan selected</h1>
        <p>{plan}</p>
      </div>
      <div className="Plan-Price">
        <h1>Price</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default PlanInfo;
