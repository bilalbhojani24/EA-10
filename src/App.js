import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import { ProductArray } from './helper';
import './style.css'; // Different from component imports

const App = () => {
  return (
    <div>
      <Header />
      <div className="program__section">
        {ProductArray.map((prod) => (
          <Card
            image={prod.imgSrc}
            price={prod.price}
            productName={prod.product}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
