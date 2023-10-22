import {
    View,
    Text,
    StyleSheet
} from "react-native";
import type { FC, ReactNode } from 'react'

type MyProps = {
    children?: ReactNode
}

const Comment: FC<MyProps> = () => {
    return (
        <View style={styles.root}>
            <Text>评论</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Comment