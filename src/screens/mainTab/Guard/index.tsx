import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    StyleSheet
} from "react-native";
import type { FC, ReactNode } from 'react'

import Header from "@/components/Header";

import leftTab from '@/assets/leftTab.jpg'
import Search from "@/components/search";
import Heart from "@/components/heart";
import PicSwiper from "@/components/swiper";
import { guardTab } from "@/consts/guardTab";

type MyProps = {
    children?: ReactNode
}

const pics = [
    'http://p1.music.126.net/CQfrZz9MrqxCcVuAWFPvUg==/109951169001681743.jpg',
    'http://p1.music.126.net/MyL9Fpsumv9IhVcNKapcsQ==/109951169001678957.jpg',
    'http://p1.music.126.net/Bw1RuoC0rwuY0-jA2xUF2w==/109951169001688719.jpg',
]

const Guard: FC<MyProps> = () => {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Header
                    leftIcon={leftTab}
                    centerElement={<Search />}
                    rightIcon={<Heart value={false} />}
                />
                <PicSwiper pictures={pics} />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {guardTab.map((item)=>{
                        return (
                            <TouchableOpacity
                            key={item.desc}
                            // style={styles.tabItem}
                            // onPress={() => onCategoryPress(item)}
                        >
                            <Image source={item.icon}/>
                            <Text>{item.desc}</Text>
                        </TouchableOpacity>
                        )
                    })}
                </ScrollView>
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
    container: {
        marginLeft: 28,
        marginRight: 15,
        gap: 10
    },
    slide: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        resizeMode: 'cover',
        flex: 1
    }
});

export default Guard