import FlavorTitle from '../Components/FlavorTitle.js'
import FlavorSlider from '../Components/FlavorSlider.js'

const FlavorSection = () => {
  return (
    <section className="flavor-section relative">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider /> 
        </div>
      </div>
    </section>
  )
}

export default FlavorSection