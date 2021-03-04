import React from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react/cjs/react.development'
import footbal from '../api/footbal'


const ResultsDetail = () => {

    return(
        <View style={myStyle.container}>
            <Image style={myStyle.imageStyle} source={require('../icons/italy.png')}/>
            <Text style={myStyle.titleStyle}>gg</Text>
            {/* <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={result.teams}
                keyExtractor={(result)=> result.teams}
                renderItem={({item})=> {
                    return(
                        
                        <Image style={myStyle.imageStyle} source={{uri: item.logo}}/>
                        
                    )
                }}
            /> */}
            {/* <Text>{result.rating} star {result.review_count} reviews</Text> */}
        </View>
    )
}

const myStyle = StyleSheet.create({
    titleStyle: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle:{
        width: 200,
        height: 125,
        borderRadius: 6,
        marginBottom: 5
    },
    viewStyle: {
        marginLeft: 10
    },
    container:{
        marginBottom:10
    }
})

export default ResultsDetail