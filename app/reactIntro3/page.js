"use client"

import styles from "../../lib/styles/IntroStyles.module.css"
import {useState} from 'react'

// example component:
function Square() {
	const [checked, setIsChecked] = useState(false)

	if (checked) {
		return (
			<div onClick = {() => setIsChecked(false)} className = {styles.square}> 
				X
			</div>
		)
	} else {
		return (
			<div onClick = {() => setIsChecked(true)} className = {styles.square}> 
			</div>
		)
	}
}

function RestartButton() {
	return (
		<div>
			<button className = ""> Restart </button>
		</div>
	)
}

function Board() {
	// TODO make a state for the whole board - which tracks all the squares
	return (
		<div>
			{/* first row */}
			<div className = {styles.squareContainer} >
				<Square />
				<Square />
				<Square />
			</div>
			{/* end of first row */}
			{/* second row */}
			<div className = {styles.squareContainer} >
				<Square />
				<Square />
				<Square />
			</div>
			{/* end of second row */}
			{/* third row */}
			<div className = {styles.squareContainer} >
				<Square />
				<Square />
				<Square />
			</div>
			{/* end of third row */}

		</div>
	)
}


export default function reactIntro() {

	return (
		<div>
			View the board below:
			<Board />
			<RestartButton />
		</div>
	)
}
