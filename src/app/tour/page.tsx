export default function Home() {
    const  a="哈哈";
    function greet(name:string) {
      return `你好,tour，${name}！`;
    }
  
  
    
    return (
      <main> 
        <h1>
          {a} {greet('世界')}
        </h1>
        <div>
            <div className="bg-sky-50">0.5</div>
            <div className="bg-sky-100">1</div>
            <div className="bg-sky-200">2</div>
            <div className="bg-sky-300">3</div>
            <div className="bg-sky-400">4</div>
            <div className="bg-sky-500">5</div>
            <div className="bg-sky-600">6</div>
            <div className="bg-sky-700">7</div>
            <div className="bg-sky-800">8</div>
            <div className="bg-sky-900">9</div>
            <div className="bg-sky-950">9.5</div>
            <button className="bg-black hover:bg-amber-800 text-2xl font-extralight hover:font-extrabold text-yellow-400 p-3">
            button
            </button>
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
          <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
            <svg
              className="size-6 stroke-pink-700 dark:stroke-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </span>
            <div>
              <p className="text-gray-700 dark:text-gray-400">
                <span className="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in
                <span className="font-medium text-gray-950 dark:text-white">Logo redesign</span>
              </p>
              <time className="mt-1 block text-gray-500" dateTime="2025-02-23T09:37:00">9:37am</time>
            </div>
          </div>
          </div>
        </main>
    )
  }
  
  
  
  
  