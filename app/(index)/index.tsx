import { useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function ClockScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>Clock</Text>
      <TouchableOpacity onPress={() => router.push("/alarm")}>
        <Text>Alarm</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/stopwatch")}>
        <Text>Stopwatch</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/timer")}>
        <Text>Timer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
