import React from 'react'
import { View, Text, StyleSheet,Image,Button } from 'react-native'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'

const TestApi = () => {
    const [result,setResult] =useState("")
    const api = axios.create({
        baseURL: 'https://api-football-v1.p.rapidapi.com/v2/players/squad/85/2018-2019',
        headers: {
            'x-rapidapi-key': '8103865654msh41d3b7b3e37b296p1ba609jsnea64089c252e',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    })
    const getResult = async() =>{
        const response = await api.get('/')
        setResult(response.data)
        console.log(response.data)
        }
        useEffect(() => {
            getResult()
        },[])

           
    return(
        <View>
            <Text>
                {result.api.results}
            </Text>
           
               {result.api.players.map((re)=>{
                   return(
                       <Text>{re.age}</Text>
                   )
               })}
               
        </View>
    )
   
}

const myStyles = StyleSheet.create({
    container:{
        flex:0.5
    }
})

export default TestApi