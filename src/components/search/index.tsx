import {
    Image,
    View,
    TextInput,
    StyleSheet
} from "react-native";
import type { FC, ReactNode } from 'react'
import search from '@/assets/search.jpg'

type MyProps = {
    children?: ReactNode
}


const Search:FC<MyProps> = () => {
    return (
            <View style={style.searchContainer}>  
                <Image style={style.searchIcon} source={search} />              
                <TextInput
                        style={style.searchTxt}
                        placeholder='Jay Chou'
                        placeholderTextColor={'#bbb'}
                    />
            </View>
    )
} 

const style = StyleSheet.create({
    root:{
        width:'100%',
    },
    searchContainer:{
        width:'75%',       
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginLeft: 16,
    },
    searchTxt: {
        fontSize: 14,
        color: '#bbb',
        marginLeft: 6,
        paddingVertical: 0,
    },
    searchIcon:{
        width: 20,
        height: 20,
    }
})

export default Search