
import MyProgressBar from "./MyProgressBar";


const Services = () => {

    return (
        <div className="">
            <h1 data-aos="fade-down" className="text-center text-[52px] font-semibold mb-8 leading-normal uppercase text-teal-500">Services</h1>
            <div className="px-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div data-aos="fade-left" className="mt-8 ">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={90}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">HTML</h4>
                        </div>
                    </div>
                    <div  data-aos="fade-right" className="mt-8">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={85}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">CSS</h4>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="mt-8">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={75}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">JavaScript</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="mt-8">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={85}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">React</h4>
                        </div>
                    </div>
                    <div  data-aos="fade-left" className="mt-8">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={85}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">Firebase</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="mt-8">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={80}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">MongoDb</h4>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="mt-8">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={75}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">Express JS</h4>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="mt-8">
                        <div className="flex flex-col items-center">
                            <MyProgressBar percent={65}></MyProgressBar>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">Node JS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;