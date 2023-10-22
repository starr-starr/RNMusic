import { Text, View, Image,TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState, type FC, type ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

import mountain from '@/assets/mountain.jpg'
import arrow_down_fill from '@/assets/triangle_down_fill.jpg'

import { formatPhone } from "@/utils/formatPhoneNumber";

type MyProps = {
    children?: ReactNode
}

const Login:FC<MyProps> = () => {
    const { replace } = useNavigation<StackNavigationProp<any>>()
    const [ phone,setPhone ] = useState<string>('')
    return (
        <View style={styles.root}>
            <Image source={mountain} style={styles.topPic}/>
            <View style={styles.phoneLayout}>
                    <Text style={styles.pre86}>+86</Text>
                    <Image style={styles.triangle} source={arrow_down_fill} />
                    <TextInput
                        style={styles.phoneInput}
                        placeholderTextColor="#bbb"
                        placeholder='请输入手机号码'
                        autoFocus={false}
                        keyboardType='number-pad'
                        maxLength={13}
                        value={phone}
                        onChangeText={(phoneNum:string)=>setPhone(formatPhone(phoneNum))}
                    />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={()=>replace('MainTab')}>
                <Text style={styles.loginTxt}>一键登录</Text>
                <View  style={styles.recommendLayout}>
                    <Text style={styles.recommendTxt}>推荐</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
} 

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topPic: {
        width:'100%',
        height:'40%',
        position:"absolute",
        top:0,
        opacity:0.9
    },
    phoneLayout: {
        width: '80%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:2,
        borderColor:'#ddd',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        marginTop: 28
    },
    pre86: {
        fontSize: 24,
        fontWeight:'bold',
        color: '#bbb',
        marginLeft:12
    },
    triangle: {
        width: 12,
        height: 6,
        marginLeft: 6,
    },
    phoneInput: {
        flex: 1,
        height: 60,
        backgroundColor: 'transparent',
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 24,
        color: '#333',
        marginLeft: 16,
    },
    loginBtn:{
        height:50,
        width: '80%',
        flexDirection:'row',
        backgroundColor:'red',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        marginTop:25
    },
    loginTxt:{
        color:'white',
        fontSize:20,
        marginLeft:'10%'
    },
    recommendLayout:{
        width:'10%',
        height:"70%",
        textAlign:'center',
    },
    recommendTxt:{
        color:'white',
        fontSize:10,
        backgroundColor:'#333',
        fontWeight:'bold',
        borderColor:'#d4d4d4',
        borderRadius:15,
        borderWidth:1,
        textAlign:'center',
    }
});
export default Login