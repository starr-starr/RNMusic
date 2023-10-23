import { Text, View, Image,TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState, type FC, type ReactNode } from 'react'
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { TabStack } from "..";

import bottomTab_guard from '@/assets/bottomTab_guard.jpg'
import bottomTab_guard_select from '@/assets/bottomTab_guard_select.jpg'
import bottomTab_My from '@/assets/bottomTab_My.jpg'
import bottomTab_My_select from '@/assets/bottomTab_My_select.jpg'
import bottomTab_Comment from '@/assets/bottomTab_Comment.jpg'
import bottomTab_Comment_select from '@/assets/bottomTab_Comment_select.jpg'

const { Navigator,Screen } = createBottomTabNavigator()

type MyProps = {
    children?: ReactNode
}

const MainTab:FC<MyProps> = () => {
    return (
        <View style={styles.root}>
            <Navigator 
                 screenOptions={
                    ({route:{ name }}) => {
                        return {
                            tabBarIcon: ({ focused, color, size }) => {
                                let img;
                                switch (name) {
                                    case 'Guard':                                            
                                         img = focused ? bottomTab_guard_select : bottomTab_guard;
                                         break;
                                    case 'My':
                                         img = focused ? bottomTab_My_select : bottomTab_My;
                                         break;
                                    case 'Comment':
                                         img = focused ? bottomTab_Comment_select : bottomTab_Comment;
                                         break;
                                }
                                return <Image style={{
                                    width: size, height: size, tintColor: color,
                                }} source={img} />
                            },
                            tabBarActiveTintColor:'#ff2442',
                            tabBarInactiveTintColor:'#999',
                            tabBarItemStyle:{marginBottom:5}
                        }
                    }
            }
                >
                {TabStack.map( item => {
                    return (
                        item.component !== undefined
                        ?    <Screen
                                key={item.name} 
                                name={item.name}
                                component={item.component}
                                options={item.options}
                            />
                        :   null
                    )
                })}
            </Navigator>
        </View>
    )
} 

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
    }
})

export default MainTab