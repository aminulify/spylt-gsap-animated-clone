import { BsChevronBarDown } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className='md:w-[1200px] top-0'>
        <div className="w-full mx-auto flex justify-between items-center fixed top-0 left-0 z-50 md:py-5 md:px-12 p-3">
            <a className="scale-[1] hover:scale-[1.1] duration-300" href="#"><img src="/images/nav-logo.svg" alt="nav-logo" /></a>

            <div>
                <BsChevronBarDown className="text-3xl cursor-pointer"/>
            </div>
            <div className="hero-button cursor-pointer py-3 px-6 hover:bg-[#fffaebd4] bg-[#ffffffe8] duration-200 rounded-3xl">FIND IN STORIES
            </div>
        </div>
        
    </nav>
  )
}
