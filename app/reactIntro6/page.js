"use client"

import styles from "../../lib/styles/IntroStyles.module.css"
import {useState, useEffect} from 'react'

// example component:
function Square({number, isChecked, setSquare}) {
	
	useEffect(() => {
		console.log("reRendered!", number )
	}, [isChecked])

	if (isChecked) {
		return (
			<div onClick = {() => setSquare()} className = {styles.square}> 
				{isChecked === 1 ? "O" : "X"}
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
	const [turn, setTurn] = useState(-1)



	const updateState = (i) => {
		let tempBoardState = [...checkState]
		if(tempBoardState[i] === 0){
			tempBoardState[i] = turn
		} else {
			tempBoardState[i] = 0
		}
		checkBoard(tempBoardState)
		setCheckState(tempBoardState)
		setTurn(-1 * turn)
	}


	const checkBoard = async (board) => {
		const response = await fetch("/api/verifyBoard", {
        method: "POST",
				body: JSON.stringify({
						board: board ,
						turn: turn 
				}),
      })
		const parsedResponse = await response.json()
		console.log(parsedResponse)

	}


	return (
		<div>
			<div>
				Turn: {turn === 1 ? "O" : "X" }
			</div>
			{/* first row */}
			<div className = {styles.squareContainer} >
				<Square number = {0} isChecked = {checkState[0]} setSquare = {() => {updateState(0)}} />
				<Square number = {1} isChecked = {checkState[1]} setSquare = {() => {updateState(1)}} />
				<Square number = {2}  isChecked = {checkState[2]} setSquare = {() => {updateState(2)}} />
			</div>
			{/* end of first row */}
			{/* second row */}
			<div className = {styles.squareContainer} >
				<Square number = {3}  isChecked = {checkState[3]} setSquare = {() => {updateState(3)}} />
				<Square number = {4}  isChecked = {checkState[4]} setSquare = {() => {updateState(4)}} />
				<Square number = {5}  isChecked = {checkState[5]} setSquare = {() => {updateState(5)}} />
			</div>
			{/* end of second row */}
			{/* third row */}
			<div className = {styles.squareContainer} >
				<Square number = {6}  isChecked = {checkState[6]} setSquare = {() => {updateState(6)}} />
				<Square number = {7}  isChecked = {checkState[7]} setSquare = {() => {updateState(7)}} />
				<Square number = {8}  isChecked = {checkState[8]} setSquare = {() => {updateState(8)}} />
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
