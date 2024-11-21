import ResumeImg from '../assets/Resume.png';

export default function Resume() {
    return (
        <section id="resume" className="flex flex-col md:flex-row bg-primary px-5">
            <div className="py-5 flex justify-center md:justify-end md:w-1/2">
                <img className="w-[300px]" src={ResumeImg} alt="Resume" />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-4xl border-b-4 border-primary mb-5 w-[145px] font-bold">RESUME</h1>
                    <p className="pb-5">
                        YOU CAN VIEW MY RESUME 
                        <a href="/portfolio/Fiona.pdf" className="btn mt-5 md:mt-0 ml-2">Download</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
