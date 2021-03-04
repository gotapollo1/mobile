import axios from 'axios'

export default axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2/teams/league/2',
    headers: {
        Authorization: 'Bearer 8103865654msh41d3b7b3e37b296p1ba609jsnea64089c252e '
    }
    
})