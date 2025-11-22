import { Clipboard } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      
      {/* Header */}
      <div className="px-10 py-8">
        <h1 className="text-white text-3xl font-bold tracking-wide">URL SHORTNER</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Paste your long URL and get a clean, shareable short link instantly.
        </p>
      </div>

      {/* Center Box */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl w-[380px] shadow-2xl">

          {/* Heading inside box */}
          <h2 className="text-white text-xl font-semibold mb-3">
            Shorten Your Link
          </h2>
          <p className="text-gray-400 text-sm mb-5">
            Fast • Secure • No sign-up required
          </p>

          {/* Input: Paste URL */}
          <div className="flex items-center gap-3 mb-4">
            <input
              type="text"
              placeholder="Paste your URL here..."
              className="flex-1 border border-gray-600 rounded-lg px-3 py-2 bg-gray-900 text-white outline-none placeholder-gray-400"
            />
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
              <Clipboard className="size-6 text-white" />
            </button>
          </div>

          {/* Shorten Button */}
          <button className="w-full py-2 mt-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition">
            Shorten URL
          </button>

       
          <div className="mt-6">
            <p className="text-gray-300 mb-2 text-sm">Your Shortened Link:</p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                readOnly
                placeholder="Short URL will appear here"
                className="flex-1 border border-gray-600 rounded-lg px-3 py-2 bg-gray-900 text-white outline-none placeholder-gray-500"
              />
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition">
                <Clipboard className="size-6 text-white" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
