import React, { Fragment, useCallback, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import CardForm from '../Card/CardForm';
import { CreditCard , updateLocalStorageCards} from '../Card/CreditCard';
import Card from '../Card/Card';

const initialState: CreditCard = {
  id: '',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};

export default function AddCard() {
  // const navigate = useNavigate();
  const [state, setState] = useState<CreditCard>(initialState);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

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
      let newCardsList: CreditCard[] = [];
      if (localStorage.getItem('cards')) {
        const storageCards = JSON.parse(localStorage.getItem('cards') ?? '');
        newCardsList = storageCards ? [...storageCards] : [];
      }

      newCardsList.push({
        ...state,
        id: uuid(),
      });
      updateLocalStorageCards(newCardsList);
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
Add New Card
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
    </Fragment>
       
  
      </div>
     
    </div>
  </div>
</div>








      


    
    </>


   
  );
}
