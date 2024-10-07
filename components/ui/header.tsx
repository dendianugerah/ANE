import Link from "next/link"

const Header = () => {
    return(
        <header className="px-8 lg:px-16 h-20 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="ml-3 text-2xl font-bold">CV Abadi Nusantara Entitas</span>
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link className="text-lg font-medium group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" href="products">
            Products
          </Link>
          <Link className="text-lg font-medium group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" href="maintenance">
            Hopital Manage
          </Link>
          <Link className="text-lg font-medium group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
    )
}

export default Header