import { useEffect, useState } from 'react'

export default function People() {
	const [people, setPeople] = useState([])

	const getPeople = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const result = await response.json()
		setPeople(result)
		console.log(result)
	}

	useEffect(() => {
		getPeople()
	}, [])

	return (
		<>
			<h2>People</h2>
			{people.length === 0 ? (
				<p>Loading...</p>
			) : (
				<>
					<ul>
						{people.map((person) => (
							<li key={person.id}>{person.name}</li>
						))}
					</ul>
				</>
			)}
		</>
	)
}
