import Colors from "@/theme/colors";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.sideHeader}>
        <Entypo
          name="grid"
          size={30}
          color={Colors.stroke}
          style={Styles.headerIcon}
        />
        <View style={Styles.links}>
          <View style={Styles.link}>
            <Image
              source={require("@/assets/images/clock_icon.png")}
              style={Styles.linkImg}
            />
            <Text style={Styles.linkText}>Clock</Text>
          </View>
          <View style={Styles.link}>
            <Image
              source={require("@/assets/images/clock_icon.png")}
              style={Styles.linkImg}
            />
            <Text style={Styles.linkText}>Clock</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  sideHeader: {
    width: 80,
    height: "100%",
    borderRightColor: Colors.stroke,
    borderRightWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
  },
  headerIcon: {
    transform: [{ rotate: "135deg" }],
    marginTop: 10,
  },
  links: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
  },
  link: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.activeTab,
    paddingVertical: 14,
    borderTopRightRadius: 26,
  },
  linkImg: {
    width: 36,
    height: 36,
  },
  linkText: {
    fontFamily: "Avenir-Medium",
    color: Colors.stroke,
  },
});
