import React  from 'react'
import AdminDashboard from '../components/AdminDashboard'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import DriverManagement from '../components/DriverManagement'
import "../components/styles.css"



export default function Dashboard() {

    return (
        <>
       
          
            <AdminSideNav/>
          
            <div className="content">
            <AdminHeader/>          
            <DriverManagement/>
            <AdminFooter/>
          </div>

 
    </>
       
          
    )
}
