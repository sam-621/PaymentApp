import React from 'react';
import { Link } from 'react-router-dom';

const PlanCard = ({ Primary, Plan, Cost, Storage, AllowedUsers, SendUp }) => {
  return (
    <article className={Primary ? 'planCard-Primary' : 'PlanCard-Secondary'}>
      <h1>{Plan}</h1>
      <h2>{Cost}</h2>
      <hr />
      <p>{Storage} Storage</p>
      <hr />
      <p>{AllowedUsers} Users Allowed</p>
      <hr />
      <p>Send up to{SendUp}</p>
      <hr />
      <div>
        <Link>Buy</Link>
      </div>
    </article>
  );
};

export default PlanCard;
