function Calc(value1, value2, action) {

    if((typeof(value1) !=='number') || (typeof(value2) !=='number') || action=="") {
      return('error');
    }
  
    switch(action){
    case 'sum':
      return value1+value2
      break;
    
    case 'sub':
      return value1-value2
      break;
  
    case 'div':
      return (value2==0 ? "на 0 делить нельзя" : value1/value2)
    break;
  
    case 'mul':
      return value1*value2
    break;
  
    case 'rem':
      return (value2==0 ? "на 0 делить нельзя" : value1%value2)
      break;
    
    default:
      return 'unknown operations';
    
  }
  
  }
  
  console.log (Calc(0, 5, 'sum'));
  console.log (Calc(0, 5, 'div'));
  console.log (Calc(5, 0, 'rem'));
