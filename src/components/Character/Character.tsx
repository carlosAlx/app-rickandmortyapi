import { View, Text, Button, FlatList, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCharacterById } from "../../features/character/hooks/useCharacter";
import { useQueryClient } from "@tanstack/react-query";

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
    <View>
      <Button title="Home" onPress={() => navigation.goBack} />
      <Text>Character</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Image source={{ uri: data?.image }} width={100}/>
          <Text>Charter por id</Text>
          <Text>{data?.gender}</Text>
        </View>
      )}
    </View>
  );
}
