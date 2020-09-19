import React from 'react'
import { Link } from 'react-router-dom'

const SideBarAdmin = () => {
    return (
        <>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?php echo base_url(); ?>">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">ADMIN</div>
                </a>

                <hr class="sidebar-divider my-0" />

                <li class="nav-item">
                    <Link class="nav-link" to={"/admin/dashboard/infoMedico"}>
                        <i class="fas fa-car"></i>
                        <span>Informacion</span></Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to={"/admin/dashboard/pacientes"}>
                        <i class="fas fa-car"></i>
                        <span>Pacientes</span></Link>
                </li>

                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
        </>
    )
}

export default SideBarAdmin
