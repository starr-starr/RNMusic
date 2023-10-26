import {
    Image,
    View,
    StyleSheet
} from "react-native";
import { type FC, type ReactNode } from 'react'
import type { ImageSourcePropType } from "react-native";

type resizeMode = 'center' | 'contain' | 'cover' | 'repeat' | 'stretch' 

type MyProps = {
    children?: ReactNode
    centerElement: ReactNode
    leftIcon: ImageSourcePropType
    rightIcon: ImageSourcePropType | ReactNode
    leftIconMode: resizeMode
}

const Header: FC<MyProps> = ({
    leftIcon,
    centerElement,
    rightIcon,
    leftIconMode
}) => {
    return (
        <View style={style.root}>
            <Image source={leftIcon} style={[style.leftIcon,{resizeMode:leftIconMode}]} />
            {centerElement}
            {typeof rightIcon == "number" ? (
                <Image source={rightIcon} style={style.rightIcon} />
            ) : (
                rightIcon as ReactNode
            )}
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        width: '100%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftIcon: {
        height: '80%',
        width: 20,
    },
    rightIcon: {
        height: '80%',
        resizeMode: 'contain'
    }
})

export default Header