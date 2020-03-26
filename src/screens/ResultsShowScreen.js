import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.header}>Esto es:</Text>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 250,
    borderRadius: 3,
    marginVertical: 8,
    marginLeft: 15
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 3
  },
  header: {
    marginLeft: 15,
    fontStyle: "italic",
    fontSize: 16,
    marginTop: 15
  }
});

export default ResultsShowScreen;
