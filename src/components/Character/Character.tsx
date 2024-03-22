import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCharacterById } from "../../features/character/hooks/useCharacter";
import { useQueryClient } from "@tanstack/react-query";
import { Image } from "expo-image";
import { stylesGlobal } from "../../styles/stylesGrobal";

export default function Character({ route }: any) {
  const queryClient = useQueryClient();
  const { id } = route.params;
  const { data, error, isLoading, isError } = useCharacterById(id);
  console.log(
    "id:",
    id,
    "erro:",
    error,
    "loading:",
    isLoading,
    "isErro:",
    isError
  );

  const navigation = useNavigation();

  return (
    <View style={stylesGlobal.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.containerInfo}>
          <View style={styles.containerImg}>
            <Image
              style={styles.image}
              contentFit="contain"
              transition={1000}
              source={data?.image}
            />
          </View>

          <Text style={styles.title}>{data?.name}</Text>
          <View style={styles.contentInfo}>
            <Text>Species: {data?.species}</Text>
            <Text>Gender: {data?.gender}</Text>
            <Text>Status: {data?.status}</Text>
            <Text>Location: {data?.location.name}</Text>
            <Text>Origin: {data?.origin.name}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerInfo: {
    flex: 1,
    width: "90%",
    borderWidth: 1,
    borderStyle: "dashed",
    alignItems: "center",
  },
  containerImg:{
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor:"green",
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginHorizontal: "auto",
    borderRadius: 150,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  contentInfo: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
