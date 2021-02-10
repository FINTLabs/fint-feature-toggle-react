import * as React from 'react';
import useFeatureEnabled from './hooks';

interface Props {
  feature: string;
  children: React.ReactNode;
}

const FeatureToggle = ({ feature, children }: Props) => {
  const featureEnabled = useFeatureEnabled(feature);

  if (featureEnabled) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return <React.Fragment />;
};

export default FeatureToggle;
