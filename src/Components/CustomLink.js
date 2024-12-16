import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransitionContext } from "../context/TransitionContext";

const CustomLink = ({ to, children, className, ...rest }) => {
  const navigate = useNavigate();
  const { setNextPath, setIsAnimating, setAnimationDone } =
    useTransitionContext();

  const handleClick = (e) => {
    e.preventDefault();

    setNextPath(to);
    setIsAnimating(true);

    setTimeout(() => {
      navigate(to);
      setIsAnimating(false);
      setAnimationDone(true);
    }, 2000); // Match animation duration
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};

export default CustomLink;
