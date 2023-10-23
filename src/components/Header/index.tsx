import {
    Image,
    View,
    StyleSheet
} from "react-native";
import type { FC, ReactNode } from 'react'
import type { ImageSourcePropType } from "react-native";


type MyProps = {
    children?: ReactNode
    centerElement:ReactNode
    leftIcon: ImageSourcePropType
    rightIcon: ImageSourcePropType
}


const Header:FC<MyProps> = ({
    leftIcon,
    centerElement,
    rightIcon
}) => {
    return (
        <View style={style.root}>
            <Image source={leftIcon} style={style.leftIcon}/>
            {centerElement}
            <Image source={rightIcon} style={style.rightIcon}/>
        </View>
    )
} 

const style = StyleSheet.create({
    root:{
        width:'100%',
        height:35,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    leftIcon:{
        height:'80%',
        width:20,
        resizeMode:'cover',
    },
    rightIcon:{
        height:'80%',
        resizeMode:'contain'
    }
})

export default Header