import React from 'react'

function Pcard(props) {

    return (
        <>



            <div className="card p-3   hover:mx-0 hover:shadow-lg hover:my-0 mx-1 my-2">

                <img src={props.src} className="" alt="..." />
                <div className='p-6 max-w-sm mx-auto bg-red-600 text-white  shadow-lg flex items-center space-x-4'>
                    <div>
                        <img className='h-14 w-14' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Physics_wallah_logo.jpg/600px-Physics_wallah_logo.jpg' />
                    </div>
                    <div>
                        <div className='text-xl font-medium'>
                            {props.name}
                            <p className='text-white text-base ml-5'>{props.field}</p>
                        </div>
                    </div>
                </div>

                <div className='mt-5 bg-white shadow-lg'>
                    <p className='text-base text-slate-400'>{props.para}</p>
                   <button className='text-red-600 mt-5'>Veiw Details</button>
                </div>

            </div>




        </>
    )
}

export default Pcard