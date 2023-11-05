import {headerLogo} from "../assets/images/index";
import {hamburger} from "../assets/icons/index";
import {navLinks} from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full sticky">
    <nav className="flex justify-between items-center max-container">
      <a href="/">
        <img
          src={headerLogo}
          alt="Nike Logo"
          width={129}
          height={29}
        />
      </a>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((items) => (
          <li key={items.label}>
            <a
              href={items.href}
              className="font-montserrat leading-normal text-lg text-slate-grey relative group">
              <span className="group-hover:scale-x-100 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out bg-black block h-0.5 absolute bottom-0 left-0 w-full"></span>
              <span className="hover:text-red-600 link link-underline link-underline-black text-black">{items.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden max-lg:block">
        <img
          src={hamburger}
          alt="hamberger"
          width={25}
          height={25}
        />
      </div>
    </nav>
  </header>
  
  )
}

export default Nav