const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl my-4 py-4">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black my-4 mx-2" placeholder="name" />
                <input type="text" className="border border-black my-4 mx-2" placeholder="message" />

                <button className="border border-black my-4 mx-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Contact;