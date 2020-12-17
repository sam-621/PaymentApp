import React from 'react';

import { ProgressBar } from '../molecules/';

const ProgressSection = () => {
  return (
    <section>
      <ProgressBar isFirstFill={true} isSecondFill={true} isThirdFill={true} />
    </section>
  );
};

export default ProgressSection;
