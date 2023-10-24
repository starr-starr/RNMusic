import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    Dimensions,
    Animated,
    StyleSheet
} from "react-native";
import { useState, useRef } from 'react'
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

    const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState<number>(1);
    const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState<number>(0);

    const scrollIndicatorSize =
        completeScrollBarHeight > visibleScrollBarHeight
            ? (visibleScrollBarHeight * visibleScrollBarHeight) /
            completeScrollBarHeight
            : visibleScrollBarHeight;

    const scrollIndicator = useRef(new Animated.Value(0)).current;

    const difference =
        visibleScrollBarHeight > scrollIndicatorSize
            ? visibleScrollBarHeight - scrollIndicatorSize
            : 1;

    const scrollIndicatorPosition = Animated.multiply(
        scrollIndicator,
        visibleScrollBarHeight / completeScrollBarHeight
    ).interpolate({
        inputRange: [0, difference],
        outputRange: [0, difference],
        extrapolate: 'clamp'
    });
    
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Header
                    leftIcon={leftTab}
                    centerElement={<Search />}
                    rightIcon={<Heart value={false} />}
                />
                <PicSwiper pictures={pics} />
                <View style={{ flexDirection: 'column', height: '100%', flex: 1, width: SCREEN_WIDTH - 43, alignItems: 'center' }}>
                    <View style={styles.scrollViewContainer}>
                        <ScrollView
                            style={styles.scrollView}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            onContentSizeChange={(width) => {
                                console.log('CompleteScrollBarHeight=>',width)
                                setCompleteScrollBarHeight(width);
                            }}
                            onLayout={({
                                nativeEvent: {
                                    layout: { width }
                                }
                            }) => {
                                console.log('onLayout->',width)
                                setVisibleScrollBarHeight(width);
                            }}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollIndicator } } }],
                                { useNativeDriver: false }
                            )}
                            scrollEventThrottle={16}
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
                            width: "100%",
                            height: 5,
                            backgroundColor: 'black',
                            borderRadius: 8,
                            position: 'relative',
                            top: -8,
                            justifyContent: 'center'
                        }}
                    >
                        <Animated.View
                            style={{
                                height: 5,
                                borderRadius: 8,
                                backgroundColor: 'red',
                                width: scrollIndicatorSize,
                                transform: [{ translateX: scrollIndicatorPosition }]
                            }}
                        />
                    </View>
                </View>

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