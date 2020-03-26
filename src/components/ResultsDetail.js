import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.starsStyle}>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 3
  },
  starsStyle: {
    color: "gray"
  }
});

export default ResultsDetail;
