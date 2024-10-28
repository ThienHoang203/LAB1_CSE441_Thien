import React, {useState} from 'react';
import {
  ScrollView,
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  SafeAreaView,
} from 'react-native';

const renderItem = ({item}) => {
  return (
    <Text style={styles.result}>
      {item.id}) {item.value}
    </Text>
  );
};

const HailestoneSequence = () => {
  const [resultArray, setResultArray] = useState([]);
  const [number, setNumber] = useState(0);
  const handleBtn = () => {
    if (number <= 0) {
      return Alert.alert('wrong input');
    }
    let temp = [];
    var tempNumber = number;
    var count = 1;
    while (tempNumber !== 1) {
      if (tempNumber % 2 === 0) {
        tempNumber /= 2;
      } else {
        tempNumber = tempNumber * 3 + 1;
      }
      temp.push({value: tempNumber, id: count++});
    }
    setResultArray(temp);
    console.log(temp);
  };

  const handleOnEndEdit = event => {
    setNumber(event.nativeEvent.text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.title}>
          Enter a positive number: <Text style={styles.number}>{number}</Text>{' '}
        </Text>
        <TextInput
          onEndEditing={handleOnEndEdit}
          placeholder="positive number"
          keyboardType="numeric"
          maxLength={10}
          style={styles.inputContainer}
        />
      </View>
      <Button title="find Hailstone sequence" onPress={handleBtn} />

      <FlatList
        data={resultArray}
        renderItem={renderItem}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

export default HailestoneSequence;

const styles = StyleSheet.create({
  container: {
    padding: '1%',
  },
  inputArea: {
    padding: '3%',
  },
  title: {
    fontSize: 20,
    fontWeight: '650',
    color: '#000',
  },
  inputContainer: {
    borderColor: 'pink',
    borderWidth: 1,
    marginVertical: '2%',
  },
  number: {
    color: 'red',
  },
  list: {
    margin: '5%',
    paddingBottom: '10%',
  },
  result: {
    fontSize: 20,
    color: '#000',
    margin: '1%',
  },
});
