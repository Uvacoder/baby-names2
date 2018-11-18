import React, {Component} from 'react'


class Search extends Component{


	filterUpdate(){

		// const val = this.refs.myValue.value | with call back function, we reference this differently
		const val = this.myValue.value


		console.log('Type to filter..', val)


		// send that updated filtered text to the parent component
		this.props.filterUpdate(val)

	}



	render(){

		console.log('filterText value', this.props.filterText)

		return (

			<header>

				<form>
				<input
					type = "text"
					// ref = "myValue" | this is deprecated, instead we should use a call back function (see next line)
					ref = { (value) => {this.myValue = value} }
					placeholder = "type to filter..."
					onChange = {this.filterUpdate.bind(this)} //each time input chnages, update the filter
				/>
				</form>

			</header>

		)

	}
}

export default Search