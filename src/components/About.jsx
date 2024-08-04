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
                        <p>Me apasiona crear software excelente que mejore la vida de quienes me rodean. 
                            Actualmente, estoy cursando la carrera de Analista Programador en la Universidad Nacional de La Plata (UNLP)
                             y trabajando en mis primeros proyectos. Me especializo en crear software para una variedad de clientes, 
                             desde particulares hasta pequeñas empresas. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About