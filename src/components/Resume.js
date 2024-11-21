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
                    <p className="pb-5 flex flex-col md:flex-row items-center md:items-center justify-center">
                        YOU CAN VIEW MY RESUME
                        {/* Correct link for download */}
                        <a href={`${process.env.PUBLIC_URL}/Fiona.pdf`} className="btn ml-2 mt-2 w-[120px]" download>
    Download
</a>

                    </p>
                </div>
            </div>
        </section>
    );
}
