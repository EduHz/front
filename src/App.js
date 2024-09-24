import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/get')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(data)

  return (
    <div>
        {data.map(item => (
          <div key={item.id}>
            <h1>{item.titulo}</h1>
            <p>{item.nota}</p>
          </div>
        ))
    }
     
    </div>
  );
}

export default App;
