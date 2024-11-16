import recipe from '../assets/recipe.png'
import pr1 from '../assets/class.png'
import blog from '../assets/blog.png'

export default function Projects(){
     return <section id='projects' className='flex flex-col py-20 px-5 justify-center bg-secondary text-white'>
        <div className='w-1/2'>
         <div className="flex justify-center">
         <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[142px] font-bold'>
            projects
           </h1>
         </div>
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>

                <div className="relative">
                <img className='h-[200px] w-[500px]' src={recipe}/>
                <div className="project-desc">
                    <p className="text-center px-5 py-5">
                        A RECIPE APP
                    </p>
                </div>
                </div>


                <div className="relative">
                <img className='h-[200px] w-[500px]' src={pr1}/>
                <div className="project-desc">
                    <p className="text-center px-5 py-5">
                        A CLASSROOM BOOKING WEBSITE
                    </p>
                </div>
                </div>


                <div className="relative">
                <img className='h-[200px] w-[500px]' src={blog}/>
                <div className="project-desc">
                    <p className="text-center px-5 py-5">
                        A PERSONAL BLOG
                    </p>
                </div>
                </div>


            </div>
        </div>
     </section>
}