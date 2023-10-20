import type { 
    RouteConfig, 
    ParamListBase, 
    NavigationState, 
    EventMapBase,  
} from "@react-navigation/native"
import type { StackNavigationOptions } from "@react-navigation/stack"
type RouteName = keyof ParamListBase
import Welcome from "./welcome"
import Login from "./login"

export const stack : RouteConfig<ParamListBase, RouteName, NavigationState, StackNavigationOptions, EventMapBase>[] = [
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
    }
 ] 