import React from 'react';
import './BinaryTree.css';

const BinaryNode = ({ node, depth, left, right, offset }) => {
	const ROW_SPACING = 50;
	const NODE_SPACING = 5;

	if (left) offset -= NODE_SPACING;
	else if (right) offset += NODE_SPACING;

	return (
		<>
			<span
				className='node-value'
				style={{
					top: `${depth * ROW_SPACING}px`,
					left: `calc(${offset}%)`
				}}
			>
				{node.value}
			</span>

			{node.left && <BinaryNode node={node.left} depth={depth + 1} left offset={offset} />}
			{node.right && <BinaryNode node={node.right} depth={depth + 1} right offset={offset} />}
		</>
	);
};

const BinaryTree = ({ root }) => {
	return (
		<div className='page binarytree'>
			{root.value && <BinaryNode node={root} depth={0} offset={50} />}
		</div>
	);
};

export default BinaryTree;
