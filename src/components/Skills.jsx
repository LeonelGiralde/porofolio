import React from 'react'
import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JavaScript from '../img/javascript.png';
import ReactImg from '../img/react.png';
import Node from '../img/node.png';
import FireBase from '../img/firebase.png';
import GitHub from '../img/github.png';
// import AWS from '../img/aws.png';
// import Mongo from '../img/mongo.png';


const Skills = () => {
    return (
        <div name='skills' className='w-full md:h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center '>
            <div className='max-w-[1000px] p-4  flex flex-col justify-center  mx-auto w-full  '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Skills
                    </p>
                    <p className='py-6'>&frasl; &frasl; These are the technologies I've worked with.</p>
                </div>

                {/* Container */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center '>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>                     <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>NODE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="FireBase icon" />
                        <p className='my-4'>FIREBASE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};


export default Skills