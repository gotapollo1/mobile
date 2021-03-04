import React from 'react';
import {useState , useEffect}from 'react'
import { StyleSheet, Text, View,TextInput, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
// import { version } from 'react/cjs/react.development';


const LoginScreen = () =>{
    
    
    // const[data,setData] = React.useState({
    //     username: '',
    //     password: '',
    //     check_textInputChange: flase,
    //     secureTextEntry: true
    // })
    // const handlePasswordChange = (val) =>{
    //     setData({
    //         data,
    //         password: val
    //     })
    // }
    
    // const updateSecureTextEntry = () =>{
    //     setData({
    //         data,
    //         secureTextEntry: !data.secureTextEntry
    //     })
    // }
    return (
        <View style={myStyles.container}>
            <View style={myStyles.header}>
                {/* <FlatList
                    data={result}
                    renderItem={({item}) =>{
                        return(
                            <Text>{item.name}</Text>
                        )   
                    }}
                /> */}
                <Text style={myStyles.text_header}>Welcome</Text>
            </View>
            <View style={myStyles.footer}>
                <Text style={myStyles.text_footer}>Username</Text>
                <View style={myStyles.action}>
                 <AntDesign name="user" size={24} color="black" />
                 <TextInput
                    placeholder="Your Username"
                    style={myStyles.TextInput}
                    autoCapitalize="none"
                 />
                </View>

                <Text style={[myStyles.text_footer,{marginTop:25}]}>Password</Text>
                <View style={myStyles.action}>
                 <Entypo name="lock" size={24} color="black" />
                 <TextInput
                    placeholder="Your Password"
                    secureTextEntry={true}
                    style={myStyles.TextInput}
                    autoCapitalize="none"
                 />
                 <Feather name="eye-off" size={24} color="black" />
                </View>

                <View style={myStyles.botton}>
                    <View style={myStyles.singIn}>
                        <Text style={myStyles.textSingIn}>SingIn</Text>
                    </View>
                </View>
                <View style={myStyles.bottonUp}>
                    <View style={myStyles.singIn}>
                        <Text style={[myStyles.textSingIn,{color:"#009387"}]}>SingUp</Text>
                        {/* <Button
                            title= "API"
                        /> */}
                    </View>
                </View>
            </View>
        </View>
    )
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer:{
      flex: 2.5,
      backgroundColor: '#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingHorizontal:20,
      paddingVertical:30
  },
  text_header:{
      color:'#fff',
      fontWeight: 'bold',
      fontSize:50
  },
  text_footer:{
      color: '#05375a',
      fontSize:18,
  },
  action:{
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput:{
      paddingLeft:10,
      color:'red'
  },
  botton: {
      alignItems: 'center',
      marginTop: 50,
      backgroundColor:"#009387",
      borderRadius:10,
  },
  singIn:{
      width:'100%',
      height:50,
      justifyContent:'center',
      alignSelf: 'center',
    //   borderRadius:10,
  },
  textSingIn:{
      fontSize:20,
      fontWeight:'bold',
      color:"#fff",
      alignSelf:'center'
  },
  bottonUp: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor: "#009387"
},
});

export default LoginScreen