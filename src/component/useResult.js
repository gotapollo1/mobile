import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import footbal from '../api/footbal'

export default () =>{
    const [results , setResults] = useState([])
    const [errorMesasge, setErrorMessage] = useState('')

    const getApi = async () => {
        try {
            const response = await footbal.get('/2',{
               
            })
            setResults(response.data.api)
            
        } catch (error) {
            setErrorMessage('Something')
            
        }
    }

    useEffect(()=>{
        getApi()
    },[])
    return [getApi,results,errorMesasge]
}