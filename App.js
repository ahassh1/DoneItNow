import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

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
      <Button
        color="green"
        title="click me"
        onPress={() => console.log("button tabed")}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
