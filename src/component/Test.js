import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import footbal from '../api/footbal'
import {withNavigation} from 'react-navigation'
import ResultsList from './ResultsList'

const Test = () => {
    const handler = () =>{
        return <View style={myStyle.container}>
            <ResultsList
            id="2"
            />
        </View>
    }

     
    return(
        <View style={myStyle.container}>
            <TouchableOpacity onPress={handler}>
                <Text>กดตรงนี้</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const myStyle = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:5
    },
    container:{
        marginBottom:10,
        flex:1
    },
    imageStyle:{
        width: 200,
        height: 180,
        borderRadius: 6,
        marginBottom: 5
    }

})

export default Test