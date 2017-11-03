import React from "react";
import Watermark from "@times-components/watermark";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 100
  },
  contentContainer: {
    alignItems: "center",
    maxWidth: 256
  },
  title: {
    color: "#1d1d1b",
    fontSize: 35,
    fontFamily: "TimesModern-Bold",
    marginBottom: 15,
    textAlign: "center"
  },
  description: {
    color: "#696969",
    fontSize: 18,
    fontFamily: "TimesDigitalW04",
    lineHeight: 18 * 1.56,
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#006699",
    height: 42,
    justifyContent: "center",
    marginTop: 40,
    width: 200
  },
  buttonLabel: {
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "GillSansMTStd-Medium",
    fontSize: 13,
    lineHeight: 13,
    opacity: 0.9,
    color: "#fff"
  },
  background: {
    bottom: 0,
    position: "absolute",
    right: 0
  }
})

const AuthorProfileError = () => (
  <View style={styles.container}>
    <View style={styles.background}>
      <Watermark width={800} height={400} />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Something’s gone wrong</Text>
      <Text style={styles.description}>We can’t load the page you have requested. Please check your network connection and retry to continue</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>RETRY</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default AuthorProfileError;
