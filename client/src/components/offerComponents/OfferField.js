import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label className="white-text">{label}</label>
			<input {...input} style={{ marginBottom: "5px" }} className="white-text" />
			<div className="red-text" style={{ marginBottom: "20px" }}>
				{touched && error}
			</div>
		</div>
	);
};
