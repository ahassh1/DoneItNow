import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello this is Polash!</Text>
      <Text>Polash is a RN developer</Text>
      <Text>I'm passoinate about software engineering field now </Text>

      <Text>
        I want to get a job on It sector on react native developer of september
        month inshaAllah.{" "}
      </Text>
      <StatusBar style="auto" />
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
