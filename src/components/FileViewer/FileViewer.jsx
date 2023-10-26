import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/ROUTES";
import "./FileViewer.css";

const FileEntry = ({ name, children, depth }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const hasChildren = children?.length > 0;

	return (
		<div
			className="file"
			style={{ paddingLeft: `${depth}em` }}
			onClick={(e) => {
				e.stopPropagation();
				setIsExpanded((prev) => !prev);
			}}
		>
			{!hasChildren ? (
				<span className="filename">{name}</span>
			) : (
				<span className="filename expandable">{`${isExpanded ? "-" : "+"} ${name}`}</span>
			)}

			{isExpanded &&
				children?.map((c) => <FileEntry name={c.name} children={c.children} depth={depth + 1} />)}
		</div>
	);
};

const FileViewer = ({ files }) => {
	const navigate = useNavigate();

	return (
		<div className="page fileviewer">
			<div className="file-window">
				{files.map((f) => (
					<FileEntry name={f.name} children={f.children} depth={0} />
				))}
			</div>

			<button className="back-button" onClick={() => navigate(ROUTES.HOME)}>
				Back
			</button>
		</div>
	);
};

export default FileViewer;
