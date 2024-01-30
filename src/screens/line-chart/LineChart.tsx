/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import {
  Canvas,
  Line,
  Path,
  runTiming,
  Skia,
  SkPath,
  useComputedValue,
  useValue,
  vec,
} from '@shopify/react-native-skia';

import {animatedData, DataPoint, firebaseData, firebaseDataVar, originalData} from './Data';
import {curveBasis, line, scaleLinear, scaleTime} from 'd3';
import {Easing, View, Pressable, Text, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

interface GraphData {
  min: number;
  max: number;
  curve: SkPath;
}

export const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });


export const LineChart = () => {


  useEffect(() => {
    // Reference to the Firestore collection
    const collectionRef = firestore().collection('test/skia/chart');


    // Subscribe to real-time updates on the collection
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        date: doc.id,
        ...doc.data(),
      }));

      const assertedData = data as unknown as DataPoint[];
      setData(assertedData);
      // transitionStart(transition.current === 0 ? 1 : 0);
    });

    return () => unsubscribe();
  }, []);

  const oldState = useValue(firebaseData);
  const newState = useValue(firebaseDataVar);
  const transVal = useValue(1);

  const setData = async (data: DataPoint[]) => {
    const sss = newState.current;
    oldState.current = sss;
    newState.current = data;
  
    await delay(1000);
    transitionStart(1);
  }

  const addDoc = (id: string, value: number) => {
    const docu = firestore().doc('test/skia/chart/'+id);
    docu.set({
      value,
    })
  }

  const transition = useValue(1);
  const state = useValue({
    current: 0,
    next: 1,
  });

  const GRAPH_HEIGHT = 400;
  const GRAPH_WIDTH = 300;

  const makeGraph = (data: DataPoint[]): GraphData => {
    const max = Math.max(...data.map(val => val.value));
    const min = Math.min(...data.map(val => val.value));
    const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

    const x = scaleTime()
      .domain([new Date(2000, 1, 1), new Date(2000, 1, 8)])
      .range([10, GRAPH_WIDTH - 10]);

    const curvedLine = line<DataPoint>()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.value))
      .curve(curveBasis)(data);

    const skPath = Skia.Path.MakeFromSVGString(curvedLine!);

    return {
      max,
      min,
      curve: skPath!,
    };
  };

  const transitionStart = (end: number) => {
    state.current = {
      current: end,
      next: state.current.current,
    };
    transition.current = 0;
    runTiming(transition, 1, {
      duration: 750,
      easing: Easing.inOut(Easing.cubic),
    });
  };


  const path = useComputedValue(() => {

    const oldGraph = makeGraph(oldState.current);
    const newGraph = makeGraph(newState.current);


    const start = oldGraph.curve;
    const end = newGraph.curve;
    const result = end.interpolate(start, transition.current);
    return result?.toSVGString() ?? makeGraph(firebaseData).curve.toSVGString();
  }, [transition]);

  return (
    <View style={styles.container}>
      <Canvas
        style={{
          width: GRAPH_WIDTH,
          height: GRAPH_HEIGHT,
        }}>
        <Line
          p1={vec(10, 130)}
          p2={vec(400, 130)}
          color="lightgrey"
          style="stroke"
          strokeWidth={1}
        />
        <Line
          p1={vec(10, 250)}
          p2={vec(400, 250)}
          color="lightgrey"
          style="stroke"
          strokeWidth={1}
        />
        <Line
          p1={vec(10, 370)}
          p2={vec(400, 370)}
          color="lightgrey"
          style="stroke"
          strokeWidth={1}
        />
        <Path style="stroke" path={path} strokeWidth={4} color="#6231ff" />
      </Canvas>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => transitionStart(0)}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Graph 1</Text>
        </Pressable>
        <Pressable
          onPress={() => transitionStart(1)}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Graph 2</Text>
        </Pressable>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    marginRight: 20,
    backgroundColor: '#6231ff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
  test: {
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
  }
});
