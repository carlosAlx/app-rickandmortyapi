import React from "react";

import { StyleSheet, Text, View } from "react-native";
import CharacterPage from "../components/Character/Charactes";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Rick and Morty</Text>
      <CharacterPage />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
