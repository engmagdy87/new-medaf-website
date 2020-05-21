import React, { Fragment, useState, useEffect, Suspense } from 'react';
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
const News = React.lazy(() => import('./views/containers/News'));

function App() {
  const step = 25;
  const maximumValue = 100;
  const speedFactor = 50;
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

  const renderContent = () => {
    // if (isLoading) return <SplashScreen value={spinnerValue} />;
    // else
    return (
      <div className="app-wrapper">
        <Header />
        <Home />
        <About />
        <Approach />
        <Team />
        <Business />
        <News />
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
