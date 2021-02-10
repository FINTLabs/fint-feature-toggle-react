# fint-feature-toggle-react
![CI](https://github.com/FINTLabs/fint-feature-toggle-react/workflows/CI/badge.svg)

A component to simplify feature toggling in frontend applications at Vigo/FINTLabs.


# Install
```shell
yarn add @fintlabs/fint-feature-toggle-react
```

# Usage
## Component
``` typescript jsx
<FeatureToggle feature='name of feature'>
    <NewFeature/>
</FeatureToggle>
```

## Hook
``` typescript jsx
const featureEnabled = useFeatureEnabled("name of feature");

if (featureEnabled) {
    // Run new feature
}
else {
    ...
}
```

> Created with https://tsdx.io/
