import React, { Component } from 'react';
// Commented this out since we're not using it // import logo from './logo.svg';

import Search from './components/Search'
import ShortList from './components/ShortList';
import NamesList from './components/NamesList';
import Credit from './components/Credit';

import './App.css';



class App extends Component {


    // Testing to see if data is there? console.log('our data is', this.props.data)


  	constructor(props) {

  		super(props)
  		this.state = {
  			filterText: '',
  			favourites: []
  		}

  	}


  	filterUpdate(value){
  		this.setState({
  			filterText: value
  		})
  	}




  	addFavourite(id){
  		//Test to see if add favorites work: console.log('ID to add to fav:', id)
  		const favList = this.state.favourites.concat([id]);
  		this.setState({
  			favourites: favList
  		})
  	}



  	deleteFavourite(id){

  		const{favourites} = this.state
  		const newList = [
  		...favourites.slice(0, id),
  		...favourites.slice(id + 1)
  		]

  		this.setState({
  			favourites: newList
  		})

  	}




  render() {

  	//console.log('filterText state from parent component', this.state.filterText)

    return(

      <div>
	  		<Search 
  				filterText={this.state.filterText}
  				filterUpdate = {this.filterUpdate.bind(this)}
	  		/>

	  		<main>
	  			<ShortList
	  				//order matters, first you get the favourites indices
	  				favourites = {this.state.favourites}
	  				//then you get the data
	  				data = {this.props.data}
	  			/>


				<NamesList
					data={this.props.data}
					filterText = {this.state.filterText}
					addFavourite = {this.addFavourite.bind(this)} //passing in a method and not a state
				/>
      			<Credit />
      		</main>
      </div>


    )

  }
}

export default App;
