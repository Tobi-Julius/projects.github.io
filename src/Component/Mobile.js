import { FaBars } from "react-icons/fa"
import { useState } from "react"
import App from "../App"
import NavLinks from "./NavLinks"
import { NavLink } from "react-router-dom"

const Mobile = () => {

    let [open, setOpen] = useState(false)

    return (
        <nav className="Mobile-Nav">
          <FaBars className="harm"
          onClick={()=> setOpen(!open) }
          />
          {open && <NavLinks/>}
        </nav>
    )
}

export default Mobile