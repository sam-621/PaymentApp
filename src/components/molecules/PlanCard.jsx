import React from 'react';
import '../../style/molecules/PlanCard.css';
import { Link } from 'react-router-dom';

const PlanCard = ({ Primary, Plan, Cost, Storage, AllowedUsers, SendUp }) => {
  return (
    <article className={Primary ? 'PlanCard-Primary' : 'PlanCard-Secondary'}>
      <h1>{Plan}</h1>
      <h2 className="PlanCard-Primary-Cost">${Cost}</h2>
      <hr />
      <p>{Storage} Storage</p>
      <hr />
      <p>{AllowedUsers} Users Allowed</p>
      <hr />
      <p>Send up to{SendUp}</p>
      <hr />
      <div
        className={
          Primary ? 'PlanCard-Link-Primary' : 'PlanCard-Link-Secondary'
        }
      >
        <Link to="/">Buy</Link>
      </div>
    </article>
  );
};

export default PlanCard;
