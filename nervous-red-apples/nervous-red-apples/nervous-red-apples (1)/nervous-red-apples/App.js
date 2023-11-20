import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const obesityLevel = (bmi) => {
    if (bmi < 18.5) {
      return 'Cân nặng thấp (gầy)';
    } else if (bmi > 18.5 && bmi < 24.9) {
      return 'Bình thường';
    } else if (bmi == 25){
      return 'Thừa cân'; }
      else if (  bmi > 25 && bmi <29.9) {
      return 'Tiền béo phì'; 
    } else if (  bmi >30 && bmi <34.9) {
      return 'Béo phì I'; 
    } else if (  bmi>35 && bmi < 39.9) {
      return 'Béo phì II'; 
    }
     else {
      return 'Béo phì III';
    }
  };

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState(0);
  const [obesityLevelText, setObesityLevelText] = useState("");

  const computeBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmi = weightInKg / (heightInM * heightInM);
    setBMI(bmi);
    setObesityLevelText(obesityLevel(bmi));
  };

  const clearInputs = () => {
    setWeight("");
    setHeight("");
    setBMI(0);
    setObesityLevelText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (KG)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (CM)</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={computeBMI}>
          <Text style={styles.buttonText}>Tính</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={clearInputs}>
          <Text style={styles.buttonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>BMI: {BMI.toFixed(2)}</Text>
      <Text style={styles.obesityLevel}> Tình trạng phân loại: {obesityLevelText}</Text>
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
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "#000",
  },

  input: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },

  button: {
    width: "40%",
    height: 40,
    backgroundColor: "#006600",
    color: "#ccc",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  clearButton: {
    width: "40%",
    height: 40,
    backgroundColor: "#ff0000",
    color: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  result: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },

});

export default BMICalculator;