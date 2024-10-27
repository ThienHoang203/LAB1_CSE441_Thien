import {useState} from 'react';
import React from 'react';
import {Text, TextInput, View, ScrollView, Button, Alert} from 'react-native';
import styles from './style';
const Employee = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [occupation, setOccupation] = useState('');

  const handleUpdate = () => {
    console.log('name: ' + name);
    console.log('age: ' + age);
    console.log('occupation: ' + occupation);
    if (
      name === '' ||
      age <= 0 ||
      !Number.isInteger(age) ||
      occupation === ''
    ) {
      return Alert.alert("You've entered wrong information!");
    }
    return Alert.alert('Successful!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Your Full Name: {name}</Text>
        <TextInput
          onChangeText={value => {
            setName(value);
          }}
          style={styles.input}
          autoCapitalize="words"
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Your Age: {age}</Text>
        <TextInput
          onChangeText={value => {
            setAge(value);
          }}
          style={styles.input}
          keyboardType="numeric"
          maxLength={3}
          cursorColor={'pink'}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Your Occupation: {occupation}</Text>
        <TextInput
          onChangeText={value => {
            setOccupation(value);
          }}
          style={styles.input}
        />
      </View>
      <Button title="Update" onPress={handleUpdate} />
    </ScrollView>
  );
};

export default Employee;
