import React from 'react';

const SearchBox = ({seachField, searchChange}) =>{
	return(
		<div className='pa2'>
			<input
				className="pa3 ba b--green bg-lightest-blue"	
				type="search" 
				placeholder="Search robot"
				onChange={searchChange}	/>
		</div>	
	);

}

export default SearchBox;