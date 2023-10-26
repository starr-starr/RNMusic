import {
    View,
    StyleSheet,
    Text,
    Image
} from "react-native";

import type { FC, ReactNode } from 'react'

import Header from "@/components/Header";
import GuardTab from "./c-components/guardTab";
import Search from "@/components/search";
import Heart from "@/components/heart";
import PicSwiper from "@/components/swiper";

import leftTab from '@/assets/leftTab.jpg'
import refersh from '@/assets/refresh.jpg'
import play from '@/assets/play.jpg'
import more from '@/assets/more.jpg'



type MyProps = {
    children?: ReactNode
}

const pics = [
    'http://p1.music.126.net/CQfrZz9MrqxCcVuAWFPvUg==/109951169001681743.jpg',
    'http://p1.music.126.net/MyL9Fpsumv9IhVcNKapcsQ==/109951169001678957.jpg',
    'http://p1.music.126.net/Bw1RuoC0rwuY0-jA2xUF2w==/109951169001688719.jpg',
]

const First = () => {
    return (
        <View style={{ flexDirection: 'row',marginLeft:3,alignItems:'center',justifyContent:'center' }}>
            <Text style={{ marginRight:3,fontSize:16,fontWeight:'bold',color:'black'}}>每天听点好音乐</Text>
            <View style={{
                flexDirection: 'row',
                alignItems:'center',
                // justifyContent:'center',
                borderRadius:10,
                borderWidth:1,
                backgroundColor:'#dbdbdb',
                borderColor:'white',
                paddingHorizontal:4,
                gap:2
            }}>
                <Image source={play} />
                <Text style={{alignItems:'center'}}>播放</Text>
            </View>
        </View>
    )
}

const Guard: FC<MyProps> = () => {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Header
                    leftIcon={leftTab}
                    leftIconMode="cover"
                    centerElement={<Search />}
                    rightIcon={<Heart value={false} />}
                />
                <PicSwiper pictures={pics} />
                <GuardTab />
                <Header
                    leftIcon={refersh}
                    leftIconMode="contain"
                    centerElement={<First />}
                    rightIcon={more} 
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
    container: {
        alignItems: 'center',
        marginLeft: 28,
        marginRight: 15,
        gap: 10,
    }
});

export default Guard