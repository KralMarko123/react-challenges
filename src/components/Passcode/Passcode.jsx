import React, { useState } from 'react';
import './Passcode.css';

const Passcode = ({ passcode }) => {
	const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const [enteredPasscode, setEnteredPasscode] = useState(new Array(4).fill(NaN));
	const [isLocked, setIsLocked] = useState(true);
	const [invalidAttempt, setInvalidAttempt] = useState(false);

	const handleDigitClick = (digit) => {
		let newPasscode = enteredPasscode;

		for (let i = 0; i < newPasscode.length; i++) {
			if (isNaN(newPasscode[i])) {
				newPasscode[i] = digit;
				break;
			}
		}

		setEnteredPasscode([...newPasscode]);

		if (enteredPasscode.every((e) => !isNaN(e))) {
			if (checkIfPasscodeIsCorrect()) {
				setIsLocked(false);
				return;
			} else {
				setInvalidAttempt(true);
				setTimeout(() => {
					setInvalidAttempt(false);
					resetPasscode();
				}, 500);
			}
		}
	};

	const checkIfPasscodeIsCorrect = () => {
		let passcodeAsString = '';

		enteredPasscode.forEach((e) => (passcodeAsString += e));
		return passcode === passcodeAsString;
	};

	const resetPasscode = () => {
		setEnteredPasscode(new Array(4).fill(NaN));
	};

	return (
		<div className='page passcode'>
			{isLocked ? (
				<>
					<h1 className='title'>Enter Passcode</h1>
					<div className={`passcode-container${invalidAttempt ? ' invalid' : ''}`}>
						{enteredPasscode.map((e, i) => (
							<p key={i} className={`passcode-dot${!isNaN(e) ? ' valid' : ''}`}></p>
						))}
					</div>
					<div className='digits-container'>
						{DIGITS.map((d) => (
							<span key={d} className='digit' onClick={() => handleDigitClick(d)}>
								{d}
							</span>
						))}
					</div>
				</>
			) : (
				<h1 className='title'>Successfully Unlocked</h1>
			)}
		</div>
	);
};

export default Passcode;
