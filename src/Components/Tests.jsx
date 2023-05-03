import React from 'react'

export default function Tests() {

    const quizzes = [
        { name: 'PMA', description: 'Pakistan Military Academy', href: '#', image: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cXVpenxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
        { name: 'ECAT', description: 'Engineering Colleges Admission Test', href: '#', image: 'https://images.unsplash.com/photo-1585432959322-4db03962b004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHF1aXp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { name: 'MDCAT', description: 'Medical & Dental College Admission Test', href: '#', image: 'https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHF1aXp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { name: 'NAT', description: 'National Aptitude Test', href: '#', image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHF1aXp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { name: 'GAT', description: 'Graduate Assessment Test', href: '#', image: 'https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHF1aXp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
        { name: 'GK', description: 'General Knowledge', href: '#', image: 'https://images.unsplash.com/photo-1605902394069-ff2ae2430e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHF1aXp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
    ]

    return (
        <div className='m-10 grid gap-8 lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3'>
            {
                quizzes.map((test, ind) => {
                    return (
                        <div key={ind} className='border-transparent rounded-lg shadow-[10px_6px_24px_2px_rgb(0,0,0,0.12)] h-fit ease-in-out duration-500 delay-75 hover:shadow-xl hover:scale-105'>
                            <img className='rounded-t-lg h-56 w-full' src={test.image} alt='' />
                            <div className='m-3'>
                                <h3 className='text-xl font-semibold'>{test.name}</h3>
                                <span className='text-sm'>{test.description}</span>
                                <button className='block my-5 px-5 py-2 rounded-xl bg-sky-500 text-white font-semibold cursor-pointer'>Start Quiz</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
