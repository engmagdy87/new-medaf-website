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

function App() {
  const step = 25;
  const [isLoading, setIsLoading] = useState(true);
  const [spinnerValue, setSpinnerValue] = useState(0);

  useEffect(() => {
    let interval;

    if (spinnerValue !== 100)
      interval = setInterval(() => {
        setSpinnerValue(spinnerValue + step);
        clearInterval(interval);
      }, step * 100);

    if (spinnerValue === 100) setIsLoading(false);
  }, [spinnerValue]);

  const renderContent = () => {
    if (isLoading) return <SplashScreen value={spinnerValue} />;
    else
      return (
        <div className="app-wrapper">
          <Header />
          <Home />
          <About />
          <Approach />
          <Team />
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
