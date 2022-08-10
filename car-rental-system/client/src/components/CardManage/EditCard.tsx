import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../.././components/Card/Card';
import CardForm from '../.././components/Card/CardForm';
import {
  CreditCard,
  fetchCreditCardList,
  updateLocalStorageCards,
} from '../.././components/Card/CreditCard';

const initialState: CreditCard = {
  id: '',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};

export default function EditCard() {
  const { id: parmId } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<CreditCard>(initialState);
  const [cardsData, setCardsData] = useState<CreditCard[]>([]);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  useEffect(() => {
    fetchData();
  }, [parmId]);

  async function fetchData() {
    const cards: CreditCard[] = await fetchCreditCardList();
    setCardsData(cards);
    if (cards && cards.length > 0) {
      const selectedCard = cards.find((card) => card.id === parmId);
      setState(selectedCard ?? initialState);
    }
  }

  const updateStateValues = useCallback(
    (keyName: any, value: any) => {
      setState({
        ...state,
        [keyName]: value || '',
      });
    },
    [state],
  );

  function handleSubmitAction() {
    try {
      const cards: CreditCard[] = cardsData;
      const selectedCard: CreditCard =
        cards.find((card) => card.id === parmId) ?? initialState;
      const selectedCardIndex = cards.indexOf(selectedCard);
      cards[selectedCardIndex] = state;
      updateLocalStorageCards(cards);
      window.location.replace('/view-cards');
    } catch (error: any) {
      alert(error);
      console.log(error);
    } finally {
      //release resources or stop loader
    }
  }

  function handleDeleteAction() {
    try {
      if (confirm('Are you sure you want to delete this card?') === false) {
        return;
      }

      const cards: CreditCard[] = cardsData;
      const selectedCard: CreditCard =
        cards.find((card) => card.id === parmId) ?? initialState;
      const selectedCardIndex = cards.indexOf(selectedCard);
      cards.splice(selectedCardIndex, 1);
      updateLocalStorageCards(cards);
      window.location.replace('/view-cards');
    } catch (error: any) {
      alert(error);
      console.log(error);
    } finally {
      //release resources or stop loader
    }
  }

  return (
<>

    <div className="text-center">
<button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{width:"200px", height:"50px",marginRight:"100px"}}>
edit
</button>

</div>


<div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{width:"600px"}}>
      <div className="modal-header" >
        <h2 className="modal-title" id="exampleModalLabel">Add Card</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{width:"600px", height:"800px"}}>



    <Fragment>
      <div className="add-card-content">
        <div className="wrapper">
          <CardForm
            selectedCreditCard={state}
            onUpdateState={updateStateValues}
            setIsCardFlipped={setIsCardFlipped}
            handleSubmitAction={handleSubmitAction}
          >
            <Card
              cardNumber={state.cardNumber}
              cardHolder={state.cardHolder}
              cardMonth={state.cardMonth}
              cardYear={state.cardYear}
              cardCvv={state.cardCvv}
              isCardFlipped={isCardFlipped}
            ></Card>
          </CardForm>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={3} className="">
            <div className="d-grid gap-1 delete-card">
              <Button variant="link" size="lg" onClick={handleDeleteAction}>
                Delete Card
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>


    </div>
     
     </div>
   </div>
 </div>
</> 


  );
}
