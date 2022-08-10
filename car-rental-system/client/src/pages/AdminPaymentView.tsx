import React  from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminPayments from '../components/AdminPayments'
import AdminSideNav from '../components/AdminSideNav'
import "../components/styles.css"



export default function AdminPaymentView() {

    return (
        <>
       
          
            <AdminSideNav/>
          
            <div className="content">
            <AdminHeader/>          
            <AdminPayments/>
            <AdminFooter/>
          </div>

 
    </>
       
          
    )
}
