import {View,Text,StyleSheet,StatusBar} from "react-native";
import { responsiveHeight,responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions"

import PrimaryButton from "../Components/Buttons/PrimaryButton"
import {Colors,Fonts} from "../Constants"

const HomeStack = () => {
    const onButtonPress = () => {
        console.log("Button Pressed!");
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.primaryLight2}/>
            <Text style={styles.title}>Let's start a sweet journey!!</Text>
            <PrimaryButton buttonText="Explore" onButtonPress={onButtonPress} />
            {/* <PrimaryButton buttonText="Decoration" onButtonPress={onButtonPress} /> */}
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

export default HomeStack