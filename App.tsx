import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//icons
import { AntDesign } from "@expo/vector-icons";
//screen
import Home from "./src/screen/Home";

//NAVIGATION
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Character from "./src/components/Character/Character";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{}} />
          <Stack.Screen name="Character" component={Character} options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
