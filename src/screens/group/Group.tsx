/* eslint-disable prettier/prettier */
import React from 'react';
import {Canvas, Circle, Fill, Group, Image, RoundedRect, Skia, useAnimatedImageValue, useImage} from '@shopify/react-native-skia';
import { StyleSheet, View } from 'react-native';

const width = 256;
const height = 256;

const GroupPage: React.FC = () => {
  const r = 128;

  const image = useImage(require('../../../assets/birdFlying.gif'));
  const star = Skia.Path.MakeFromSVGString(
    "M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
  )!;

  return (
    <View style={styles.container}>
        <Canvas style={{width, height}}>
            <Circle cx={r} cy={r} r={r} color="#51AFED" />
            {/* The paint is inherited by the following sibling and descendants. */}
            <Group color="lightblue" style="stroke" strokeWidth={10}>
                <Circle cx={r} cy={r} r={r / 2} />
                <Circle cx={r} cy={r} r={r / 3} color="white" />
            </Group>
        </Canvas>
        <Canvas style={{width, height}}>
            <Fill color="#e8f4f8" />
            <Group
                color="lightblue"
                origin={{ x: 122, y: 128 }}
                transform={[{ skewX: Math.PI / 6 }]}
            >
                <RoundedRect x={64} y={64} width={128} height={128} r={10} />
            </Group>
        </Canvas>
        <Canvas style={{width, height}}>
            <Group clip={star}>
                <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
            </Group>
        </Canvas>
    </View>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});