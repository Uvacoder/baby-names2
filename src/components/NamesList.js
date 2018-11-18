import React, { Component } from 'react'

//class NamesList extends Component {

	//render() {


// commented out: class NamesList extends Component {
// commented out: render() {
// because we are going to refactor it to a stateless component
//  stateless components do not have a render method 
// then add: export default ({data, filterText}) => {
//  to access props in stateless functions, we need to pass them in, and that's why we put in {data, filterTest}



export default ({data, filterText, addFavourite}) => {


    //const { data, filterText } = this.props;
    // Same as const data  = this.props.data;
    //  if we are going to use stateless functions, then we can comment out const {data, filterText} = this.props;
    //  otherwise, we will need to include it


    // console.log('We should see the data here', data);


    // For each name in the data array
    const namesList = data
      
      .filter(name =>{
          // remove names that do not match current filter text
          return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
      })

      
      .map(name => {

      // Testing purposes - console.log(name.name, name.sex)

        return (
          <li 
            key={name.id}
            className={name.sex}
            onClick={() => addFavourite(name.id)}>
          
            {name.name}
          
          </li>
      )


    })




    return (
      <div>
      
      {/* commented out this line <p>filterText value is: {this.props.filterText}</p> */}
      


      <ul>
        {namesList}
      </ul>



      </div>
    );
	}

//}
// comment out the extra }

//export default NamesList;
// since we've converted it into a stateless function, we will comment out the export default NamesList