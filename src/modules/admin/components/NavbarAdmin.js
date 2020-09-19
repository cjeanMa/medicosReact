import React from 'react'

const NavbarAdmin = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">

          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600">Admin Doctor</span>
              <span className="fa fa-user"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="<?=base_url('admin/cerrarsesion')?>">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              </a>
            </div>
          </li>

        </ul>

      </nav>
    )
}

export default NavbarAdmin
