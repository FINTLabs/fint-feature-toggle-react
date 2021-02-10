import axios from 'axios';
import FeatureToggles from './model';

const FeatureToogleApi = () => {
  const getFeatures = () => axios.get<FeatureToggles>('/api/feature');

  return { getFeatures };
};

export default FeatureToogleApi;
