  "use client";

  import { Clipboard ,Copy } from "lucide-react";
  import {useState} from 'react'
  import {getUrl, useCreateUrl} from '@/app/hooks/UseUrlQuery';

  export default function UrlForm () {

    const [originalUrl, setoriginalUrl] = useState("");
    const [shortUrl, setshortUrl] = useState("");
    // const [textValue, settextValue] = useState<string>("");

    const createUrl = useCreateUrl()
    

    const handleSubmit = (e : React.FormEvent)=> {
      e.preventDefault();
      if(!originalUrl.trim()) return ;

      createUrl.mutate(originalUrl,{
        onSuccess : (data : any)=>{
          setshortUrl(data.shortUrl)
        }
      })
      setoriginalUrl("")
    }

    const handleCopy =async()=>{
      const generatedUrl = `${process.env.NEXT_PUBLIC_DEFAULT_URL}/api/redirect/${shortUrl}`

      try {
        await navigator.clipboard.writeText(generatedUrl)
        console.log("text copied :",generatedUrl)
      } catch (error) {
        console.log("error in copying",error)
      }
    }

    return (
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex justify-center items-center ">
          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl w-[380px] shadow-2xl">

          
            <h2 className="text-white text-xl font-semibold mb-3">
              Shorten Your Link
            </h2>
            <p className="text-gray-400 text-sm mb-5">
              Fast • Secure • No sign-up required
            </p>

          
            <div className="flex items-center gap-3 mb-4">
              <input
                type="text"
                onChange={(e)=>setoriginalUrl(e.target.value)}
                value={originalUrl } 
                placeholder="Paste your URL here..."
                className="flex-1 border border-gray-600 rounded-lg px-3 py-2 bg-gray-900 text-white outline-none placeholder-gray-400"
                onKeyDown={(e)=>{
                  if (e.key === "Enter")handleSubmit(e)
                }}
              />
              <button className=" p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
                <Clipboard 
                className="size-6 text-white cursor-pointer"/>
                
              </button>
            </div>

          
            <button 
            onClick={handleSubmit}
            className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition">
              Shorten URL
            </button>

        
            <div className="mt-6">
              <p className="text-gray-300 mb-2 text-sm">Your Shortened Link:</p>
              
              {shortUrl && (
                <div className="flex items-center gap-3">
                <p  className="flex-1 border border-gray-600 rounded-lg px-3 py-2 bg-gray-900 text-white outline-none placeholder-gray-400 break-all">
                 <span className="text-blue-400">{`${process.env.NEXT_PUBLIC_DEFAULT_URL}/api/redirect/${shortUrl}`}</span>
                </p>
              
                <button onClick={handleCopy} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
                  <Copy className="size-6 text-white cursor-pointer " />
                </button>
              </div>
              )}
            
            </div>

          </div>
        </div>

      </div>
    )
  }



