import React, { useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuContext } from "../context/MenuContext";
import { courses } from "../data/courses";

const FilterScreen = () => {
  const { menu } = useContext(MenuContext);
  const courseOptions = ["All", ...courses];
  const [selectedCourse, setSelectedCourse] = useState(courseOptions[0]);

  const filtered =
    selectedCourse === "All" ? menu : menu.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>

      {Platform.OS === "web" ? (
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{ ...styles.input, height: 40 }}
        >
          {courseOptions.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      ) : (
        <Picker
          selectedValue={selectedCourse}
          onValueChange={(itemValue: string) => setSelectedCourse(itemValue)}
          style={styles.input}
        >
          {courseOptions.map((c) => (
            <Picker.Item label={c} value={c} key={c} />
          ))}
        </Picker>
      )}

      {filtered.length === 0 ? (
        <Text style={styles.emptyText}>No dishes found for this category.</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>R {item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: { backgroundColor: "#eee", padding: 10, marginVertical: 5, borderRadius: 8 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10 },
  name: { fontWeight: "bold" },
  emptyText: { textAlign: "center", marginTop: 20, color: "#777" },
});

export default FilterScreen;
