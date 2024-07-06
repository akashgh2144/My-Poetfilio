import React from 'react';
// import img1 from '../assets/food-shearing.png'
// import img2 from '../assets/matrimony.png'
import img3 from '../assets/Justdial.jpg'
const Projects = () => {
    return (
        <div className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos="fade-right" className="text-center text-[52px] font-semibold mb-8 leading-normal uppercase text-teal-500">PROJECTS</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                {/* <div className="card card-compact shadow-xl rounded-3xl relative overflow-hidden border-2  border-teal-500">
                    <figure className="card-img">
                        <img data-aos="fade-up" src={img2} alt="Shoes" className="w-full h-[200px] object-cover" />
                    </figure>
                    <div className="card-overlay flex flex-col items-center justify-center text-center bg-white bg-opacity-90 p-6 rounded-md absolute inset-0 opacity-0 transform transition-all ease-in-out">
                        <h2 className="card-title text-xl font-semibold mb-2 text-teal-500">Matrimonial</h2>
                        <a href="https://assignment-12-af6c7.web.app/"><button className="btn btn-secondary ">View</button></a>
                    </div>
                </div>
                <div className="card card-compact shadow-xl rounded-3xl relative overflow-hidden  border-2  border-teal-500">
                    <figure className="card-img">
                        <img data-aos="fade-down" src={img1} alt="Shoes" className="w-full h-full object-cover " />
                    </figure>
                    <div className="card-overlay flex flex-col items-center justify-center text-center bg-white bg-opacity-90 p-6 rounded-md absolute inset-0 opacity-0 transform transition-all ease-in-out">
                        <h2 className="card-title text-xl font-semibold mb-2 text-teal-500">Food Donation</h2>
                        <a href="https://communit-food-sharing.web.app/"><button className="btn btn-secondary ">View</button></a>
                    </div>
                </div> */}

                <div className="card card-compact shadow-xl rounded-3xl relative overflow-hidden border-2  border-teal-500">
                    <figure className="card-img">
                        <img data-aos="fade-up" src={img3} alt="Shoes" className="w-full h-full object-cover" />
                    </figure>
                    <div className="card-overlay flex flex-col items-center justify-center text-center bg-white bg-opacity-90 p-6 rounded-md absolute inset-0 opacity-0 transform transition-all ease-in-out">
                        <h2 className="card-title text-xl font-semibold mb-2 text-teal-500">Car Brand Shop </h2>
                        <a href="https://barnd-shop.web.app/"><button className="btn btn-secondary ">View</button></a>
                    </div>
                </div>
                {/* Add more cards as needed */}
            </div>
        </div>
    );
};

export default Projects;
