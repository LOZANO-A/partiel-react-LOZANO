// import './App.css'

// import './CSS/style.css'
// import DetailFilm from './components/Film/DetailFilm.jsx'

// function App(){

// return(
//   <>
//     <h1>TEST</h1>
//   </>
// )
// }

// export default App


import React, { useEffect, useState } from 'react';
import fetch from 'fetch';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {const url = 'https://api.themoviedb.org/3/authentication';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer c8bf288bee8edc7e6ac610fda396d4d4'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default MyComponent;