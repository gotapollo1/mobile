import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import LoginScreen from './src/LoginScreen'
import SignUp from './src/SignUp'
import TestApi from './src/TestApi'
import Home from './src/Home'
import resultDetail from './src/component/resultDetail'
import ResultsList from './src/component/ResultsList'
import PlayerList from './src/component/PlayerList'
import Test from './src/component/Test'
import PlayerListScreen from './src/component/PlayerListScreen'


const navigator =  createStackNavigator(
  {
    Home : Home,
    TestApi:TestApi,
     
    PlayerList:PlayerListScreen,
    
   
    Player: PlayerList, 
    ResultsList:ResultsList,
   resultDetail:resultDetail
  // LoginScreen:LoginScreen
},
{
  initialRouterName: 'Home'
}
)

export default createAppContainer(navigator)
