import {
    Image,
    View,
    Text,
    StyleSheet
} from "react-native";
import { useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import logo from '@/assets/logo.jpg'

type MyProps = {
    children?: ReactNode
}

const Welcome: FC<MyProps> = () => {
    const { replace } = useNavigation<StackNavigationProp<any>>()

    useEffect(() => {
        const timer = setTimeout(() => {
            replace('Login')
        }, 2000);
        return () => {
            clearInterval(timer);
        };
    }, [])
    return (
        <View style={styles.root}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.text}>阿星音乐  音乐的力量</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        height: 40,
        color: 'white',
        textAlign: 'center',
        letterSpacing: 3,
        fontSize: 18,
        fontStyle: "italic",
        marginTop: 300
    },
    logo: {
        width: "100%",
        height: 105,
        resizeMode: 'contain',
    },
});

export default Welcome