import { useMemo, useState } from 'react'
import Clicker from './Clicker.js'
import People from './People.js'

export default function App({ clickersCount }) {
	const [hasClicker, setHasClicker] = useState(true)
	const [count, setCount] = useState(0)

	const buttonClick = () => {
		setHasClicker(!hasClicker)
	}

	const increment = () => {
		setCount(count + 1)
	}

	const colors = useMemo(() => {
		const colors = []

		for (let i = 0; i < clickersCount; i++) {
			colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`)
		}

		return colors
	}, [clickersCount])

	return (
		<>
			<h1>Total count: {count}</h1>
			<button onClick={buttonClick}>
				{hasClicker ? 'Hide' : 'Show'} Clicker
			</button>
			{/* {hasClicker ? <Clicker /> : null} */}
			{hasClicker && (
				<>
					{[...Array(clickersCount)].map((value, index) => (
						<Clicker
							key={index}
							increment={increment}
							keyName={`count${index}`}
							color={colors[index]}
						/>
					))}
					{/* <Clicker
						increment={increment}
						keyName='countB'
						color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
					/>
					<Clicker
						increment={increment}
						keyName='countC'
						color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
					/> */}
				</>
			)}

			<People />
		</>
	)
}
