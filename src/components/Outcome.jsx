import React from 'react'

function Outcome() {
  return (
    <div>
        <div className='bg2 flex justify-center items-center'>
            <div className=' bg-white/1 backdrop-blur-sm border-2 border-white w-[70vw] h-[40vh]'>
                <h1 className=' text-white p-3 mt-4'>
                    A Data-Driven Approach to Environmental Insights,
                    This project successfully utilized advanced data analysis and machine learning techniques to analyze toxic release trends across the U.S. Toxics Release Inventory (TRI). By employing tools like predictive modeling, data visualization, and statistical exploration, the study achieved the following key outcomes.
                </h1>
                <ul>
                    <li className=' ml-10 list-disc mt-2 text-white'><span className='font-extrabold'>Identification of Top Contributors:</span> The project pinpointed industries and facilities with the highest toxic waste outputs, enabling targeted interventions.
                    </li>
                    <li className=' ml-10 list-disc mt-2 text-white'><span className='font-extrabold'>Geographic and Chemical Trends:</span>Leveraging machine learning models, such as regression analysis, yielded strong performance metrics with an R² score of 0.91, demonstrating reliable predictions for future toxic releases.
                    </li>
                    <li className=' ml-10 list-disc mt-2 text-white'><span className='font-extrabold'>Predictive Accuracy:</span> Insights from the analysis provide actionable guidance for policymakers to enhance environmental regulations and enforcement.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Outcome
