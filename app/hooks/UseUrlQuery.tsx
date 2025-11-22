"use client"

import { Query, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const getUrl = () => {
  return useQuery({
    queryKey : ["url"],
    queryFn : async () => {

        const res = await axios.get(`${process.env.NEXT_PUBLIC_DEFAULT_URL}/api/shorten`)
        return res.data
    }
  })
}

  export const useCreateUrl = () => {
    const queryclient = useQueryClient()
    
    return useMutation({
        mutationFn : async (url:string) => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_DEFAULT_URL}/api/Redirect`,{url})
            return res.data
        },
        onSuccess : ()=>{
            queryclient.invalidateQueries({queryKey : ["url"]})
        }
    })
  }
  

