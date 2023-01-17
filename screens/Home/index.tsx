import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
