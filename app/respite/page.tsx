"use client";
import {Footer, Header } from "../components";
import HouseCard from "./components/HouseCard";

export default function Home() {
	return (
		<>
			<Header />
      
      <section className="pt-[7rem]"
               style={{
				        backgroundImage: 'url("https://i.imgur.com/vs6w1Nn.png")',
					      backgroundPosition: "center",
					      backgroundSize: "cover",
                }}
      >

        <div className="pt-24 content-between w-5/6 m-auto">
          <div className="flex m-auto w-fit md:flex-row flex-col">
            <div className="p-16 max-w-4xl">
              <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold text-mto-blue">
                Discover Our dedicated respite houses
              </h1>
              <div className="md:w-1/2 ">
                <h1 className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                Forank ince cepescro. Fralle hodura: Eng thelly not poses an, expenvie y is of riteme Due chat thing, Nation the lied mender descia jught Aqued Schall rive uponegis Rus reire, and his quentro. Berled thumpor, als diturat thinthave shaver.
                </h1>
              </div>
            </div>
            <div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
              <img
              src="https://i.imgur.com/13j0svE.png"
              className=" h-auto w-auto rounded-3xl m-8"
              alt=""
              />
            </div>
          </div>
        </div>

        <div className=" bg-mto-blue w-11/12 m-auto h-auto rounded-[4rem]">
                <div className=" flex m-auto w-5/6 pt-28 flex-wrap relative">
                <HouseCard></HouseCard>
                <HouseCard></HouseCard>
                <HouseCard></HouseCard>
                <HouseCard></HouseCard>
                <HouseCard></HouseCard>
                </div>
        </div>

      </section>

			<Footer />
		</>
	);
}
