import * as React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { busketSelect } from "../../redux/basketSlice";


function NavBar()
{
    const { busket } = useSelector(busketSelect)

    return (
        <div>
            <nav>
                <NavLink className='link' to={'/'}>
                    HOME
                </NavLink>
                <NavLink className='link' to={'/busket'}>
                    <buscket />
                    Busket
                    {!!busket.length && busket.length}
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;
