import Navbar from "./components/Navbar"
import { CarouselDemo } from "./components/demo/CarouselDemo"
import { GridDemo } from "./components/demo/GridDemo"
import Category from "./components/ui/Category"
import Footer from "./components/ui/Footer"
import ProductList from "./components/ui/ProductList"
import { Button } from "./components/ui/button"

function App() {
  return (
    <>
      <Navbar />
      <div className="px-20 bg-white-500">
        <CarouselDemo />
        <Category />
        <ProductList />
        <Footer />
      </div>
    </>
  )
}

export default App












// // src/App.jsx
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/api')
//       .then(response => {
//         setMessage(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-500">
//         {message}
//       </h1>
//     </div>
//   );
// };

// export default App;
