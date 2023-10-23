import {
    View,
    StyleSheet
} from "react-native";
import type { FC, ReactNode } from 'react'

import Header  from "@/components/Header";

import leftTab from '@/assets/leftTab.jpg'
import icon_heart from '@/assets/icon_heart.jpg'
import Search from "@/components/search";

type MyProps = {
    children?: ReactNode
}

const Guard: FC<MyProps> = () => {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Header 
                    leftIcon={leftTab} 
                    centerElement={<Search />}
                    rightIcon={icon_heart}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        width: '100%',   
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',  
        backgroundColor: 'white',        
    },
    container:{
        marginLeft:28,
        marginRight:15, 
    }
});

export default Guard