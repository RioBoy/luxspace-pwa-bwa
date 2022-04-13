import { useState, useEffect } from 'react';

export default function useOfflineStatus(initalState = false) {
  const [stateOffline, setStateOffline] = useState(initalState);

  const offline = useEffect(() => {
    function handleUseOfflineStatus() {
      setStateOffline(!navigator.onLine);
    }

    handleUseOfflineStatus();
    window.addEventListener('online', handleUseOfflineStatus);
    window.addEventListener('offline', handleUseOfflineStatus);

    return () => {
      window.removeEventListener('online', handleUseOfflineStatus);
      window.removeEventListener('offline', handleUseOfflineStatus);
    };
  }, [stateOffline]);

  return [stateOffline, offline];
}
