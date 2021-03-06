import React from 'react';
import '../../assets/styles/containers/news.scss';
import { isDeviceSmart } from '../../helpers/DetectIsDeviceSmart.js';
const NewsCards = React.lazy(() => import('../components/news/NewsCards'));
const GroupSlider = React.lazy(() => import('../components/news/GroupSlider'));

export default function News() {
  const renderContent = () => {
    if (isDeviceSmart()) return <GroupSlider />;
    return <NewsCards />;
  };

  return (
    <div id="media" className="wrapper news-wrapper">
      {/* <h1>LATEST NEWS</h1> */}
      {renderContent()}
    </div>
  );
}
