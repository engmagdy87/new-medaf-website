import React, { Fragment, useState, useEffect, Suspense } from 'react';
import './assets/styles/app.scss';
const SplashScreen = React.lazy(() => import('./views/components/Loading/SplashScreen'));
const Header = React.lazy(() => import('./views/components/Header'));

function App() {
  const step = 25;
  const [isLoading, setIsLoading] = useState(true)
  const [spinnerValue, setSpinnerValue] = useState(0)

  useEffect(() => {
    let interval;

    if (spinnerValue !== 100)
      interval = setInterval(() => {
        setSpinnerValue(spinnerValue + step);
        clearInterval(interval);
      }, step * 100);

    if (spinnerValue === 100)
      setIsLoading(false)

  }, [spinnerValue])

  const renderContent = () => {
    if (isLoading) return (<SplashScreen value={spinnerValue} />)
    else return (
      <Fragment>
        <Header />
      </Fragment>
    )
  }

  return (
    <div className="app-wrapper">
      <Suspense fallback={<span></span>}>
        {renderContent()}
      </Suspense>
    </div>
  );
}

export default App;
