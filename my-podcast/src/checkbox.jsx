import PropTypes from "prop-types";

export const CheckboxItem = ({ id, label, checked, onChange }) => (
	<div>
		<input
			type="checkbox"
			id={id}
			name="favCheck"
			checked={checked}
			onChange={onChange}
		/>
		<label htmlFor={id}>{label}</label>
	</div>
);

CheckboxItem.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default CheckboxItem;
