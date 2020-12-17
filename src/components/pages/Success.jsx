import React from 'react';

import { ProgressSection } from '../containers';
import { SuccessMessage } from '../molecules';
const Success = () => {
  return (
    <>
      <ProgressSection
        isFirstFill={true}
        isSecondFill={true}
        isThirdFill={true}
      />
      <SuccessMessage />
    </>
  );
};

export default Success;
