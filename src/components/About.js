import AboutImg from '../assets/about.png'

export default function About(){
    return <section id='about' className='flex flex-col md:flex-row bg-primary px-5 '>
        <div className='md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
             <p className='pb-5'>Hi, I'm FIONA JORES MARSHAL, an aspiring full-stack developer learning Django, React, React Native, and Node.js. I'm passionate about building responsive web and mobile applications while continuously expanding my skills. Eager to apply my growing knowledge to real-world projects and collaborate with like-minded developers.</p>
            <p className='pb-5'>When I'm not coding, I'm diving into new technologies, contributing to open-source, and constantly expanding my full-stack knowledge. I'm driven by a passion for learning, always excited to tackle new challenges and evolve as a developer.</p>         
            </div>
        </div>
    </section>
}