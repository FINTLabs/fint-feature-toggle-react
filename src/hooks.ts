import { useEffect, useState } from 'react';
import FeatureToggleApi from './featureToogleApi';
import FeatureToggles from './model';
import { AxiosResponse } from 'axios';

const useFeatureEnabled = (feature: string): boolean => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    FeatureToggleApi()
      .getFeatures()
      .then((response: AxiosResponse<FeatureToggles>) =>
        setEnabled(response.data !== undefined ? response.data[feature] : false)
      );
  });

  return enabled;
};

export default useFeatureEnabled;
