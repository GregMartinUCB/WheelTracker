import Form from "react-bootstrap/Form";

let formatter = new Intl.NumberFormat('en-US',{style: 'currency',currency:'USD'});

const divStyle = {
  maxWidth: '10%',
  display: 'inline-block',
  paddingRight: 5,
  margin:10,
};

function Position() {
  return (
    <div className="Position" align='center'>
      <Form.Control type="date" name="Opened" style = {divStyle}></Form.Control>
      
      {/* The styling below can definitly be written more elegantly */}
      <input type='text' style = {divStyle,{maxWidth:60}} textAlign={'center'} placeholder="Ticker"></input>
      
      <select type='dropdown' style={divStyle} >
        <option value={'Put'}>Put</option>
        <option value={'Call'}>Call</option>
      </select>

      <select type='dropdown' style={divStyle} >
        <option value={'Sell'}>Sell</option>
        <option value={'Buy'}>Buy</option>
      </select>

      <Form.Control type="date" name="Expiration" style = {divStyle}></Form.Control>

      {/* Current price will use an API to query the current stock price. */}
      <text type='currency' style={divStyle}>{ formatter.format(1) }</text>

      <span style={divStyle}>$<input type="text" name="StrikePrice" style={{display:'inline-block', maxWidth:60}} placeholder="Strike Price"></input></span>



      </div>
  );
} 

export default Position;
