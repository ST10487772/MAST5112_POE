import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuContext } from "../context/MenuContext";
import { courses } from "../data/courses";

const AddItemScreen = ({ navigation }: any) => {
  const { addMenuItem } = useContext(MenuContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert("Error", "Please enter a valid price greater than 0.");
      return;
    }

    addMenuItem({ name: name.trim(), description: description.trim(), course, price: parsedPrice });

    // success feedback
    Alert.alert("Success", `${name.trim()} has been added to the menu.`, [
      {
        text: "OK",
        onPress: () => {
          // reset form and go home
          setName("");
          setDescription("");
          setCourse(courses[0]);
          setPrice("");
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>

      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Text style={{ marginTop: 6 }}>Course:</Text>
      <Picker selectedValue={course} onValueChange={(v: string) => setCourse(v as any)} style={styles.input}>
        {courses.map((c) => (
          <Picker.Item label={c} value={c} key={c} />
        ))}
      </Picker>

      <TextInput
        placeholder="Price (R)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />

      <Button title="Add Dish" onPress={handleAdd} disabled={!name || !description || !price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginVertical: 8, borderRadius: 6 },
});

export default AddItemScreen;
