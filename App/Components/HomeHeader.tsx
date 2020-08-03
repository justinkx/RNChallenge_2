import React from 'react'
import { StyleSheet,TouchableOpacity, View, Image } from 'react-native'

const HomeHeader = () => {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity  >
                <Image style={[styles.icon]} source={require('../Assets/Icons/search.png')}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={[styles.icon]} source={require('../Assets/Icons/notification.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        height: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 10
    }
})
