"use client"

import { Query, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const getUrl = (id:string) => {
  return useQuery({
    queryKey : ["url",id],
    queryFn : async () => {
      if (!id) return null ;

        const res = await axios.get(`${process.env.NEXT_PUBLIC_DEFAULT_URL}/api/redirect?_id=${id}`)
        return res.data.data 
    },
    enabled : !!id ,   
  })
}

  export const useCreateUrl = () => {
    const queryclient = useQueryClient()
    
    return useMutation({
        mutationFn : async (url:string) => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_DEFAULT_URL}/api/shorten`,{url})
            return res.data.data
        },
        onSuccess : ()=>{
            queryclient.invalidateQueries({queryKey : ["url"]})
        }
    })
  }
  

