
import Row from 'react-bootstrap/Row';
import { Button, Col, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { CreditCard,fetchCreditCardList } from '../Card/CreditCard';
import Card from 'react-bootstrap/Card';
import CreditCardBox from '../Card/Card';
import AddCard from './AddCard';
import Header from '../Header';
import Footer from '../Footer';




export default function ViewCards() {

  
  const [cardsData, setCardsData] = useState<CreditCard[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const cards: CreditCard[] = await fetchCreditCardList();
    setCardsData(cards);
  }


    return (
        <div>
              
         
    <div>
    <Header/>
          <div
            className="hpimage"
            style={{
            backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg')",backgroundRepeat: "no-repeat",WebkitBackgroundSize:"cover",backgroundSize:"cover",height: "110vh"}}
            >

<div className="d-flex float-end mb-5">
 
  <Link to="/add-payment"><button type="button" className="btn btn-warning" style={{width:"200px", height:"50px", margin:"50px"}}>
Add payment
</button></Link>


</div>
   
<br /><br />
    <h1 className="home-page-heading text-center" style={{marginLeft:"200px", fontSize:"50px"}}>Your Cards</h1><br /><br />
      <Container>
        <Row className="justify-content-center">
          {cardsData.length === 0 && (
            <>
              <Card style={{ width: '50%', margin: '25px' }}>
                <Card.Body>
                  <Card.Title>No card exist</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Go to add card for create a new card.
                  </Card.Subtitle>
                  <Card.Text>
                    You can add,edit and delete card any time..
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </>
          )}
         
          {cardsData.map((card: CreditCard, id) => (
            <Col md={4} key={id} className="mb-3">
              <Link
                key={id}
                to={`/cards/${card.id}/edit`}
                className="col-md-3 credit-card"
              >
                <CreditCardBox
                  cardNumber={card.cardNumber}
                  cardHolder={card.cardHolder}
                  cardMonth={card.cardMonth}
                  cardYear={card.cardYear}
                  cardCvv={card.cardCvv}
                  isCardFlipped={false}
                ></CreditCardBox>
              </Link>
            </Col>
          ))}
        </Row>
     
      </Container>
      <div >
      <AddCard/>  
      </div>
    

 
  
</div>
                            
    </div>
   
  <Footer/>
      </div>

          
    )
}