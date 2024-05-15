import React from 'react'

function Lasthero() {
    const myStyle = {
        backgroundColor: '#ff0000'
      };
    return (
        <>

            <div className='pt-10'>
                <div className=' p-6 max-w-xl mx-auto flex gap-4 items-center space-x-4'>
                    <div>
                        <div className='text-xl font-medium'>
                            <h6 className='text-bold text-black'>PREPARE FOR TAKEOFF</h6>
                            <h3 className='text-black text-bold  text-2xl'>Looking for business opportunity?</h3>
                        </div>
                    </div>

                    <div>
                       <button className='p-3  text-white' style={myStyle}>Get Started</button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Lasthero