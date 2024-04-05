"use client"

import styles from "../../lib/styles/IntroStyles.module.css"
import {useState} from 'react'

// example component:
function Square({isChecked, setSquare}) {

	if (isChecked) {
		return (
			<div onClick = {() => setSquare()} className = {styles.square}> 
				X
			</div>
		)
	} else {
		return (
			<div onClick = {() => setSquare()} className = {styles.square}> 
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
	const [checkState, setCheckState] = useState([0,0,0,0,0,0,0,0,0])



	const updateState = (i) => {
		let tempBoardState = [...checkState]
		if(tempBoardState[i] === 0){
			tempBoardState[i] = 1
		} else {
			tempBoardState[i] = 0
		}

		setCheckState(tempBoardState)
	}


	return (
		<div>
			{/* first row */}
			<div className = {styles.squareContainer} >
				<Square isChecked = {checkState[0]} setSquare = {() => {updateState(0)}} />
				<Square isChecked = {checkState[1]} setSquare = {() => {updateState(1)}} />
				<Square isChecked = {checkState[2]} setSquare = {() => {updateState(2)}} />
			</div>
			{/* end of first row */}
			{/* second row */}
			<div className = {styles.squareContainer} >
				<Square isChecked = {checkState[3]} setSquare = {() => {updateState(3)}} />
				<Square isChecked = {checkState[4]} setSquare = {() => {updateState(4)}} />
				<Square isChecked = {checkState[5]} setSquare = {() => {updateState(5)}} />
			</div>
			{/* end of second row */}
			{/* third row */}
			<div className = {styles.squareContainer} >
				<Square isChecked = {checkState[6]} setSquare = {() => {updateState(6)}} />
				<Square isChecked = {checkState[7]} setSquare = {() => {updateState(7)}} />
				<Square isChecked = {checkState[8]} setSquare = {() => {updateState(8)}} />
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
