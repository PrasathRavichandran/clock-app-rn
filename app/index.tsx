import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={Styles.title}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  title: {
    fontFamily: "Avenir-Light",
    fontSize: 30,
  },
});
