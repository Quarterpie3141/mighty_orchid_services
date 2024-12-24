"use client";

export default function HouseCard() {

	return (
        <div className="flex flex-col xl:w-1/3 lg:w-1/2 w-full content-between mx-auto">
            <div className="bg-white border-8 rounded-xl shadow m-auto relative bg-[url('https://i.imgur.com/13j0svE.png')] bg-cover max-w-[25rem] min-w-[10rem] w-full aspect-square">
            
              <div className=" w-4/5 h-1/5 bg-mto-blue bg-opacity-40 backdrop-blur-lg absolute bottom-0 rounded-tr-2xl">
                    <h1 className=" text-white text-xl m-2">
                        Place holder
                    </h1>
              </div>
            
            </div>
            <a href="/#">
                <div className=" bg-mto-blue hover:bg-mto-orange transition rounded-full mt-4 mx-10 w-max p-3">
                    Learn more
                </div>
            </a>
        </div>
	);
}

