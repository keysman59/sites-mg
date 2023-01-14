Data = new Date()
Year = Data.getFullYear()
Month = Data.getMonth()
Day = Data.getDate()

switch (Month)
{
  case 0: fMonth='01'; break;
  case 1: fMonth='02'; break;
  case 2: fMonth='03'; break;
  case 3: fMonth='04'; break;
  case 4: fMonth='05'; break;
  case 5: fMonth='06'; break;
  case 6: fMonth='07'; break;
  case 7: fMonth='08'; break;
  case 8: fMonth='09'; break;
  case 9: fMonth='10'; break;
  case 10: fMonth='11'; break;
  case 11: fMonth='12'; break;
}

let resultDate = `${Day}.${fMonth}.${Year}` 

let place = document.querySelector('.dinamic-date')

place.innerHTML = resultDate