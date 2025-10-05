import React from 'react';
import ClipPathTItle from '../Components/ClipPathTItle';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 50%",
        end: "top 0",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

    return (
        <section className='benefit-section'>
            <div className='container mx-auto pt-20 pb-20'>
                <div className='col-center'>
                    <p>
                      Unlock the Advantages: <br/> Explore the Key Benefits of Choosing SPYLT
                    </p>

                    <div className='mt-20 col-center'>
                        <ClipPathTItle 
                            title={"Shelf stable"} 
                            color={'#faeade'} 
                            bg={'#c88e64'}
                            borderColor={'#222123'}
                            className={"first-title"}
                        /> 
                        <ClipPathTItle 
                            title={"PROTEIN + CAFFEINE"} 
                            color={'#222123'} 
                            bg={'#faeade'}
                            borderColor={'#222123'}
                            className={"second-title"}
                        /> 
                        <ClipPathTItle 
                            title={"INFINITELY RECYCLABLE"} 
                            color={'#faeade'} 
                            bg={'#7F3B2D'}
                            borderColor={'#222123'}
                            className={"third-title"}
                        /> 
                        <ClipPathTItle 
                            title={"LACATOSE FREE"} 
                            color={'#222123'} 
                            bg={'#FED775'}
                            borderColor={'#222123'}
                            className={"fourth-title"}
                        /> 
                    </div>
                    <div className='md:mt-0 mt-10'>
                        <p>And much more...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;