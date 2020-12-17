import React from 'react';

import { ProgressSection, Plans } from '../containers';

const Main = () => {
  return (
    <>
      <ProgressSection isFirstFill={true} />
      <Plans />
    </>
  );
};

export default Main;
