import React from 'react';
import '../../style/molecules/SuccessMessage.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SuccessIcon from '../../img/Success.svg';

const SuccessMessage = () => {
  const { planName } = useParams();
  return (
    <main className="SuccessMessage">
      <div className="SuccessMessage-img">
        <img
          src={SuccessIcon}
          alt="Success icon"
          width="100px"
          height="100px"
        />
      </div>
      <p>
        Pay completed, now you have the <strong>{planName}</strong> plan
      </p>
      <Link to="/">Return to home page</Link>
    </main>
  );
};

export default SuccessMessage;
