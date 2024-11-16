import HeroImg from '../assets/hero.png'
import { FaXTwitter,FaLinkedin,FaSquareGithub} from "react-icons/fa6";


export default function Hero(){
   const config={
    substitle:"Im a MERN STACK developer",
   }

    return <section id='hero' className='flex flex-col md:flex-row px-5 py-24 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-6xl font-hero-font'>Hi,<br/>Im <span className='text-black'>FIONA</span>
        <p className='text-2xl'>{config.substitle}</p>
       </h1>
       <div className='flex py-10'>
        <a href='#'className='pr-5 hover:text-white'><FaXTwitter size={30}/></a>
        <a href='#'className='pr-5 hover:text-white'><FaLinkedin size={30}/></a>
        <a href='#' className='hover:text-white'><FaSquareGithub size={30}/></a>

       </div>
        </div>
       <img className='md:w-1/4' src={HeroImg}/>
    </section>
}