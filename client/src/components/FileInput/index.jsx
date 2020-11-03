import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import style from './FileInput.module.css'
const FileUpload = ({ onFileChange }) => {
	return (
		<Grid className={style.fileContainer} container>
			<Grid item>
				<input
					accept="application/pdf"
					type="file"
					id="file-input"
					name="file"
					style={{ display: 'none' }}
					onChange={onFileChange}
				/>
				<label htmlFor="file-input">
					<Button variant="contained" color="primary" component="span">
						Add File
					</Button>
				</label>
			</Grid>
		</Grid>
	);
};
FileUpload.propTypes = {
	onFileChange: PropTypes.func.isRequired,
};
export default FileUpload;
