import React from 'react'
import AnimateOnScroll from './common/AnimateOnScroll'

function Analysis() {
  return (
    <div className='w-[100vw]  flex flex-col m-2'>
        <div className='w-[100vw] h-[5vh] flex justify-center '>
        <h1 className='text-3xl text-white font-bold w-[40vw] border-2 text-center h-full bg-black'>
            Analysis</h1>
        </div>
        {/* Total Releases */}
        <AnimateOnScroll>
        <div className='m-3'>
            <h1 className='text-xl font-extrabold underline'>TRI Advanced Visualizations</h1>
            <h1 className='mt-2 text-lg font-extrabold underline'>
                Total Releases by Feature
            </h1>
            <div className='flex flex-wrap'>
            This bar chart breaks down the total quantity of waste releases by specific environmental media or disposal method, such as air, water, underground, and land disposal.
            </div>
            <div className='ml-10 mt-4'>
                <ul>
                    <li className=' list-disc'>Other Disposal' and 'Other Surface I' dominate the release categories, indicating these are the most frequently used or voluminous methods of disposal.</li>
                    <li className=' list-disc'>Stack air and water releases also account for substantial amounts, reflecting common air and wastewater discharge routes.</li>
                    <li className=' list-disc'>Lesser categories like 'Land Treatment' and 'Underground C I-IV' are used sparingly.</li>
                </ul>
            </div>
            <div className=' mt-4 flex justify-center items-center'>
              <img className='w-[80vw] h-[50vh]' src="src\components\assets\Disposal.png" alt="" />  
            </div>
        </div>
        </AnimateOnScroll>
        {/* Correlation Matrix  */}
        <AnimateOnScroll>
        <div className='m-3'>
            <h1 className='mt-2 text-lg font-extrabold underline'>
            Correlation Matrix of Selected Metrics
            </h1>
            <div className='flex flex-wrap'>
            This heatmap shows pairwise correlations between key numeric variables in the TRI dataset, such as latitude, release quantities, and total waste figures.
            </div>
            <div className='ml-10 mt-4'>
                <ul>
                    <li className=' list-disc'>Strong correlation (1.0) is observed between 'TOTAL RELEASES' and 'ON-SITE RELEASE TOTAL', as expected.</li>
                    <li className=' list-disc'>Minimal correlation exists between location (latitude/longitude) and release quantities.</li>
                    <li className=' list-disc'>Fugitive and Stack air releases show weak but positive association (~0.10), suggesting some operational linkage.</li>
                </ul>
            </div>
            <div className=' mt-4 flex justify-center items-center'>
              <img className='w-[80vw] h-[60vh]' src="src\components\assets\Matrix.png" alt="" />  
            </div>
        </div>
        </AnimateOnScroll>

        {/*  Recycling Methods*/}
        <AnimateOnScroll>
        <div className='m-3'>
            <h1 className='mt-2 text-lg font-extrabold underline'>
            Proportion of Recycling Methods
            </h1>
            <div className='flex flex-wrap'>
            This pie chart illustrates the share of total recycling activities split between on-site and off-site methods.
            </div>
            <div className='ml-10 mt-4'>
                <ul>
                    <li className=' list-disc'>A large majority (85.8%) of recycling occurs on-site, implying that facilities prefer or are equipped to process materials internally.</li>
                    <li className=' list-disc'>Off-site recycling makes up only 14.2%, potentially due to logistic, economic, or regulatory reasons.</li>
                    <li className=' list-disc'>This breakdown assists in evaluating efficiency and infrastructure for sustainable waste handling.</li>
                </ul>
            </div>
            <div className=' mt-4 flex justify-center items-center'>
              <img className='w-[50vw] h-[60vh]' src="src\components\assets\Recycle.png" alt="" />  
            </div>
        </div>
        </AnimateOnScroll>


        {/* Fugitive Air & Stack Air with Trend Line */}
        <AnimateOnScroll>
        <div className='m-3'>
            <h1 className='mt-2 text-lg font-extrabold underline'>
            Fugitive Air vs. Stack Air with Trend Line
            </h1>
            <div className='flex flex-wrap'>
            This scatter plot compares the quantities of fugitive air emissions with stack air emissions across facilities, overlaid with a linear regression line.
            </div>
            <div className='ml-10 mt-4'>
                <ul>
                    <li className=' list-disc'>The data shows clustering near the lower release values, with a few high-emission outliers.</li>
                    <li className=' list-disc'>The red line (Best Fit: y = 0.10x + 5204.64) indicates a modest positive linear trend.</li>
                    <li className=' list-disc'>This means facilities releasing more fugitive air tend to also emit more stack air, possibly due to overall process volume.</li>
                </ul>
            </div>
            <div className=' mt-4 flex justify-center items-center'>
              <img className='w-[80vw] h-[50vh]' src="src\components\assets\TrendLine.png" alt="" />  
            </div>
        </div>
        </AnimateOnScroll>
    </div>
  )
}

export default Analysis
