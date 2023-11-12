import React from 'react';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';
import {StyleSheet, View} from 'react-native';

const HomePage: React.FC = () => {
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  return (
    <View style={styles.container}>
      <Canvas style={{width, height}}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={width - r} cy={r} r={r} color="magenta" />
          <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#74b9ff',
    padding: 25,
    fontSize: 20,
    color: 'white',
    margin: 10,
  },
});
