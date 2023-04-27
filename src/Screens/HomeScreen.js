import { useState } from "react";
import {View,Text,StyleSheet,StatusBar} from "react-native";
import { responsiveHeight,responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions"

import PrimaryButton from "../Components/Buttons/PrimaryButton"
import {Colors,Fonts} from "../Constants"

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Let's start a sweet journey!!</Text>
            <Text style={styles.title}>Select any one 👇</Text>
            <PrimaryButton buttonText="Baking" onButtonPress={() => navigation.navigate("Baking")} />
            <PrimaryButton buttonText="Decoration" onButtonPress={() => navigation.navigate("Decoration")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.primaryDark,
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    title: {
        fontFamily:Fonts.ALEGREYASANS_BOLD,
        fontSize:responsiveFontSize(4),
        color:Colors.white,
        marginBottom: 10,
    }
})

export default HomeScreen;