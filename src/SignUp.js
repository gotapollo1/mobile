import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button,Keyboard} from 'react-native';
import axios from 'axios'
import { event } from 'react-native-reanimated';
// import { version } from 'react/cjs/react.development';


const SignUp = () =>{
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [result,setResult] = useState(null)
    const [validated, setValidated] = useState(false);
    const [errorMesasge, setErrorMessage] = useState('')

    const onSubmit = async () =>{
        try {
            const response =  await axios
        .post('http://localhost:8080/addUser',{
            firstname ,
            lastname,
            username,
            password
        })
        } catch (error) {
            setErrorMessage('Something went wrong')
            alert(errorMesasge)
        }
        setFirstname("");
        setLastname("");
        setUsername("");
        setPassword("");
      
        
    }
    const handlerSubmit = event =>{
        event.preventDefault();
    }

//   const  handleClick = (e) => {
//         e.preventDefault();
//         console.log('The link was clicked.');
//       }

    // const InputHandlerFirstname = (inputText) => {
    //     setFirstname(inputText.replace(/[^a-z^A-Z]/g,''))
    //     // setFirstname(event.target.value);
       
    // }
    // const InputHandlerLastname= inputText => {
    //     setLastname(inputText.replace(/[^a-z^A-Z]/g,''))
    // }
    // const InputHandlerUsername= inputText => {
    //     setUsername(inputText.replace(/[^a-z^A-Z^0-9]/g,''))
    // }
    // const InputHandlerPassword= inputText => {
    //     setPassword(inputText.replace(/[^a-z^A-Z^0-9]/g,''))
    // }
    // const InputHandlerFirstname= event => {
    //     setFirstname(event.target.value)
    // }

    // const InputHandlerLastname= event => {
    //     setLastname(event.target.value)
    // }

    // const InputHandlerUsername= event => {
    //     setUsername(event.target.value)
    // }

    // const InputHandlerPassword= event => {
    //     setPassword(event.target.value)
    // }
    
    return (
        //  <form onSubmit={handleClick}>
        <View style={myStyles.container}>
            <View style={myStyles.header}>
                <Text style={myStyles.text_header}>SignUp</Text>
            </View>
            <View style={myStyles.footer}>
                
                    <Text style={[myStyles.text_footer,{marginTop:10}]}>Firstname</Text>
                <View style={myStyles.action}>
                 <TextInput
                    placeholder="First Name"
                    style={myStyles.TextInput}
                    autoCapitalize="none"
                    maxLength={20}
                    keyboardType='name-phone-pad'
                    onChangeText={(e) => setFirstname(e.target.value)}
                 />
                 </View>

                 <Text style={[myStyles.text_footer,{marginTop:10}]}>Lastname</Text>
                <View style={myStyles.action}>
                 <TextInput 
                    placeholder="Last Name"
                    style={myStyles.TextInput}
                    autoCapitalize="none"
                    maxLength={20}
                    keyboardType='name-phone-pad'
                    onChangeText={(e) => setLastname(e.target.value)}
                 />
                 </View>
               
                

                <Text style={myStyles.text_footer}>Username</Text>
                <View style={myStyles.action}>
                 <TextInput
                    placeholder="Your Username"
                    style={myStyles.TextInput}
                    autoCapitalize="none"
                    maxLength={10}
                    onChangeText={(e) => setUsername(e.target.value)}
                 />
                 
                </View>

                <Text style={[myStyles.text_footer,{marginTop:10}]}>Password</Text>
                <View style={myStyles.action}>
                 <TextInput
                    placeholder="Your Password"
                    secureTextEntry={true}
                    style={myStyles.TextInput}
                    autoCapitalize="none"
                    maxLength={10}
                    onChangeText={(e) => setPassword(e.target.value)}
                 />
                </View>

                <View style={myStyles.botton}>
                    <View style={myStyles.singIn}>
                        <Button
                          style={myStyles.textSingIn}
                         title="SingUp"
                         color={'#009387'}
                         onPress={onSubmit}
                         />
                    </View>
                </View>
                <View style={myStyles.bottonUp}>
                    <View style={myStyles.singIn}>
                        <Text style={[myStyles.textSingIn,{color:"#009387"}]}>Cancle</Text>
                        {/* <Button
                            title= "API"
                        /> */}
                    </View>
                </View>
            </View>
        </View>
        //   </form>
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
      flex: 3,
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
      marginTop: 40,
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

export default SignUp