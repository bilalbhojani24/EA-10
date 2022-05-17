// step 1
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { ProductArray } from './helper';
import './style.css';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header />
        <div className="program__section">
          {React.Children.toArray(
            ProductArray.map((prod) => (
              <Card
                image={prod.imgSrc}
                price={prod.price}
                productName={prod.productName}
              />
            ))
          )}
        </div>

        <hr /> */}

        <Counter />
      </div>
    );
  }
}

export default App;

// Without render you cannot write JSX in class component

/* {ProductArray.map((prod) => (
            <Card
              image={prod.imgSrc}
              price={prod.price}
              productName={prod.product}
            />
          ))} 
*/
