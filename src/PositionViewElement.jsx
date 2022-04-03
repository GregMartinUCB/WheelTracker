
let formatter = new Intl.NumberFormat('en-US',{style: 'currency',currency:'USD'});

function PositionViewElement(props) {
  
  if (props.elementType === 'currency'){
      return(
        <div className="cardElement">
            <p type='currency' >{ formatter.format(props.data)}</p>
        </div>
      );
    } else if (props.elementType === 'title'){
        return(
            <div className="cardElement">
                <h2>{props.data}</h2>
            </div>
        );
    } else if (props.elementType === 'text'){
      return(
          <div className="cardElement">
              <p>{props.data}</p>
          </div>
      );
    } else if (props.elementType === 'number'){
      return(
          <div className="cardElement">
              <p>{props.data}</p>
          </div>
      );
    } else if (props.elementType === 'date'){
      return(
          <div className="cardElement">
              <p>{props.data.toDateString()}</p>
          </div>
      );
    
  }

} 

export default PositionViewElement;
