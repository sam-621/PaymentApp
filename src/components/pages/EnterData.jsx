import React from 'react';
import '../../style/pages/EnterData.css';
import { useParams } from 'react-router-dom';

import { ProgressSection, Payment } from '../containers';
import { PlanInfo } from '../molecules';
import { PlanData } from '../../utils/Plans';

const EnterData = () => {
  const { planName } = useParams();
  const plan = PlanData.filter((plan) => plan.plan === planName);
  return (
    <>
      <ProgressSection isFirstFill={true} isSecondFill={true} />
      <main className="EnterData-main">
        <PlanInfo plan={plan[0].plan} price={plan[0].price} />
        <Payment amount={plan[0].price} />
      </main>
    </>
  );
};

export default EnterData;
