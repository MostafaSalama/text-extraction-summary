import React from 'react';
import Container from '@material-ui/core/Container';
import FileUpload from '../components/FileInput';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import upload from '../services/FileUploadService';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './Home.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import SummaryContainer from "../components/SummaryContainer";
import EntityList from "../components/EntityList";
const Home = () => {
	const [file, setFile] = React.useState(null);
	const [progress, setProgress] = React.useState(0);
	const [loading,setLoading] = React.useState(false) ;
	const [data,setData] = React.useState(null) ;
	const [isUploading, setIsUploading] = React.useState(false);
	function onFileChange(e) {
		setFile(e.target.files[0]);
	}
	function uploadFile() {
		if (file) {
		    setLoading(true)
            setIsUploading(true) ;
			upload(file, (e) => {
				if(progress === 100) {
				    setIsUploading(false) ;
                }
				setProgress((e.loaded / e.total) * 100);
			}).then((data) => {
			    setLoading(false)
				setData(data.data) ;
			});
		}
	}
	return (
		<Container maxWidth="lg">
			<FileUpload onFileChange={onFileChange} />
			<Typography variant="h2">{file && file.name}</Typography>
			<Grid container>
				<Grid item>
					<div className={styles.uploadButtonContainer}>
						<Button
							variant="contained"
							disableElevation
							color="primary"
							onClick={uploadFile}
						>
							Upload
						</Button>
					</div>
				</Grid>
				<Grid item xs={12}>
                    {
                        isUploading &&
                        <div className={styles.progressContainer}>
                            <LinearProgress variant="determinate" value={progress} />
                        </div>
                    }
				</Grid>
				<Grid item>
                    {
                        loading &&
                        <div className={styles.progressContainer}>
                            <Typography variant="h3">Making Analysis</Typography>
                            <CircularProgress color="secondary" />
                        </div>
                    }
				</Grid>
				<Grid item xs={12}>
					{
						data &&
						<SummaryContainer summary={data.summary}/>
					}
				</Grid>
				<Grid item xs={12}>
					{
						data &&
						<EntityList entities={data.entities}/>
					}
				</Grid>
			</Grid>

		</Container>
	);
};
export default Home;
