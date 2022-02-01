import Form from "react-bootstrap/Form";

let formatter = new Intl.NumberFormat('en-US',{style: 'currency',currency:'USD'});

function Position() {
  return (
    <div className="card" >
      <div className="cardElement">
        <Form.Control type="date" name="Opened"></Form.Control>
      </div>
      <div className="cardElement">
        <input type='text' textAlign={'center'}  placeholder="Ticker"></input>
      </div>
     
      <div className="cardElement">
        <select type='dropdown' >
          <option value={'Put'}>Put</option>
          <option value={'Call'}>Call</option>
        </select>
      </div>
      <div className="cardElement">
        <select type='dropdown' >
          <option value={'Sell'}>Sell</option>
          <option value={'Buy'}>Buy</option>
        </select>
      </div>

      <div className="cardElement">
        <Form.Control type="date" name="Expiration"></Form.Control>
      </div>

      <div className="cardElement">
        {/* Current price will use an API to query the current stock price. */}
        <text type='currency' >{ formatter.format(1) }</text>
      </div>

      <div className="cardElement">
        <span>$<input type="text" name="StrikePrice" placeholder="Strike Price"></input></span>
      </div>
    </div>
  );
} 

export default Position;
