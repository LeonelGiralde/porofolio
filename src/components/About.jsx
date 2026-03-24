import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600' >
                            Sobre mi
                        </p>
                    </div>
                    
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text right text-4xl font-bold'>
                        <p>Hola! Soy Leo, un gusto conocerte. Aca vas a poder conocer un poco mas sobre mi</p>
                    </div>
                    <div>
                        <p>
                            Me apasiona crear software de calidad que aporte valor real y mejore la vida de quienes lo utilizan. Actualmente estoy cursando la Licenciatura en Sistemas en la Universidad Nacional de La Plata (UNLP) mientras desarrollo mi carrera profesional como Full Stack Developer, trabajando en el desarrollo y mantenimiento de aplicaciones y plataformas web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About