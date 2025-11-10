import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import { MenuContext } from "../context/MenuContext";
import { courses } from "../data/courses";

const HomeScreen = ({ navigation }: any) => {
  const { menu, removeItem } = useContext(MenuContext);

  // compute averages per course
  const averages = courses.map((course) => {
    const items = menu.filter((m) => m.course === course);
    const avg = items.length === 0 ? 0 : items.reduce((s, it) => s + it.price, 0) / items.length;
    return { course, count: items.length, average: avg };
  });

  const totalValue = menu.reduce((s, it) => s + it.price, 0);

  const confirmRemove = (id: string, name: string) => {
    Alert.alert("Confirm", `Remove ${name}?`, [
      { text: "Cancel" },
      {
        text: "Yes",
        onPress: () => {
          removeItem(id);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Chef Menu</Text>
      <Text>Total Dishes: {menu.length}</Text>
      <Text>Total Value: R {totalValue.toFixed(2)}</Text>

      <View style={{ marginTop: 12, marginBottom: 8 }}>
        <Text style={{ fontWeight: "bold" }}>Average price per course:</Text>
        {averages.map((a) => (
          <Text key={a.course}>
            {a.course}: {a.count === 0 ? "—" : `R ${a.average.toFixed(2)} (${a.count})`}
          </Text>
        ))}
      </View>

      {menu.length === 0 ? (
        <Text style={styles.emptyText}>No dishes yet. Add your first dish!</Text>
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.course}>{item.course}</Text>
              <Text>{item.description}</Text>
              <Text>R {item.price}</Text>

              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
                <Button title="Details" onPress={() => navigation.navigate("Details", { item })} />
                <Button title="🗑️ Delete" color="#E53935" onPress={() => confirmRemove(item.id, item.name)} />
              </View>
            </View>
          )}
        />
      )}

      <View style={styles.buttons}>
        <Button title="➕ Add Dish" onPress={() => navigation.navigate("AddItem")} />
        <Button title="🔍 Filter Menu" onPress={() => navigation.navigate("Filter")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  card: { backgroundColor: "#f4f4f4", padding: 10, marginVertical: 5, borderRadius: 8 },
  name: { fontWeight: "bold" },
  course: { color: "#555", marginBottom: 3 },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  emptyText: { textAlign: "center", color: "#777", marginTop: 20, fontStyle: "italic" },
});

export default HomeScreen;
