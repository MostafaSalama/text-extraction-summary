import React from 'react' ;
import Container from "@material-ui/core/Container";
import FileUpload from "../components/FileInput"; 

const Home = ()=>{
    return (
        <Container maxWidth='lg'>
            <FileUpload onFileChange={null}/>
        </Container>
    )
}
export default Home ;
