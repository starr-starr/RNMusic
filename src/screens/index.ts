import type { 
    RouteConfig, 
    ParamListBase, 
    NavigationState, 
    EventMapBase,  
} from "@react-navigation/native"
import type { StackNavigationOptions } from "@react-navigation/stack"
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

import Welcome from "./welcome"
import Login from "./login"
import MainTab from "./mainTab"

import Guard from "./mainTab/Guard"
import My from "./mainTab/My"
import Comment from "./mainTab/Comment"

type RouteName = keyof ParamListBase

type RootStack = RouteConfig<ParamListBase, RouteName, NavigationState, StackNavigationOptions, EventMapBase>[]

type TabStack = RouteConfig<ParamListBase, RouteName, NavigationState, BottomTabNavigationOptions, EventMapBase>[]

export const RootStack : RootStack = [
    {
        name:'Welcome',
        component:Welcome,
        options:{
            headerShown:false
        }
    },
    {
        name:'Login',
        component:Login,
        options:{
            headerShown:false
        }
    },{
        name:'MainTab',
        component:MainTab,
        options:{
            headerShown:false
        }
    }
 ] 

 export const TabStack : TabStack = [
    {
        name:'Guard',
        component:Guard,
        options:{
            title:'广场',
            headerShown:false
        }
    },
    {
        name:'My',
        component:My,
        options:{
            title:'我的',
            headerShown:false
        }
    },
    {
        name:'Comment',
        component:Comment,
        options:{
            title:'评论',
            headerShown:false
        }
    }
 ]