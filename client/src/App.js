import logo from './logo.svg';
import React from 'react';
import upload from './services/FileUploadService';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./pages/Home";
function App() {
	return (
		<React.Fragment>
			<CssBaseline/>
			<Home/>
		</React.Fragment>
	);
}

export default App;
