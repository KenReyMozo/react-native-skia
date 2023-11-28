import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>; // Adjust 'any' based on your navigation stack
};

const SamplePage: React.FC<HomeScreenProps> = props => {
  const [list] = useState([
    {name: 'Home', id: 'Home'},
    {name: 'Painting', id: 'Painting'},
    // {name: 'Group', id: 'Group'},
    {name: 'Sample0', id: 'Sample1'},
    {name: 'Sample1', id: 'Sample2'},
  ]);

  const pressHandler = (id: string) => {
    props.navigation.navigate(id);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <FlatList
        numColumns={2}
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SamplePage;

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
