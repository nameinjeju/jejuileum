import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const RouteChangeTracker = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);

  return <>{children}</>;
};

export default RouteChangeTracker;
