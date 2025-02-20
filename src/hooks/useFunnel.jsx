import React, { useState } from "react";
import Move from "../components/common/Move";

export const useFunnel = (initialStep, steps) => {
  const [currentStep, setStep] = useState(initialStep);

  const Step = ({ children }) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }) => {
    const targetStep = React.Children.toArray(children).find(
      (childStep) => childStep.props.name === currentStep
    );

    const nextClickHandler = () => {
      const currentIndex = steps.indexOf(currentStep);
      if (currentIndex < steps.length - 1) {
        setStep(steps[currentIndex + 1]);
      }
    };

    const prevClickHandler = () => {
      const currentIndex = steps.indexOf(currentStep);
      if (currentIndex > 0) {
        setStep(steps[currentIndex - 1]);
      }
    };

    return (
      <>
        {targetStep}
        <Move onPrev={prevClickHandler} onNext={nextClickHandler} />
      </>
    );
  };

  return { Funnel, Step, setStep, currentStep };
};

export default useFunnel;
