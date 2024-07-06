import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div id="/About" className=" ">
            <h2 data-aos="fade-down" className="text-[52px] font-semibold
             mb-8 leading-normal uppercase text-teal-500 text-center">CONTACT ME </h2>
            <div  className="flex flex-col  sm:flex-row justify-center items-center lg:gap-36 mb-10  p-5 rounded sm:p-8 md:p-10 lg:p-12 xl:p-16">
                <div data-aos="fade-left" className="space-y-2">
                    <p className="text-xl bg-primary text-white font-bold
                 border-dashed border-2 p-5 rounded">akashghosh12300@gmail.com</p>
                    <p className="text-xl bg-primary text-white font-bold
                 border-dashed border-2 p-5 rounded">01303136965</p>
                    <p className="text-xl bg-primary text-white font-bold
                 border-dashed border-2 p-5 rounded"> Khulna,Bangladesh </p>
                  
                </div>


                <div >
                    <ContactForm/>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="form-control ">
                            <label className="label">
                               
                            </label>
                            <input type="text" name="food_name" className=" text-white input input-bordered bg-gray-700" placeholder="Enter Your Name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                               
                            </label>
                            <input type="email" name="email" placeholder="Enter Your email " className="input input-bordered bg-gray-700" required />
                        </div>
                       
                       



                    </div>
                    <div className="form-control">
                        <label className="label">
                           
                        </label>
                        <textarea className="textarea textarea-info h-44 bg-gray-700" placeholder="Write Your Message....."></textarea>

                    </div>
                    <div className="mt-4">
                        <button className="btn btn-outline btn-primary">Submit</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;