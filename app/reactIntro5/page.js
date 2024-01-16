"use client"

import {useState} from 'react'

// example component:
function Square({isChecked, setSquare}) {

	if (isChecked) {
		return (
			<div onClick = {() => setSquare()} className = "w-10 h-10 border-black border-2 "> 
				{isChecked === 1 ? "O" : "X"}
			</div>
		)
	} else {
		return (
			<div onClick = {() => setSquare()} className = "w-10 h-10 border-black border-2 "> 
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
	const [turn, setTurn] = useState(-1)



	const updateState = (i) => {
		let tempBoardState = [...checkState]
		if(tempBoardState[i] === 0){
			tempBoardState[i] = turn
		} else {
			tempBoardState[i] = 0
		}
		setCheckState(tempBoardState)
		setTurn(-1 * turn)
	}


	return (
		<div>
			<div>
				Turn: {turn === 1 ? "O" : "X" }
			</div>
			{/* first row */}
			<div className = "flex flex-row" >
				<Square isChecked = {checkState[0]} setSquare = {() => {updateState(0)}} />
				<Square isChecked = {checkState[1]} setSquare = {() => {updateState(1)}} />
				<Square isChecked = {checkState[2]} setSquare = {() => {updateState(2)}} />
			</div>
			{/* end of first row */}
			{/* second row */}
			<div className = "flex flex-row" >
				<Square isChecked = {checkState[3]} setSquare = {() => {updateState(3)}} />
				<Square isChecked = {checkState[4]} setSquare = {() => {updateState(4)}} />
				<Square isChecked = {checkState[5]} setSquare = {() => {updateState(5)}} />
			</div>
			{/* end of second row */}
			{/* third row */}
			<div className = "flex flex-row" >
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
