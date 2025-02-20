import React, { useState, ReactElement, ReactNode } from "react";

export const useFunnel = (defaultStep) => {
  const [step, setStep] = useState(defaultStep);

  const Step = ({ children }) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step };
};

export default useFunnel;
