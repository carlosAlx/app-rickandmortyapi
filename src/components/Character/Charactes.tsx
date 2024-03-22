import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useNavigation } from "@react-navigation/native";
import { useAllCharacters } from "../../features/character/hooks/useCharacter";
import { stylesGlobal } from "../../styles/stylesGrobal";

export default function CharacterPage() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const { data, error, isLoading } = useAllCharacters();

  console.log("erro", error, "loading:", isLoading);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={stylesGlobal.container}>
      <Text style={styles.title}>Character</Text>
      <Text>Select and press for character information </Text>
      <FlatList
        horizontal
        style={styles.listStyle}
        numColumns={1}
        data={data}
        renderItem={({ item }) =>
          isLoading ? (
            <Text>Loadgin....</Text>
          ) : (
            <Pressable
              onPress={() => navigation.navigate("Character", { id: item.id })}
            >
              <View style={styles.listContent}>
                <Image
                  style={stylesGlobal.image}
                  placeholder={blurhash}
                  contentFit="contain"
                  transition={1000}
                  source={item.image}
                />
                <Text style={styles.textName}>Name: {item.name}</Text>
                <Text>Species: {item.species}</Text>
              </View>
            </Pressable>
          )
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textName: {
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "red",
  },
  listStyle: {
    flex: 1,
  },
  listContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  container: {
    height: 400,
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: "red",
    width: 250,
    height: 250,
    backgroundColor: "#0553",
  },
});
