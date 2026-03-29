import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const DropdownContext = createContext(null);

export function DropdownProvider({ children }) {
  const [activeId, setActiveId] = useState(null);
  const [activityTick, setActivityTick] = useState(0);

  const closeAll = useCallback(() => {
    setActiveId(null);
  }, []);

  const openDropdown = useCallback((id) => {
    setActiveId(id);
    setActivityTick((tick) => tick + 1);
  }, []);

  const closeDropdown = useCallback((id) => {
    setActiveId((current) => (current === id ? null : current));
  }, []);

  const toggleDropdown = useCallback((id) => {
    setActiveId((current) => (current === id ? null : id));
    setActivityTick((tick) => tick + 1);
  }, []);

  const notifyActivity = useCallback(() => {
    setActivityTick((tick) => tick + 1);
  }, []);

  useEffect(() => {
    if (!activeId) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveId(null);
    }, 5000);

    function handleScrollLike() {
      setActiveId(null);
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setActiveId(null);
      }
    }

    window.addEventListener('scroll', handleScrollLike, true);
    window.addEventListener('wheel', handleScrollLike, { passive: true });
    window.addEventListener('touchmove', handleScrollLike, { passive: true });
    window.addEventListener('resize', handleScrollLike);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScrollLike, true);
      window.removeEventListener('wheel', handleScrollLike);
      window.removeEventListener('touchmove', handleScrollLike);
      window.removeEventListener('resize', handleScrollLike);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeId, activityTick]);

  const value = useMemo(
    () => ({
      activeId,
      closeAll,
      openDropdown,
      closeDropdown,
      toggleDropdown,
      notifyActivity,
    }),
    [activeId, closeAll, openDropdown, closeDropdown, toggleDropdown, notifyActivity],
  );

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
}

export function useDropdowns() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('useDropdowns must be used within DropdownProvider');
  }

  return context;
}
