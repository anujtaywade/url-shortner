
"use client";
import UrlForm from '@/app/components/urlForm';

export default function Home() {


  const handleSubmit=()=>{
    

  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      
     
      <div className="px-10 py-8">
        <h1 className="text-white text-3xl font-bold tracking-wide">URL SHORTNER</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Paste your long URL and get a clean, shareable short link instantly.
        </p>
      </div>

     
      <UrlForm/>
    </div>
  );
}
