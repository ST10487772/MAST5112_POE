import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuProvider } from "./src/context/MenuContext";
import HomeScreen from "./src/screens/HomeScreen";
import AddItemScreen from "./src/screens/AddItemScreen";
import FilterScreen from "./src/screens/FilterScreen";
import MenuDetailsScreen from "./src/screens/MenuDetailsScreen";

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
    primary: "#E53935",
  },
};

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Chef Menu" }} />
          <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: "Add New Dish" }} />
          <Stack.Screen name="Filter" component={FilterScreen} options={{ title: "Filter Menu" }} />
          <Stack.Screen name="Details" component={MenuDetailsScreen} options={{ title: "Dish Details" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
