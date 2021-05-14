import React from 'react'
import { Navbar, NavItem, Dropdown } from 'react-materialize';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () => {


    return (
        <>
            <Navbar 
                fixed
                className="blue lighten-1"
                alignLinks="right"
                id="mobile-nav"
                menuIcon={<FontAwesomeIcon icon={faBars} inverse/>}
                brand={<Link to="/" >DoctorApp</Link> }
                centerChildren
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                  }}>
                <Dropdown trigger={<NavItem>Mas opciones</NavItem>}>
                    <Link>Profesional</Link>
                    <Link>Pacientes</Link>
                </Dropdown>
                <Link to="/admin">Admin</Link>
                <Link to="/profesional">Profesional</Link>
                <Link to="/login">Iniciar Sesion</Link>

            </Navbar>




        </>
    )
}

export default Header
