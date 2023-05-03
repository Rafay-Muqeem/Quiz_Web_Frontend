import React, { useState } from 'react'
import { ReactComponent as AR } from '../Images/AR_Tech_White.svg'

export default function LogIn() {

    const [signInEmail, setSignInEmail] = useState("");
    const [signInPass, setSignInPass] = useState("");

    return (
        <div className="bg-white">
            <div className='mx-auto w-96 h-[70vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-fuchsia-700 rounded-md p-6 flex flex-col justify-start shadow-[10px_6px_24px_2px_rgb(0,0,0,0.12)]'>
                <AR className='h-36 w-36 self-center'/>
                <h1 className='mb-2 text-white text-2xl text-center font-medium font-sans'>LOG IN</h1>
                <input className='font-sans h-fit my-3 py-2.5 pb-1 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-gray-100 focus:outline-none focus:ring-0 placeholder:text-gray-300' type="email" value={signInEmail} placeholder="Email" onChange={(e) => setSignInEmail(e.target.value)} autoFocus />
                <input className='font-sans h-fit my-3 py-2.5 pb-1 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-gray-100 focus:outline-none focus:ring-0 placeholder:text-gray-300' type="password" value={signInPass} placeholder="Password" onChange={(e) => setSignInPass(e.target.value)} />
                <button className='w-fit my-3 px-5 py-1 bg-white rounded-md text-slate-800 text-wrap font-semibold cursor-pointer'>Login</button>
            </div>
        </div>
    )
}
