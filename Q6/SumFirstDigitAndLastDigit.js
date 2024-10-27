import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function SumFirstDigitAndLastDigit() {
  const [number, setNumber] = useState('');
  const [length, setLength] = useState(0);
  const [sumOfTwoDigits, setSumOfTwoDigits] = useState(0);

  useEffect(() => {
    console.log('number ' + number);
    setLength(number.length);
  }, [number]);

  useEffect(() => {
    console.log('length ' + length);
    if (length === 1) {
      setSumOfTwoDigits(parseInt(number));
    } else if (length === 0) {
      setSumOfTwoDigits(0);
    } else {
      const firstDigit = parseInt(number / 10 ** (length - 1));
      const secondDigit = parseInt(number % 10);
      setSumOfTwoDigits(firstDigit + secondDigit);
    }
  }, [length]);

  const handleOnChangeText = value => {
    setNumber(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter a number (more than one digit)</Text>
      <TextInput
        onChangeText={handleOnChangeText}
        keyboardType="numeric"
        placeholder="enter number"
        style={styles.textBox}
        maxLength={16}
      />
      <Text style={styles.resultTitle}>
        The sum of first and last digits is
      </Text>
      <Text style={styles.result}>{sumOfTwoDigits}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '2.5%',
  },
  title: {
    fontSize: 20,
    fontWeight: '650',
    color: '#000',
  },
  textBox: {
    marginTop: '2%',
    borderWidth: 1,
    borderColor: 'pink',
    fontSize: 20,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: '700',
    paddingTop: '3%',
    textAlign: 'center',
  },
  result: {
    fontSize: 24,
    fontWeight: '700',

    textAlign: 'center',
  },
});
