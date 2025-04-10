import React from 'react'
import Workflow from './assets/Workflow.png'

function About() {
  return (
    <div className=' m-2 pb-10'>
        <div className='w-[100vw] h-[5vh] flex justify-center'>
        <h1 className='text-3xl text-white font-bold w-[40vw] border-2 text-center h-full bg-black'>
            About</h1>
        </div>
        <div className='m-5'>
                <h1 className='text-xl font-extrabold underline'>Project Details</h1>
                <h1 className='mt-3 text-lg font-extrabold underline'> Objective</h1>
                <div>
                The primary objective of this project is to explore, visualize, and predict toxic chemical release patterns across various states, cities, and industrial facilities in the United States using historical data from the Toxic Release Inventory (TRI). This dataset, maintained by the U.S. Environmental Protection Agency (EPA), provides comprehensive information about the types, quantities, and sources of hazardous chemicals released into the air, water, and land by industrial facilities.
                </div>
                <div>
                    <h1 className='mt-2 text-lg font-extrabold underline'>Goals</h1>
                    <ul className=' mt-2'>
                        <li className='ml-10 list-disc'>To identify geographical hotspots (states and cities) where toxic releases are significantly high.</li>
                        <li className='ml-10 list-disc'>To recognize the top polluting facilities and the industries they belong to.</li>
                        <li className='ml-10 list-disc'>To use exploratory data analysis (EDA) and visualizations to find patterns and trends over time.</li>
                        <li className='ml-10 list-disc'>To implement machine learning models that can predict future toxic release quantities based on historical data.</li>
                        <li className='ml-10 list-disc'>To present findings in a user-friendly web interface, making the information accessible to researchers, students, and environmental planners.</li>
                    </ul>
                    <div className='mt-3'>
                    By achieving these objectives, the project aims to support environmental awareness, contribute to sustainable development goals (SDGs), and offer insights that can be used in regulatory decision-making and pollution control strategies.
                    </div>
                    <div>
                        <h1 className='mt-2 text-lg font-extrabold underline'>Dataset Overview</h1>
                        <ul className=''>
                            <li className='ml-10 list-disc'><span className=' font-bold'> Source:</span> United States Environmental Protection Agency (EPA).</li>
                            <li className='ml-10 list-disc'><span className=' font-bold'>Years Covered:</span> 2018–2023</li>
                            <li className='ml-10 list-disc'><span className=' font-bold'>Records:</span> Includes information on facilities, chemicals, locations, industries, and release quantities.</li>
                        </ul>
                    </div>
                    {/* Project Workflow */}
                    <div>
                        <h1 className='mt-2 text-lg font-extrabold underline'>Project Workflow</h1>
                        <div className='flex gap-10'>
                            <div>
                                <ul className=''>
                                    <li className='ml-10 list-decimal font-bold text-lg'>Data Cleaning</li>
                                    <ul><li className='ml-20 list-disc'>Removing missing values, formatting columns, standardizing units.</li></ul>
                                    <li className='ml-10 list-decimal font-bold text-lg'>Exploratory Data Analysis (EDA)</li>
                                    <ul>
                                        <li className='ml-20 list-disc'>Identifying top states, cities, and chemicals.</li>
                                        <li className='ml-20 list-disc'>Understanding distribution patterns.</li>
                                    </ul>
                                    <li className='ml-10 list-decimal font-bold text-lg'>Visualization</li>
                                    <ul><li className='ml-20 list-disc'>Creating interactive and static charts using Python and BI tools.</li></ul>
                                    <li className='ml-10 list-decimal font-bold text-lg'>Machine Learning</li>
                                    <ul><li className='ml-20 list-disc'>Predicting future TRI chemical releases using regression models.</li></ul>
                                    <li className='ml-10 list-decimal font-bold text-lg'>Web Deployment</li>
                                    <ul><li className='ml-20 list-disc'>Hosting the results on an interactive website for easy access.</li></ul>
                                </ul>
                            </div>
                            <div className='flex'>
                                <img className='w-[35vw] h-[25vw]' src={Workflow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
