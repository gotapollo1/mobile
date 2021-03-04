import axios from 'axios'

export default axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2/teams/league',
    headers: { 
        'x-rapidapi-key': '8103865654msh41d3b7b3e37b296p1ba609jsnea64089c252e',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
})