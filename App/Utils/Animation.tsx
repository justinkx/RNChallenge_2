import {UIManager, LayoutAnimation, Platform} from 'react-native';

const CONFIG = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
  },
};
const infoConfig = {
  duration: 350,
  create: {
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleXY,
  },
  delete: {
    type: LayoutAnimation.Types.easeOut,
    duration: 300,
    property: LayoutAnimation.Properties.opacity,
  },
};
export function enableAnimation() {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export function animate() {
  LayoutAnimation.configureNext(CONFIG);
}
export function infoAnimate() {
  LayoutAnimation.configureNext(infoConfig);
}
