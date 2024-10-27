import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function MinDifBetweenThreeNums() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);

  const handleCompare = () => {
    const cmp1 = Math.abs(firstNumber - secondNumber);
    const cmp2 = Math.abs(secondNumber - thirdNumber);
    const cmp3 = Math.abs(thirdNumber - firstNumber);
    const result = Math.min(Math.min(cmp1, cmp2), cmp3);
    return Alert.alert(
      'Minimum Difference Between three numbers is ' + String(result),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>
          Enter first number <Text style={styles.number}>{firstNumber}</Text>
        </Text>
        <TextInput
          keyboardType="numeric"
          placeholder="1st Number"
          style={styles.input}
          onChangeText={value => setFirstNumber(value)}
          maxLength={16}
        />
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>
          Enter second number <Text style={styles.number}>{secondNumber}</Text>
        </Text>
        <TextInput
          keyboardType="numeric"
          placeholder="2nd Number"
          style={styles.input}
          onChangeText={value => setSecondNumber(value)}
          maxLength={16}
        />
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.title}>
          Enter third number <Text style={styles.number}>{thirdNumber}</Text>
        </Text>
        <TextInput
          keyboardType="numeric"
          placeholder="3rd Number"
          style={styles.input}
          onChangeText={value => setThirdNumber(value)}
          maxLength={16}
        />
      </View>
      <Button title="Compare" onPress={handleCompare} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '3%',
  },
  numberContainer: {
    paddingVertical: '3%',
  },
  title: {
    fontSize: 20,
    fontWeight: '650',
    color: '#000',
  },
  input: {
    fontSize: 18,
    fontWeight: '650',
    color: '#000',
    marginLeft: '3%',
    borderColor: 'pink',
    borderWidth: 1,
    marginTop: '2%',
  },
  number: {
    color: 'green',
  },
});
