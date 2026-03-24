import React from 'react'
import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JavaScript from '../img/javascript.png';
import TypeScript from '../img/typescript.png';
import ReactImg from '../img/react.png';
import Node from '../img/node.png';
import Python from '../img/python.png';
import CSharp from '../img/c#.png';
 import DotNet from '../img/NET core.png';
import PHP from '../img/php.png';
import FireBase from '../img/firebase.png';
import GitHub from '../img/github.png';
import Mongo from '../img/mongo.png';
import MySQL from '../img/MySQL.png';
// import PostgreSQL from '../img/PostgreSQL.png';
import Tailwind from '../img/Tailwind.png';
// import Bootstrap from '../img/bootstrap.png';
// import MaterialUI from '../img/materialui.png';
// import Figma from '../img/figma.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full text-gray-300 bg-[#0a192f] flex justify-center items-center py-16'>
            <div className='max-w-[1000px] p-4 flex flex-col justify-center mx-auto w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Skills
                    </p>
                    <p className='py-6'>&frasl; &frasl; Éstas son las tecnologías con las que trabajé.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TypeScript} alt="TypeScript icon" />
                        <p className='my-4'>TypeScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>React</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>Node.js</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                        <p className='my-4'>Python</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PHP} alt="PHP icon" />
                        <p className='my-4'>PHP</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSharp} alt="C# icon" />
                        <p className='my-4'>C#</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={DotNet} alt=".NET icon" />
                        <p className='my-4'>.NET</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
                        <p className='my-4'>MongoDB</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="Firebase icon" />
                        <p className='my-4'>Firebase</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MySQL} alt="MySQL icon" />
                        <p className='my-4'>MySQL</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind CSS icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className='my-4'>GitHub</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;