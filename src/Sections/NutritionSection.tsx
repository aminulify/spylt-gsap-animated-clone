import { useGSAP } from "@gsap/react"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import { nutrientLists } from "../Constants/index.js";
import { useEffect } from "react";

const NutritionSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)"
    })

    const [list, setList] = useState(nutrientLists);

    useEffect(()=>{
        if(isMobile){
            setList(nutrientLists.slice(0,3))
        }else{
            setList(nutrientLists);
        }
    },[isMobile])

    useGSAP(()=>{

    })
  return (
    <section className="nutrition-section w-full">
        <img src="/images/slider-dip.png" 
             alt="" 
             className="w-full object-cover" />

        <img src="/images/big-img.png" 
             alt=""
            className="md:w-full h-dvh object-cover absolute top-0 md:mt-0 mt-10" /> 

        <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:-mt-20">
            <div className="relative">
                <div className="general-title relative flex flex-col justify-center">
                    <div className="overflow-hidden place-self-start">
                        <h1>It still does</h1>
                    </div>

                    <div className=" place-self-start -rotate-4 p-1 bg-milk" style={{}}>
                        <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                            <h2 className="text-milk-yellow">Body Good</h2>
                        </div>
                    </div>
                </div>
            </div>
            <p className={`${isMobile && 'left-5'} absolute md:right-10 text-sm tracking-wide md:text-right text-balance font-paragraph md:w-[200px] md:top-3/8 top-3/6 w-[250px]`}>Milk contains a wide array of nutrients, including vitamins, minerals and protein and this is lactose free.</p>
        </div>      

        <div className="nutrition-box">
          <div className="list-wrapper">
            {list.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== list.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>  
    </section>
  )
}

export default NutritionSection