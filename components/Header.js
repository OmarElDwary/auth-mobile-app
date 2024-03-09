import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/5166950.jpg")}
        style={styles.gradientImage}
      />
      <View style={[styles.profileContainer, styles.shadowProp]}>
        <Image
          source={require("../assets/logo.webp")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  gradientImage: {
    position: "absolute",
    top: -150,
    left: 0,
    width: "100%",
    height: 300,
    marginBottom: 10
  },
  profileContainer: {
    width: 100,
    height: 100,
    left: 10,
    top: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#f1f2f6",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#2f3542",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
});
export default Header;