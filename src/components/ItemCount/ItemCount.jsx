import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import "./ItemCount.scss" 

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleOp = (simbolo) => {
     
    simbolo === '-' ? count > 1 && setCount(count - 1) : count < 15 && setCount(count + 1);
  };

  return (
    <div className = "item-count-container">
        <div className = "op-buttons-container"> 
      <Button variant="outlined" className = "op-button" onClick={() => handleOp('-')}> - </Button>
      <span>{count}</span>
      <Button variant="outlined" className = "op-button" onClick={() => handleOp('+')}> + </Button>
      </div>
      <br />
      <Button variant="outlined" className = "submit-button"  onClick={onAdd}> agregar al carrito</Button>
    </div>
  );
};

export default ItemCount;

