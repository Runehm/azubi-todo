import React from 'react';

const App = () => {

	const todos = [
		{
			title: 'item 1'
		},
		{
			title: 'item 2'
		},
		{
			title: 'item 3'
		}
	];

	return (
		<div>
			<h1>Todoooooooo app</h1>

			<h3>Was ich machen werde wenn die kontaktsperre aufgehoben wird:</h3>

			<ul>
				{
					todos.map((todo, index) => {
						return (
							<li key={index}>
								{todo.title}
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};
export default App;