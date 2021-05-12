import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import './style.css'

//componentes
import NavBar from './Components/NavBar';
import Feed from './Components/Feed';
import Header from './Components/Header'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: '100vh',
        padding: 24
    },
    toolBar: {
        minHeight: 64
    }
})


function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolBar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box color="" display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default Home