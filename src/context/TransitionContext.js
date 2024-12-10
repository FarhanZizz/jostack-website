import React, { createContext, useState, useContext } from "react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [nextPath, setNextPath] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <TransitionContext.Provider
      value={{
        nextPath,
        setNextPath,
        isAnimating,
        setIsAnimating,
        animationDone,
        setAnimationDone,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => useContext(TransitionContext);
