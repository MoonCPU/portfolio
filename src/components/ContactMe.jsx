import {React, useRef} from "react";
import { AiOutlineMail } from "react-icons/ai";

const ContactMe = () => {

    function sendEmail(e){
        e.preventDefault();

        alert("Teste");
    }

    return(
        <div className="text-white flex flex-col max-w-2xl mx-auto">
            <div className="w-2/3 mx-auto border-2 border-white p-3 ">
                <div className="flex flex-row items-end">
                    <h1 className="pr-2 text-xl">Contact me</h1>
                    <AiOutlineMail className="text-white text-2xl" />
                </div>                
                <form id="contactForm" className="mt-3 grid grid-cols-2 gap-3" onSubmit={sendEmail}>
                    <div className="col-span-1">
                        <input type="text" name="name" placeholder="Name" className="text-black w-full" />
                    </div>
                    <div className="col-span-1">
                        <input type="email" name="email" placeholder="Email" className="text-black w-full" />
                    </div>
                    <div className="col-span-2 h-40">
                        <textarea type="text" name="msg" placeholder="Message" className="text-black w-full h-full text-clip" />
                    </div>
                </form>
                <div className="flex items-center justify-center mt-3">
                    <button className="border-2 px-3 py-2 text-white font-bold transition duration-300 hover:scale-110" type="submit" form="contactForm" value="Submit">Submit</button>                    
                </div>
            </div>
        </div>
    )
}

export default ContactMe;