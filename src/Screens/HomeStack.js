import {View,Text,Pressable,StyleSheet,StatusBar} from "react-native"

import Colors from "../Constants/Colors"

const HomeStack = () => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.primaryLight2}/>
            <Text style={styles.title}>Select One</Text>
            <Pressable><Text>Baking</Text></Pressable>
            <Pressable><Text>Decoration</Text></Pressable>
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
        fontFamily:'AlegreyaSans-Bold',
        fontSize:34,
        color:Colors.white,
    }
})

export default HomeStack