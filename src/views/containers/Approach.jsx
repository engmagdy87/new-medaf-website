import React from 'react';
import ApproachCard from '../components/approach/ApproachCard.jsx';
import ApproachData from '../../assets/data/approach.js';
import MEDAFLogo from '../../assets/images/medaf-icon-white.png';
import '../../assets/styles/containers/approach.scss';
const Img = React.lazy(() => import('../shared/Img'));

export default function Approach() {
  return (
    <div id="approach" className="wrapper approach-wrapper">
      <Img src={MEDAFLogo} alt="medaf logo" />
      {ApproachData.map((card) => (
        <ApproachCard key={card.id} cardId={card.id + 1} card={card} />
      ))}
    </div>
  );
}
