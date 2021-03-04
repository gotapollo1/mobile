import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet,Image,Button,ImageBackground,SafeAreaView,ScrollView,TouchableOpacity,StatusBar } from 'react-native'
import useResult from './component/useResult'
import ResultsList from '../src/component/ResultsList'
import { set } from 'react-native-reanimated'
import { withNavigation } from 'react-navigation'
const Home = () => {
  // const [leage,setLeage] = useState('1')

  //  useEffect(()=>{
  //    <ResultsList/>
  //  },[])
    return(
        <View style={myStyle.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          style={myStyle.RecipeBackground}
          source={require("../src/background/footbal.jpeg")}
        >
          <SafeAreaView>
            <View style={myStyle.MainRecipe}>
              <View  style={{flexDirection:'row',alignItems:'center',}}>
              <Text style={myStyle.Text1}>Welcome</Text>
              {/* <TouchableOpacity onPress={() =>{navigation.navigate('MenuScreen')} }>
                 <Image style={myStyle.buttonmenu} source={require("../icons/plus.png")}></Image>
              </TouchableOpacity> */}
              </View>
              <View style={myStyle.Divider}></View>
              <Text style={myStyle.Text}>Dailys news football now !</Text>
              <Text style={myStyle.Text}>Team | Player | Match</Text>
            </View>
            <View style={myStyle.setSearchBar}>

            </View>
          </SafeAreaView>
        </ImageBackground>
        <View style={myStyle.RecipeContainer}>
          <ScrollView style={{ height: 420, width: 400, marginTop: -15 }}>
            <View style={myStyle.SearchDefaulButton}>
              <ScrollView style={myStyle.ScrollViewset} horizontal={true} >
                
                  <TouchableOpacity style={myStyle.BoxItems}>
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/ic1.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>Premier</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems}>
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/laliga.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>Laliga</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems}>
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/ic3.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>Bundes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems}>
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/France.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>France</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems} >
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/italy.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>Serie A</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems} >
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/ic2.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>Burger</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems}>
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/ic2.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>faafood</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems}>
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/ic3.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>fad</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  style={myStyle.BoxItems} >
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/ic3.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>fastfood</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={myStyle.BoxItems} >
                    <Image
                      style={myStyle.setIcons}
                      source={require("../src/icons/ic3.png")}
                    ></Image>
                    <Text style={myStyle.Settex}>ss</Text>
                  </TouchableOpacity>           
              </ScrollView>
            </View>
            <ResultsList
            id="2"
           />
            <View>
              {/* {newresult.api.teams.map((re)=>{
                  return(
                    <View>
                      <Text>
                        {re.name}
                      </Text>
                    </View>
                  )
              })} */}
              
            </View>
            
          </ScrollView>
        </View>
      </View>
    )
   
}

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  RecipeBackground: {
    width: "100%",
    height: 300,
  },
  MenuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  Back: {
    flexDirection: "row",
    alignItems: "center",
  },
  Text1: {
    color: "#e4e6e5",
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  Text: {
    color: "#fff",
    marginLeft: 10,
  },
  Settex:{
    color:"#333"
  },
  MainRecipe: {
    //   paddingBottom:32,
    //   marginTop: 200,
    //   marginBottom:32
  },
  Divider: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    width: 150,
    marginTop: 8,
    marginLeft: 10,
  },
  RecipeContainer: {
    width: "100%",
    marginTop: -32,
    padding: 32,
    backgroundColor: "#fff",
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  setSearchBar: {
    marginTop: 110,
  },
  SearchDefaulButton: {
    width: 400,
    height: 150,
    backgroundColor: "#212121",
    borderRadius: 20,
    alignItems: "center",
  },
  setIcons: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  BoxItems: {
    width: 60,
    height: 70,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 10,

  },
  ScrollViewset:{

    width:385,
    paddingTop:25
    // backgroundColor:"#0066ff"

  }
  ,MenuiconsSize:{
    width:25,
    height:25
  }
  ,buttonmenu :{
width:25,
height:25,
marginLeft:240
// backgroundColor:'#e4e6e5'

  }
});

export default withNavigation(Home)