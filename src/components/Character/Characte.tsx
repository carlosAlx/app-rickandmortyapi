import { View, Text, FlatList, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getCharaters } from "../../api/apiConect";

export default function CharacterPage() {
  const queryClient = useQueryClient();
  const {
    data: results,
    isLoading,
    error,
    isPending,
  } = useQuery({
    queryKey: ["character"],
    queryFn: getCharaters,
  });

  console.log("erro", error, "loading:", isLoading);
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Character</Text>
      <FlatList
        horizontal
        style={styles.listStyle}
        numColumns={1}
        data={results}
        renderItem={({ item }) =>
          isLoading ? (
            <View style={styles.listContent}>
              <Text>Loading....</Text>
            </View>
          ) : (
            <View style={styles.listContent}>
              <Image
                style={styles.imageStyle}
                placeholder={blurhash}
                contentFit="contain"
                transition={1000}
                source={item.image}
              />
              <Text style={styles.textName}>Name: {item.name}</Text>
              <Text>Species: {item.species}</Text>
            </View>
          )
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textName: {
    // color: "white",
    //backgroundColor: "green",
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
