import {Pressable,Text,StyleSheet} from "react-native"
import { responsiveHeight,responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions"
import { Fonts,Colors } from "../../Constants"

const PrimaryButton = ({buttonText,onButtonPress}) => {
    return(
        <Pressable style={styles.button} onPress={onButtonPress}>
            <Text style={styles.text}>{buttonText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:Colors.white,
        width: responsiveWidth(30),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(6),
        justifyContent:"center",
        alignItems:"center",
        marginVertical:responsiveHeight(1),
        elevation:5,
    },
    text: {
        fontFamily:Fonts.ALEGREYASANS_MEDIUM,
        fontSize:responsiveFontSize(2.5),
        color:Colors.primaryMedium,
    },
})

export default PrimaryButton;