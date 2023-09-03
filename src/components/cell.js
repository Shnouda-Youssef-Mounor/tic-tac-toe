
const Cell =(props)=>{
    const { 
        go,
        setGo,
        id,
        cells,
        setCells,
        cell,
        winningMessage}=props
   const handleClick=(e)=>{
    if (winningMessage) {
        return;
      }
      const notTaken = !cells[id];
  
      if (notTaken) {
        if (go === "circle") {
          handleCellChange("circle");
          setGo("cross");
        } else if (go === "cross") {
          handleCellChange("cross");
          setGo("circle");
        }
      }
 
   }
   const handleCellChange = (cellToChange) => {
    if(cells===""){
        setCells("");
    }else{
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
}
  };

    return (
    <div 
    className="cell" 
    onClick={handleClick}>
         <div>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>    
    </div>)

}

export default Cell;