import React from 'react'
import AnimateOnScroll from './common/AnimateOnScroll'

function Overview() {
  return (
    <div className='w-[100vw] flex flex-col m-2'>

     {/* Overview */}
     <div className='w-[100vw] h-[5vh] mb-4 flex justify-center'>
      <h1 className='text-3xl  text-white font-bold w-[40vw] border-2 text-center h-full bg-black'>
        Overview</h1>
     </div>
     <div>
      <div className='m-5'>
      The Toxic Release Inventory (TRI) is a comprehensive database maintained by the U.S. Environmental Protection Agency (EPA) that tracks the management of certain toxic chemicals that may pose a threat to human health and the environment. This section provides an in-depth breakdown of the TRI dataset by geography, facilities, and chemicals, helping users understand how toxic release data varies across the country.
      This overview aims to give users an interactive, data-driven summary of the distribution of toxic releases across different U.S. regions and sectors.
      </div>
      <div className='m-5'>
          <div>
            <AnimateOnScroll>
            <div className='flex'>
              <div className='w-[50vw]'>
              <h1 className=' text-lg font-extrabold underline'>Top Chemicals Reported</h1>
               This chart highlights the ten most frequently reported toxic chemicals under the TRI system. These substances are the most common across all reporting facilities, indicating their widespread industrial usage and environmental footprint.
               <div className='mt-3  text-lg font-extrabold underline'>
                Key Insights
               </div>
               <div>
                <ol className='mx-5 mt-3'>
                  <li className=' list-disc'>Lead tops the list, signaling major public health and environmental risk.</li>
                  <li className=' list-disc'>Zinc compounds, Nickel, and Chromium also show high frequency, often associated with metal processing industries.</li>
                  <li className=' list-disc'>Nitrate compounds appear due to their water-soluble nature and agricultural runoff.</li>
                </ol>
               </div>
               <div className='text-lg font-extrabold underline mt-3'>
                Implication
               </div>
               <div>
               These chemicals should be prioritized for mitigation strategies, public awareness campaigns, and stricter emission thresholds.
               </div>
              </div>
              <div className='w-[50vw] flex justify-center ml-2'>
                <img src="src\components\assets\Chemicals.png" className=' w-[50vw] h-100'/>
              </div>
            </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll>
          <div className='flex pt-5'>
              <div className='w-[50vw] flex justify-center'>
                <img src="src\components\assets\Facilities.png" className=' w-300 h-100'/>
              </div>
              <div className='w-[50vw] ml-2'>
              <h1 className='text-lg font-extrabold underline'>Top Facilities by Total Waste Released</h1>
              This chart ranks the ten facilities responsible for the highest total chemical waste releases (both on-site and off-site).
               <div className='text-lg mt-3 font-extrabold underline'>
                Key Insights
               </div>
               <div>
                <ol className='mx-5 mt-3'>
                  <li className=' list-disc'>Red Dog Operations is an outlier with exceptionally high waste volumes.</li>
                  <li className=' list-disc'>Multiple entries from Nevada Gold Mines LLC suggest a regional concentration of large-scale mining operations.</li>
                  <li className=' list-disc'>The presence of power plants and copper smelters points to heavy extractive industries as major polluters.</li>
                </ol>
               </div>
               <div className='text-lg font-extrabold underline mt-3'>
                Implication
               </div>
               <div>
               These facilities represent focal points for regulatory monitoring, sustainability audits, and community health risk assessments.
               </div>
            </div>
          </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
          <div className='flex pt-5'>
              <div className='w-[50vw]'>
              <h1 className='text-lg font-extrabold underline'>Top States by Total Waste Released</h1>
              This chart shows which U.S. states accounted for the most chemical waste releases overall.
               <div className='text-lg mt-3 font-extrabold underline'>
                Key Insights
               </div>
               <div>
                <ol className='mx-5 mt-3'>
                  <li className=' list-disc'>Alaska (AK) and Nevada (NV) lead due to massive industrial operations, particularly in mining and resource extraction.</li>
                  <li className=' list-disc'>Texas (TX) and Utah (UT) follow closely, driven by energy production and refining.</li>
                  <li className=' list-disc'>The chart reflects state-level environmental pressure points.</li>
                </ol>
               </div>
               <div className='text-lg font-extrabold underline mt-3'>
                Implication
               </div>
               <div>
               Policy frameworks must be adapted for high-risk states to handle permitting, waste containment, and emergency preparedness.
               </div>
              </div>
              <div className='w-[50vw] flex justify-center ml-2'>
                <img src="src\components\assets\States.png" className=' w-[50vw] h-100'/>
              </div>
            </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
            <div className='flex pt-5'>
              <div className='w-[50vw] flex justify-center'>
                <img src="src\components\assets\Frequency.png" className=' w-300 h-100'/>
              </div>
              <div className='w-[50vw] ml-2'>
                <h1 className='text-lg font-extrabold underline'>Top Chemicals by Frequency</h1>
                This chart displays the most commonly appearing chemicals across all records, giving a broader sense of environmental exposure patterns.
               <div className='text-lg mt-3 font-extrabold underline'>
                Key Insights
               </div>
               <div>
                <ol className='mx-5 mt-3'>
                  <li className=' list-disc'>Lead appears again, validating its dominance in both volume and frequency.</li>
                  <li className=' list-disc'>Chemicals like Ammonia, Methanol, and Toluene point to wide industrial use beyond heavy metal operations.</li>
                  <li className=' list-disc'>The chart reinforces which substances are most prevalent in national reporting.</li>
                </ol>
               </div>
               <div className='text-lg font-extrabold underline mt-3'>
                Implication
               </div>
               <div>
               Even if some chemicals are not released in the highest amounts, their widespread use and reporting frequency make them crucial for regulation and public disclosure.
               </div>
               
            </div>
            
            
          </div>
          </AnimateOnScroll>
      </div>
      
     </div>
     {/* <div className='w-[100vw] h-[5vh] flex border-t-2'>
      <h1 className='text-xl text-white font-bold w-[40vw] border-2 text-center h-full bg-black'>
        Analysis</h1>
     </div>
     <div className='w-[100vw] h-[5vh] flex justify-end'>
      <h1 className='text-xl text-white font-bold w-[40vw] border-2 text-center h-full bg-black'>
        Outcome</h1>
     </div>
      */}
    </div>
  )
}

export default Overview
