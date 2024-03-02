const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-3xl p-5 mx-10 m-5">Contact Us</h1>
            <form className="m-4 p-4">
                <label className="font-bold">Name:</label>
                <input type="text" name="name" placeholder="name" className="border border-gray-700  my-4 mx-4 px-4 "></input><br />
                <label className="font-bold  ">Message:</label><br/>
                <textarea type="text" name="message" placeholder="message"  rows="10" cols="21" className="border border-gray-700  my-4 mx-16 px-4"></textarea><br />
                <button className="bg-gray-400 rounded font-bold p-2 mx-16 my-4">Submit</button>
            </form>
        </div>
    )
}

export default Contact;

