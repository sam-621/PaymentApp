import React from 'react';
import '../../style/container/Plans.css';

import { PlanData } from '../../utils/Plans';
import { PlanCard } from '../molecules';

const Plans = () => {
  return (
    <section className="Plans">
      {PlanData.map((plan, index) => {
        return (
          <PlanCard
            AllowedUsers={plan.usersAllowed}
            Cost={plan.price}
            Plan={plan.plan}
            Primary={plan.primary}
            SendUp={plan.sendUp}
            Storage={plan.storage}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Plans;
