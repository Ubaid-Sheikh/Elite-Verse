
const CTA = () => {
    return (
        <div className='w-full mt-20 flex justify-center items-center font-raleway'>
            <div className="md:w-[90%] w-full h-[500px] shadow-lg text-white rounded-3xl flex flex-col justify-center items-center bg-[url('/img/cta-bg.png')] bg-cover bg-no-repeat bg-center">

                <section className="flex flex-col items-center">
                    <h1 className="bg-[linear-gradient(45deg,#2e5799,#597ebe,#4a85f2)] text-transparent bg-clip-text text-[70px] font-bold">Let's Talk</h1>
                    <p className="text-xl font-semibold w-[50%] md:w-full text-center">Ready to Elevate your brand ? Book a free consultation call and get started !</p>
                </section>
                <button className="mt-5 py-2 px-5 text-lg font-semibold hover:bg-lightyellow transition-all ease-in-out rounded-full bg-mainblue">Book a Consultation Call</button>

            </div>
        </div>
    )
}

export default CTA
