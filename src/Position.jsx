import PositionViewElement from './PositionViewElement';

function Position(props) {
  
  let positionElements = [];

  Object.keys(props.positionData).forEach(key => {
    let posElementType = null;
    switch(key){
      case 'ticker':
        posElementType = 'title'
        break;
      case 'status':
        posElementType = 'text'
        break;
      case 'openDate':
        posElementType = 'date'
        break;
      case 'price':
        posElementType = 'currency'                             
        break;
      default:
        posElementType = 'number'
      }
      positionElements.push(<PositionViewElement 
        elementType={posElementType}
        data = {props.positionData[key]}
        key = {key}></PositionViewElement>);
    
    // console.log(key, props.positionData[key]);
  });
  // console.log(positionElements)
  return (
    <div className="card" >
      {positionElements.map((item,index)=>{
        return item;
      })}
      
    </div>
  );
} 

export default Position;
