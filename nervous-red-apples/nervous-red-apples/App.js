import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(0);

  const computeBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmi = weightInKg / (heightInM * heightInM);
    setBMI(bmi);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}> Weight (KG)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}> Height (CM)</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
      </View>
      <Text style={styles.result}>BMI: {BMI.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={computeBMI}>
        <Text style={styles.buttonText}> Compule </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5D4FF",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#black",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "50%",
    height: 40,
    marginTop: 20,
    backgroundColor: "green",
    color: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
});

export default BMICalculator;