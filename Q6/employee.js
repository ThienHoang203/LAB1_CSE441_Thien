import { useState } from "react";
import React from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import styles from "./style";
const Employee =() => {
    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState(0);
    const [ occupation, setOccupation ] = useState("");

    return (
        <ScrollView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Your Full Name: {name}</Text>
                <TextInput 
                    onChangeText={(value) => {setName(value)}}
                    style={styles.input}
                    autoCapitalize="words"
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Your Age: {age}</Text>
                <TextInput 
                    onChangeText={(value) => {setAge(value)}}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={3}  
                    cursorColor={"pink"}

                />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Your Occupation: {occupation}</Text>
                <TextInput 
                    onChangeText={(value) => {setOccupation(value)}}
                    style={styles.input}                
                />
            </View>
        </ScrollView>
    );
};

export default Employee;