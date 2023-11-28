/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { Dimensions, Animated, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { Easing } from 'react-native-reanimated';

export default function Sample1() {

  const screenWidth = Dimensions.get('window').width;

  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 200,
          Math.random() * 100,
          Math.random() * 200,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 300,
        ],
      },
    ],
  });

  const handleDataChange = () => {
    setData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
        },
      ],
    });
    setDataProgress({
      labels: ['Swim', 'Bike', 'Run'], // optional
      data: [Math.random(),Math.random(),Math.random()],
    });
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const [dataProgress, setDataProgress] = useState({
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  });

  return (
    <ScrollView>
      <View>
      <Text>Bezier Line Chart</Text>
          <LineChart
            width={Dimensions.get('window').width}
            data={data}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={chartConfig}
            bezier
          />

      <Text>Line Chart</Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />

      <Text>Progress Ring</Text>
      <ProgressChart
        data={dataProgress}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <TouchableOpacity onPress={handleDataChange}>
        <Text style={styles.item}>RANDOM</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#0984e3',
    padding: 15,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
});