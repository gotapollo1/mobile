import React from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react/cjs/react.development'
import player from '../api/player'


const PlayerList = ({navigation}) => {
    const id = navigation.getParam('id')
    const [result,setResult] = useState('')
     const getResult = async (id) =>{
     const response = await player.get(`/${id}/2020-2021`)
   setResult(response.data.api)
   console.log(response.data.api)
   }
   useEffect(()=>{
       getResult(id)
   },[])
    return(
        <View style={myStyle.container}>
            {/* <Image style={myStyle.imageStyle} source={require('../icons/italy.png')}/> */}
            <Text style={myStyle.titleStyle}>Lineup season 2021</Text>
            <FlatList
            
                horizontal={false}
                data={result.players}
                keyExtractor={(result)=> result.players}
                renderItem={({item})=> {
                    return(
                        
                       <Text>
                           {item.lastname}
                       </Text>
                        
                    )
                }}
            />
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

export default PlayerList