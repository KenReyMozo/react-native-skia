/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Canvas, Circle, Group, Paint, vec} from '@shopify/react-native-skia';
import { StyleSheet, Text, View } from 'react-native';

const width = 256;
const height = 256;

const PaintingPage : React.FC = () => {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;
  return (
    <View style={styles.container}>
        <Canvas style={{width, height}}>
        <Circle c={c} r={r} color="red">
            {/* <Paint color="lightblue" /> */}
            <Paint color="blue" style="stroke" strokeWidth={strokeWidth} />
            {/* <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} /> */}
        </Circle>
        </Canvas>
        <Text>
            Sets the geometry drawn at the corners of strokes. Values can be bevel, miter, or round.
        </Text>
        <Canvas style={{ width, height }}>
            {/*
            <Group opacity={0.5}>
                <Circle c={c} r={r / 2} color="red" />
                <Circle
                c={c}
                r={r / 2}
                color="lightblue"
                style="stroke"
                strokeWidth={strokeWidth * 2}
                />
                <Circle
                c={c}
                r={r / 3}
                color="mint"
                style="stroke"
                strokeWidth={strokeWidth / 2}
                />
            </Group>
             */}
        </Canvas>
    </View>
  );
};

export default PaintingPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

