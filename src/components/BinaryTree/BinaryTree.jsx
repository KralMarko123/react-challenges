import React from "react";
import "./BinaryTree.css";

const BinaryNode = ({ node, depth, left, right }) => {
	const NODE_SPACING = 60;

	return (
		<div className="node-container">
			<span
				className="node-value"
				style={{ top: `${depth * NODE_SPACING}px`, left: `${left}px`, right: `${right}px` }}
			>
				{node.value}
			</span>

			{node.left && (
				<BinaryNode
					node={node.left}
					depth={depth + 1}
					left={(depth + 1) * -NODE_SPACING}
					right={(depth + 1) * NODE_SPACING}
				/>
			)}
			{node.right && (
				<BinaryNode
					node={node.right}
					depth={depth + 1}
					right={(depth + 1) * -NODE_SPACING}
					left={(depth + 1) * NODE_SPACING}
				/>
			)}
		</div>
	);
};

const BinaryTree = ({ root }) => {
	return (
		<div className="page binarytree">
			<div className="node-container">{root.value && <BinaryNode node={root} depth={0} />}</div>
		</div>
	);
};

export default BinaryTree;
