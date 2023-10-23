import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    Dimensions,
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

const { width: SCREEN_WIDTH } = Dimensions.get('window');
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
                <View style={styles.scrollViewContainer}>
                    <ScrollView
                        style={styles.scrollView}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {guardTab.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.tabItem}
                                >
                                    <Image source={item.icon} style={{ width: 25, height: 25, resizeMode: 'cover' }} />
                                    <Text style={styles.tabItemText}>{item.desc}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <View
                        style={{
                            width: (SCREEN_WIDTH-43) / 6,
                            height: 5,
                            backgroundColor: 'red',
                            borderRadius: 8,
                            position:'relative',
                            top:-15,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    ></View>
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
        alignItems: 'center',
        marginLeft: 28,
        marginRight: 15,
        gap: 10
    },
    scrollViewContainer: {
        flexDirection: 'row',
        height: 60,
        marginTop: 10
    },
    scrollView: {
        flex: 1,
        height: '100%',
    },
    slide: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        resizeMode: 'cover',
        flex: 1
    },
    tabItem: {
        width: 60,
        alignItems: 'center',
    },
    tabItemText: {
        marginTop: 5
    }
});

export default Guard