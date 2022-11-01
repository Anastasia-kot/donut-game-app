import { GameDataType } from "../../types/types";

let data: GameDataType = {
  mainParams: {
    quantity: null,
    valuesRange: null,
    order: null,
  },                                                  // параметры введенные при начале игры
  gameValues: null,                                   // рандомно расставленные игровые значения
  gameProgress: null,                                 // игровой прогресс: последняя сохраненная расстановка фишек
}


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 
export default function handler(req, res) {

  if (req.method === 'GET'){
    res.status(200).json({ data })
  }
  if (req.method === 'PUT') {
    data = { ...data, ...req.body }
    res.status(200).json({ data })
  }

}


// fetch('http://localhost:3000/api/hello', { method: 'GET' })
//   .then(res => res.json())
//   .then(json => console.log(json))



// fetch('http://localhost:3000/api/hello',
//   {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json'  },
//     body: JSON.stringify({
//       mainParams: {
//         quantity: 11,
//         valuesRange: 11,
//         order: 'high'
//       }
//     })
//   })
//   .then(res => res.json())
//   .then(json => console.log(json))

