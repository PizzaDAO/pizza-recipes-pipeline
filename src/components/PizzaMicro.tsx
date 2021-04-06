import React from 'react';
import '../App.css'
import './Pizza.css'
import {Pizza, generateDisplayList} from '../pizza/AllPizza'
import {KitchenData, HACK_prepKitchenData} from '../pizza/KitchenData'

function PizzaMicro(): JSX.Element {
  return (
    <div className='pizza-container'>
      Pizza Image
      <script>
        var pizza = Pizza();
        pizza.makeFromDna('012000208000p4g000000000000000000000000000_1617116414598');
        console.log(pizza.dna);
      {/* if (dna == null || dna == undefined)
      pizza.makeRandom({}, KitchenData);
      else
        pizza.makeFromDna(dna);  

      if (pizza.dna == null || pizza.dna == undefined || pizza.dna == false)
      {
        ret = {error: "illegal dna."};
      } 
      else {

        ret.dna = pizza.dna;

        // generate display list
        ret.displayBundle = generateDisplayList(pizza, KitchenData);

        // generate marketing data
        ret.ingredientsData = pizza.generateIngredientsData(KitchenData);
        ret.pizzaProbability = pizza.calculatePizzaProbability(ret.ingredientsData);   
        ret.description = pizza.generatePizzaDescription(ret.ingredientsData);

      }
      
      // output json
      response.end(JSON.stringify(ret)); */}
      </script>
    </div>
  )
}

export default PizzaMicro;