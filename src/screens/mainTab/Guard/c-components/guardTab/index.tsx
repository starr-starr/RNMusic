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

import { guardTab } from "@/consts/guardTab";

type MyProps = {
    children?: ReactNode
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const GuardTab: FC<MyProps> = () => {

    const [completeScrollBarWidth, setCompleteScrollBarWidth] = useState<number>(1);
    const [visibleScrollBarWidth, setVisibleScrollBarWidth] = useState<number>(0);

    const scrollIndicatorSize =
        completeScrollBarWidth > visibleScrollBarWidth
            ? (visibleScrollBarWidth * visibleScrollBarWidth) /
            completeScrollBarWidth
            : visibleScrollBarWidth;

    const scrollIndicator = useRef(new Animated.Value(0)).current;

    const difference =
        visibleScrollBarWidth > scrollIndicatorSize
            ? visibleScrollBarWidth - scrollIndicatorSize
            : 1;

    const scrollIndicatorPosition = Animated.multiply(
        scrollIndicator,
        visibleScrollBarWidth / completeScrollBarWidth
    ).interpolate({
        inputRange: [0, difference],
        outputRange: [0, difference],
        extrapolate: 'clamp'
    });

    return (
        <View style={{ width: SCREEN_WIDTH - 43, alignItems: 'center' }}>
            <View style={styles.scrollViewContainer}>
                <ScrollView
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onContentSizeChange={(width) => {
                        setCompleteScrollBarWidth(width);
                    }}
                    onLayout={({
                        nativeEvent: {
                            layout: { width }
                        }
                    }) => {
                        setVisibleScrollBarWidth(width);
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
                    width: '100%',
                    height: 5,
                    backgroundColor: '#e1c0f2',
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
    )
}
const styles = StyleSheet.create({
    scrollViewContainer: {
        height: 60,
        marginTop: 10
    },
    scrollView: {
        flex: 1,
        height: '100%',
    },

    tabItem: {
        width: 60,
        alignItems: 'center',
    },
    tabItemText: {
        marginTop: 5
    }
});

export default GuardTab