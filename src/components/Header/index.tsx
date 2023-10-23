import {
    Image,
    View,
    StyleSheet
} from "react-native";
import { type FC, type ReactNode } from 'react'
import type { ImageSourcePropType } from "react-native";


type MyProps = {
    children?: ReactNode
    centerElement: ReactNode
    leftIcon: ImageSourcePropType
    rightIcon: ImageSourcePropType | ReactNode
}


const Header: FC<MyProps> = ({
    leftIcon,
    centerElement,
    rightIcon
}) => {
    return (
        <View style={style.root}>
            <Image source={leftIcon} style={style.leftIcon} />
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
        alignItems: 'center',
        justifyContent: 'center',
        gap:15
    },
    leftIcon: {
        height: '80%',
        width: 20,
        resizeMode: 'cover',
    },
    rightIcon: {
        height: '80%',
        resizeMode: 'contain'
    }
})

export default Header