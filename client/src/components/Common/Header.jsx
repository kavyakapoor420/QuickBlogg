import React, {useRef} from "react";
// import {assets} from '../../assets'
import {useAppContext} from "../../context/AppContext";
import star_icon from "../../assets/star_icon.svg";


const Header = () => {

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <>
            <div  className="mx-8 sm:mx-16 xl:mx-24 relative">
                <div className="text-center mt-20 mb-8">
                    <div className="inline-flex items-center justify-center gap-4 px-6 py-2 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary ">
                        <p>
                            New Ai Features integrated! Check out the latest updates and enhancements in our platform.
                            Experience the power of AI with our new features designed to enhance your blogging
                            experience. Explore now and take your blogging to the next level!
                        </p>
                        <img alt="star icon image" className="w-3" src={star_icon} />
                    </div>

                    <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
                        Your won
                        <span className="text-primary">
                            Blogging web
                            <br />
                            platform
                        </span>
                    </h1>

                    <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
                        his is your space to think out loud, to share what matters, and to write about filters. Whether
                        it's one word or a thousand, your story starts right here.
                    </p>

                    <form onSubmit={onFormSubmit} className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded-full overflow-hidden  ">

                    </form>

                </div>
            </div>
        </>
    );
};

export default Header;
