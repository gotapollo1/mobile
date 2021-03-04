import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import player from '../api/player'
import team from '../api/team'
const PlayerListScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const teamid = navigation.getParam('id')
    const [result,setResult] = useState('')
    const [resulteTeam,setResultTeam] = useState('')

     const getResult = async (id) =>{
     const response = await player.get(`/${id}/2020-2021`)
   setResult(response.data.api)
   console.log(response.data.api)
   }
   useEffect(()=>{
       getResult(id)
   },[])

   const getResultTeam = async(id)=>{
       const res = await team.get(`/${id}`)
   setResultTeam(res.data.api)
   console.log(res.data.api)
   }
   useEffect(()=>{
       getResultTeam(id)
   },[])
   
 
 
    return (
    <View style={myStyle.LayoutContainer}>
        <View style={myStyle.TOPBOX}>
            <View style={{flexDirection:'row',position:'absolute' ,zIndex:1,top:'9%',left:'88%',alignItems:'center'}}>
            <Image  style={{height:15,width:15,marginRight:5}} source={require("../icons/notification.png")}></Image>
            <Image style={{height:20,width:20}} source={require("../icons/star.png")}></Image>
            </View>
            <Text>
                {resulteTeam && resulteTeam.teams.map((item)=>{
                return(
                     <Image style={{height:100,width:100}} source={{uri: item.logo}}></Image>   
                )
            })}
           
            </Text>
            
            <Text>
                {resulteTeam && resulteTeam.teams.map((item)=>{
                    return(
                        <Text style={{fontSize:25,color:'#fff'}}>{item.name}</Text>
                    )
                })}
            </Text>
             
                 
            <Text style={{fontSize:13,color:'#e4e6e5'}}>2020/2021</Text>

        </View>
        <View style={myStyle.Header}>
         <Text style={{marginLeft:18,color:'#fff'}}>Position</Text>
         <Text style={{marginLeft:80,color:'#fff'}}>Name</Text>
         <Text style={{marginLeft:70,color:'#fff'}}>Nationality</Text>
         <Text style={{marginLeft:30,color:'#fff'}}>Age</Text>
        </View>
        <ScrollView horizontal={false} >
            <Text>
                {   
        
          
              
            result && result.players.map((item)=>{ 
                return(
                     <View style={myStyle.ArrayBox} >
               <View  style={myStyle.groupitem}>
                <Text style={myStyle.position}>{item.position}</Text>
                <Text style={myStyle.name}>{item.lastname}</Text>
                <Text style={myStyle.number}>{item.nationality}</Text>
                <Text style={myStyle.age}>{item.age}</Text></View>
                <View style={myStyle.linespace}></View>
               </View>
                )   
            } 
            )
        }
            </Text>
        
      </ScrollView>
    </View>
  );
};

const myStyle = StyleSheet.create({
    TOPBOX:{
        width:'100%',
        height:150,
        marginBottom:7,
        backgroundColor:'#1c2951'
        ,alignItems:'center'
        ,
        justifyContent:'center'
    },
    
    
    
    
    linespace:{
        width:'100%',
        height:2,
        backgroundColor:'#e4e6e5'

    }
    
    ,
    age:{
        fontSize:14,
        marginLeft:35,
    },
   
   
   
    number:{
        width:60,
        fontSize:14,
        marginLeft:1,
        // backgroundColor:'#333'
    },
    
    
    
    name:{
        fontSize:14,
        marginLeft:10,
        width:140,
        // backgroundColor:'#333'
    },
    
    position:{
        width:90,
        // backgroundColor:'#333',
        fontSize:14,
        marginLeft:18
    },
    
    
    
    groupitem:{
        marginTop:10,
         flexDirection:'row'
         ,marginBottom:5
    }
    ,
    
    
    Header:{
         width:'100%',
         height:40,
        backgroundColor:"#1c2951",
        flexDirection:"row"
        ,alignItems:'center',
        
    },


    LayoutContainer:{
        flex:1
        
    }
});

export default PlayerListScreen;