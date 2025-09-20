import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const SecondWaves = ({ color, layerHeight }) => {
  const wavePath = `M 0,0 L 0,${layerHeight - 90} 
       Q ${width * 0.25},${layerHeight} ${width * 0.5},${layerHeight - 20}
       T ${width},${layerHeight - 20} L ${width},0 Z`;

  return (
    <Svg height={layerHeight} width={width} style={styles.svg}>
      <Path d={wavePath} fill={color} />
    </Svg>
  );
};

const ThirdWaves = ({ color, layerHeight }) => {
  const wavePath = `M 0,0 L 0,${layerHeight - 25} 
       Q ${width * 0.25},${layerHeight} ${width * 0.5},${layerHeight - 30}
       T ${width},${layerHeight - 25} L ${width},0 Z`;

  return (
    <Svg height={layerHeight} width={width} style={styles.svg}>
      <Path d={wavePath} fill={color} />
    </Svg>
  );
};

export default function LoginSignupBackground({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.secondLayer}>
        <SecondWaves color="#CFFFE5" layerHeight={height / 4} />
      </View>

      <View style={styles.thirdLayer}>
        <ThirdWaves color="#FFBE98" layerHeight={height / 5} />
      </View>

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', 
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  secondLayer: {
    height: height / 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  thirdLayer: {
    height: height / 5,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  content: {
    flex: 1,
    zIndex: 3,
    position: 'relative',
    paddingTop: height / 6, 
  },
});
