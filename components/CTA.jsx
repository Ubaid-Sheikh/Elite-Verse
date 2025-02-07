'use client'
import { useState } from "react";
import { AnimatedBg } from "./AnimatedBg"

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Succesfully Sent")
            setFormData({
                name: '',
                email: '',
                projectIdea: ''
            })
        } else {
            alert("Not Send")
        }
    } catch (error) {
        alert("Error Sending Email")
    }
};

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectIdea: '',
    });


    return (
        <AnimatedBg className="flex items- flex-col lg:flex-row">
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                Ready to Elevate your Brand?{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-mainyellow via-yellow-400 to-lightyellow [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Let's Talk</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-mainyellow via-yellow-400 to-lightyellow  py-4">
                        <span className="">Let's Talk</span>
                    </div>
                </div>
            </h2>

            <form className="flex flex-col gap-3 px-5">
                <section className="flex md:flex-row flex-col md:gap-5 gap-3 text-white">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="p-3 rounded-[1.2rem] bg-bgblue outline-none"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="p-3 sm:w-[400px] rounded-[1.2rem] bg-bgblue outline-none"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </section>
                <textarea
                    cols="30"
                    rows="6"
                    name="projectIdea"
                    className="bg-bgblue rounded-[1.2rem] p-3 text-white outline-none"
                    placeholder="Your Project Idea"
                    value={formData.projectIdea}
                    onChange={handleChange}
                />
                <button className="bg-lightblue py-3 px-10 rounded-full text-white font-bold mx-auto" onClick={handleSubmit}>Send your message</button>
            </form>
        </AnimatedBg>
    )
}

export default CTA
