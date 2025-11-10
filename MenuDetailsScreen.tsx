import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { MenuContext } from "../context/MenuContext";

export default function MenuDetailsScreen({ route, navigation }: any) {
  const { item } = route.params;
  const { removeItem } = useContext(MenuContext);

  const handleRemove = () => {
    Alert.alert("Confirm", "Remove this dish?", [
      { text: "Cancel" },
      {
        text: "Yes",
        onPress: () => {
          removeItem(item.id);
          Alert.alert("Removed", `${item.name} has been removed.`);
          navigation.navigate("Home");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.infoLabel}>Description:</Text>
      <Text style={styles.info}>{item.description}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Course:</Text>
        <Text style={styles.info}>{item.course}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Price:</Text>
        <Text style={styles.info}>R {item.price}</Text>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#1976D2" }]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>⬅️ Back to Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#E53935" }]} onPress={handleRemove}>
        <Text style={styles.buttonText}>🗑️ Remove Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  infoRow: { flexDirection: "row", marginTop: 8 },
  infoLabel: { fontWeight: "bold", marginTop: 8 },
  info: { marginLeft: 8, marginTop: 8 },
  button: { padding: 12, borderRadius: 8, marginTop: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
