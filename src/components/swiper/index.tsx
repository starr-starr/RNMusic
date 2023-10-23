import {
    View,
    Image,
    StyleSheet
} from "react-native";
import type { FC, ReactNode } from 'react'

import Swiper from 'react-native-swiper'

type MyProps = {
    children?: ReactNode
    pictures: string[]
}

const PicSwiper: FC<MyProps> = ({ pictures }) => {
    return (
        <View style={{ height: 150 }}>
            <Swiper
                showsPagination={true}
                autoplay={true}
            >
                {pictures.map((item) => {
                    return (
                        <Image
                            style={styles.slide}
                            key={item}
                            source={{ uri: item }}
                        />
                    )
                })}
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        resizeMode: 'cover',
        flex: 1
    }
});

export default PicSwiper
