import React  from 'react'
import { Link } from 'react-router-dom'
import "../components/styles.css"
import Dashboard from '../pages/Dashboard'


export default function AdminFooter() {

    return (
        <>
        <div>



        

        <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary rounded-top p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">
                           
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                            <br/>Distributed By: <a href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
      


        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
                
           
               

                 


   
    </>
       
          
    )
}