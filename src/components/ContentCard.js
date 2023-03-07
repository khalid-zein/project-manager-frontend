import card from "../assets/card.jpg"
const ContentCard = () => {
    return ( 
        <>
            <div className=" md:px-32 px-6 py-8 grid sm:flex md:justify-between md:space-x-8 items-center">
                <div className="md:mt-0 mt-4 max-w-xl">
                    <img className="rounded-lg " src={card} />
                </div>
                <div className="md:mt-0 mt-8">
                    <h1 className="content-title">What We Do</h1>
                    <p className="md:text-xl text-gray-700 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in volupta ipsum dolor 
                        sit amet, consectetur adipiscing elit, ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default ContentCard;