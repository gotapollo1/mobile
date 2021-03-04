import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import footbal from '../api/footbal'
import {withNavigation} from 'react-navigation'

const ResultsList = ({id,navigation}) => {

     const [result,setResult] = useState('')
     const getResult = async (id) =>{
     const response = await footbal.get(`/${id}`)
   setResult(response.data.api)
   console.log(response.data.api)
   }
   useEffect(()=>{
       getResult(id)
   },[])
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.titleStyle}>{result.results} Teams</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={result.teams}
                keyExtractor={(result)=>result.id}
                renderItem={( {item} )=>{
                    return(
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('PlayerList',{ id: item.team_id})}
                        >
                            <Image style={myStyle.imageStyle} source={{ uri: item.logo}}/>

                            
                        </TouchableOpacity>
                        
                    )
                }}
            />
            
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
        marginBottom:10
    },
    imageStyle:{
        width: 200,
        height: 180,
        borderRadius: 6,
        marginBottom: 5
    }

})

export default withNavigation(ResultsList)