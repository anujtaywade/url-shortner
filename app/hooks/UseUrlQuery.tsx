import { Query, useQuery } from "@tanstack/react-query"
import axios from "axios"

export const getUrl = () => {
  return useQuery({
    queryKey : ["url"],
    queryFn : async () => {
        const res = await axios.get("/api/shorten")
        return res.data
    }
  })
}
