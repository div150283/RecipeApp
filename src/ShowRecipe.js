import React, { Component } from 'react';
import AppNav from './AppNav';
import Footer from './Footer';
import {Container} from 'reactstrap';
import './App.css';

class ShowRecipe extends Component {
  render() {
    
    const { data } = this.props.location;
    
    const title = <h3 className="pt-3" style={{display: 'flex', justifyContent: 'center'}}>{data.name} Recipe</h3>
    const ingredientsTitle = <h4 className="mt-1 pt-2" style={{display: 'flex', justifyContent: 'left'}}> Ingredients </h4>
    
    const ingredientMulti=data.ingredients;
    const ingredientLines = ingredientMulti.replace(/\n/g, "<br>");
    const ingredientsText = <p className="pt-2" style={{display: 'flex', justifyContent: 'left'}} dangerouslySetInnerHTML={{__html: ingredientLines}}></p>
    const preparationTitle = <h4 className="pt-2" style={{display: 'flex', justifyContent: 'left'}}> Preparation </h4>
    const multilinestring=data.preparation;
    const lines = multilinestring.replace(/\n/g, "<br>");
    console.log("lines"+lines);
    const preparationText = <p className="pt-2" style={{display: 'flex', justifyContent: 'left'}} dangerouslySetInnerHTML={{__html: lines}}></p>
  
    //console.log("preparation text"+(JSON.stringify(data.preparation)).split("\n"));
    //console.log("preparationText"+JSON.stringify({preparationText}));
    const imagePathString = data.image;
    const imageLink = <img className="Recipe-image ml-5 mr-5 mt-40" style={{display: 'flex', justifyContent: 'left'}} src={imagePathString} alt="Test"/>
    return (
      <div className="Site">
      <AppNav/>
      <Container className="Site-content">
        {title}
        <hr className="ml-3 mr-3" />
        <Container className="ml-5 mr-5 mt-4">
         <div>
          {imageLink}
          <div className="Recipe-text">
              {ingredientsTitle}
              {ingredientsText}
              {preparationTitle}
              {preparationText}
          </div>
        </div>
      </Container>
    </Container>
      <Footer/>
    </div>
    );
  }
}

export default ShowRecipe;