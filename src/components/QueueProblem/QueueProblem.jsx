import React, { useEffect, useRef, useState } from "react";
import { queueData } from "../../data/COMPONENT_DATA";
import "./QueueProblem.css";

const QueueProblem = () => {
	const [queues, setQueues] = useState(queueData);
	const inputRef = useRef();

	const handleCheckout = () => {
		// check input
		const itemsToCheckout = parseInt(inputRef.current.value);
		if (!itemsToCheckout || itemsToCheckout <= 0) return;

		// find queue with least items and push
		let queueWithLeastItems = 0;
		let numberOfItems = Number.MAX_SAFE_INTEGER;

		queues.forEach((q, i) => {
			const queueItems = q.reduce((items, customerItems) => items + customerItems, 0);

			if (queueItems < numberOfItems) {
				queueWithLeastItems = i;
				numberOfItems = queueItems;
			}
		});

		// update state
		let updatedQueues = queues;
		updatedQueues[queueWithLeastItems].push(itemsToCheckout);
		setQueues([...updatedQueues]);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			let updatedQueues = queues;

			updatedQueues.forEach((q) => {
				if (q[0] - 1 === 0) q.shift();
				else q[0]--;
			});

			setQueues([...updatedQueues]);
		}, 1000);

		return () => clearInterval(interval);
	}, [queues]);

	return (
		<div className="page queueproblem">
			<div className="item-checkout">
				<input type="text" className="item-input" placeholder="No. of items" ref={inputRef} />
				<button className="item-button" onClick={() => handleCheckout()}>
					Checkout
				</button>
			</div>

			<div className="queue-container">
				{queues.map((q, i) => (
					<div key={i} className="queue">
						<div className="counter">Counter</div>
						{q.map((c, i) => {
							if (i > 5 || !c) return;
							else if (i === 5)
								return (
									<div key={i} className="queue-trail">
										<span className="trail-dot"></span>
										<span className="trail-dot"></span>
										<span className="trail-dot"></span>
									</div>
								);
							else
								return (
									<div key={i} className="customer">
										{c}
									</div>
								);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default QueueProblem;
