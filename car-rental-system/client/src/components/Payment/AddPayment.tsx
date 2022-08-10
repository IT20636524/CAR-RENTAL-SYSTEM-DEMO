import React from 'react';
import Footer from '../Footer'
import Header from '../Header'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function AddPayment() {

    const [booking_id, setBookingId] = useState("");
    const [payment_id, setPaymentId] = useState("");
    const [name, setName] = useState("");
    const [card, setCard] = useState("");
    const [amount, setAmount] = useState("");
    const [contact_number, setContactNumber] = useState("");
  
    const [subopt, setSubjectOptions] = useState([]);
    
    const navigate = useNavigate();

    
    const PayData ={
        booking_id,
        payment_id,
        name,
        card,
        amount,
        contact_number,
    }
    
  
  
    function submitForm(e: { preventDefault: () => void; }){
      e.preventDefault();
      if(booking_id.length === 0 || name.length === 0 || card.length === 0|| amount.length === 0 || contact_number.length === 0  ){
        swal(" Fields Cannot empty !","Please enter all data !", "error");
      }else{
        console.log(PayData);
        axios.post("http://localhost:5000/api/payments",PayData)
        .then(function (response: any) {
          console.log(response);
          setBookingId("");
          setName("");
          setCard("");
          setAmount("");
          setContactNumber("");
          swal({ text: "Payment Successful", icon: "success",  buttons: {
            cancel: { text: 'Cancel' },
            confirm: { text: 'Confirm' },
          }}).then((res: any)=>{
            navigate(`/paymentview/${response.data.payment_id}`,{replace:true});
          })
         
          console.log(response.data)
        })
     
      }
      
    }

    // const getData = async (e: { keyCode: number; }) => {
    //   if (e.keyCode === 13) {
    //     await axios.get(`http://localhost:5000/api/booking/${booking_id}`)
    //       .then(function (response) {
    //         if (response.data != null) {
    //           setName(response.data['name'])
    //           setContactNumber(response.data['contact_number'])
    //           setAmount(response.data['amount'])
    //           setSubjectOptions(response.data['card'])
    
    //         } else {
    //           swal(" invalid student id !", "Please Try Again !", "error");
    
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //         swal(" Details can't search !", "Please Try Again !", "error");
    
    //       })
    //   }
    // }
    
   

    return (
        <div>
              <Header/>
          <div
            className="hpimage"
            style={{
            backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg')",backgroundRepeat: "no-repeat",WebkitBackgroundSize:"cover",backgroundSize:"cover",height: "110vh"}}
            >

<div className="d-flex float-end mb-5">
 
 <Link to="/view-cards"><button type="button" className="btn btn-warning" style={{width:"200px", height:"50px", margin:"50px"}}>
see Your Cards
</button></Link>
</div>

<div className="container">
  <div className="row">
    <div className="col">

    <div className="card" style={{background: "linear-gradient(140deg, rgba(72, 115, 150, 1) 50%, rgba(57, 108, 150, 0.65) 65%, rgba(42, 102, 150, 0.6) 50%, rgba(27, 95, 150, 0.95) 80%, rgba(12, 88, 150, 1) 90%, rgba(0, 83, 150, 0.8) 70%)",marginTop:"50px"}}>
        <div className="card-body px-4 px-md-5">
    <section className="mb-4">

  
   



    
 
<h2 className="h1-responsive font-weight-bold text-center my-4" style={{color: "hsl(218, 81%, 95%)"}}>Place Your Installment Here...!!!</h2>


<div className="row">

    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={submitForm}>

        <div className="form-floating mb-3">
            <input className="form-control" id="bookingid" type="text" placeholder="Booking ID" value={booking_id} onChange={(e)=>setBookingId(e.target.value)} />
            <label htmlFor="bookingid">Booking ID</label>
          
        </div>

        <div className="form-floating mb-3">
            <input className="form-control" id="name" type="text" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="name">Name</label>
           
        </div>
       
        <div className="form-floating mb-3">
            <input className="form-control" id="contact" type="text" placeholder="Contact Number"  value={contact_number} onChange={(e)=>setContactNumber(e.target.value)}/>
            <label htmlFor="contact">Contact Number</label>
           
        </div>   

        <select className="form-select mb-4 text-grey" aria-label="Disabled select example" onChange={(e)=>setCard(e.target.value)}>
          <option selected>Select a Card</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>

          {/* {subopt.map(card => {
                    // eslint-disable-next-line react/jsx-key
                    return <option value={card}>{card}</option>
                  })} */}
        </select>

      

        <div className="form-floating mb-3">
            <input className="form-control" id="amount" type="text" placeholder="Amount"  value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <label htmlFor="amount">Amount</label>
           
        </div>

        </form>
       

        <div className="text-center">
        <a href="/add-payment">
    <button type="button" className="btn btn-primary" style={{marginRight:"100px"}}>
           Back
            </button>

    </a>
        <Link to="/payment-view">
    <button type="button" className="btn btn-primary" onClick={ submitForm}>
            Pay Now
            </button>
    </Link>

   
        </div>

       
        <div className="status"></div>
    </div>
  

   
</div>

</section>

</div></div>
    
    </div>
    <div className="col">
    </div>
  </div>
  </div>
             
             </div>
              <Footer/>
             

        </div>
          
    )
}