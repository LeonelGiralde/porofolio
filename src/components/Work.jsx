import React from 'react';
import Encriptador from '../img/encriptador.jpeg';
import Hospedaje from '../img/hospedaje.jpeg';


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center '>
            <div className='max-w-[1000px] p-4  flex flex-col justify-center  mx-auto w-full  '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Porfolio
                    </p>
                    <p className='py-6'>&frasl; &frasl;Estos son algunos de mis trabajos recientes.</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Hospedaje})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Hospedaje
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://hospedaje-centro.vercel.app/' target="_blank"rel="noreferrer" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                                <a href='https://github.com/LeonelGiralde/hospedajeCentro' target="_blank"rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Codigo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Encriptador})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Encriptador
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://encriptador-umber.vercel.app/' target="_blank"rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Link
                                    </button>
                                </a>
                                <a href='https://github.com/LeonelGiralde/encriptador' target="_blank"rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Codigo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    
                </div>
            </div>
        </div>
    );
};

export default Work;