import { useSelector } from "react-redux";
import { TextInput } from "react-native";
import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const {
    entities: Openaiapi_response_post_Createtranslationaudios
  } = useSelector(state => state.Openaiapi_response_post_Createtranslationaudios);
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        
        
      <TextInput style={styles.bOfbmFIg} clearTextOnFocus={true} scrollEnabled={true} spellCheck={true} editable={true} multiline={true} placeholder="enter prompts and examples here..." data={Openaiapi_response_post_Createtranslationaudios}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  bOfbmFIg: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 282,
    height: 30,
    position: "absolute",
    left: 43,
    top: 147
  }
});
export default WelcomeScreen;