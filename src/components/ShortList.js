import React from 'react'

export default ({data, favourites, deleteFavourite}) => {

	//Test to see if we can see our list of data objects: console.log('data', data)

	const namesList = favourites.map(id =>{

		//To get just the name, it is:	const name = data[id].name
		// but to get both the name and gender, you do this: const {name, sex} = data[id]
		const {name, sex} = data[id]

		//Test to see if the filtered list of ids mapped to the names with: console.log(name)

		return (
			//React will always complain if you do not assign a key with an object
			<li key={id}
			className={sex}>
				{name}
			</li>
		)
	})

	return (
		<div className = "favourites">
			<h4> Click on a name to shortlist it...</h4>
			<ul>
				{namesList}
			</ul>
		</div>
	)



}



// export default ShortList;
