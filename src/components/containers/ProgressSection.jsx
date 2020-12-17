import React from 'react';
import '../../style/container/ProgressSection.css';

import { ProgressBar } from '../molecules/';

const ProgressSection = () => {
  return (
    <section className="ProgressSection">
      <ProgressBar isFirstFill={true} isSecondFill={true} isThirdFill={true} />
    </section>
  );
};

export default ProgressSection;
