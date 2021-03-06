import React, { Fragment, useState, useEffect, Suspense } from 'react';
import whatIsTheSectionAppearInViewport from './helpers/DetectSectionInViewportHelper';
// import isDeviceSmart from './helpers/DetectIsDeviceSmart';
import './assets/styles/app.scss';

const SplashScreen = React.lazy(() =>
  import('./views/components/loading/SplashScreen')
);
const Header = React.lazy(() => import('./views/shared/Header'));
const Home = React.lazy(() => import('./views/containers/Home'));
const About = React.lazy(() => import('./views/containers/About'));
const Approach = React.lazy(() => import('./views/containers/Approach'));
const Team = React.lazy(() => import('./views/containers/Team'));
const Business = React.lazy(() => import('./views/containers/Business'));
// const News = React.lazy(() => import('./views/containers/News'));
const Contact = React.lazy(() => import('./views/containers/Contact'));
const BackToBusiness = React.lazy(() =>
  import('./views/shared/BackToBusiness')
);
// const UnderConstruction = React.lazy(() =>
//   import('./views/containers/UnderConstruction')
// );

function App() {
  const step = 20;
  const maximumValue = 100;
  const speedFactor = 200;
  const [activeItem, setActiveItem] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [spinnerValue, setSpinnerValue] = useState(0);

  useEffect(() => {
    let interval;

    if (spinnerValue !== maximumValue)
      interval = setInterval(() => {
        setSpinnerValue(spinnerValue + step);
        clearInterval(interval);
      }, step * speedFactor);

    if (spinnerValue === maximumValue) setIsLoading(false);
  }, [spinnerValue]);

  const setHeaderActiveItem = () => {
    const currentActiveItem = whatIsTheSectionAppearInViewport();
    if (currentActiveItem !== activeItem) setActiveItem(currentActiveItem);
  };

  const renderContent = () => {
    if (isLoading)
      return (
        <SplashScreen
          value={spinnerValue}
          step={step}
          totalTime={maximumValue * speedFactor}
        />
      );
    else
      return (
        <div id="app" className="app-wrapper" onScroll={setHeaderActiveItem}>
          <Header activeItem={activeItem} />
          <Home />
          <About />
          <Approach />
          <Team />
          <Business />
          {/* <News /> */}
          <Contact />
          <BackToBusiness activeItem={activeItem} />
        </div>
      );
  };

  return (
    <Fragment>
      <Suspense fallback={<span></span>}>{renderContent()}</Suspense>
    </Fragment>
  );
}

export default App;
