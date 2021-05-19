import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Account from './Account'
import Box from '@material-ui/core/Box'

import Notifications from './Notifications'

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    }
})


function Header() {
    const classes = useStyles()

    return (
        <AppBar className={classes.appBar} position="fixed" color="inherit">
            <ToolBar>
                <img src={"/images/logo.png"} className={classes.img} />
                <div className={classes.grow} />

                <div className={classes.userSection}>
                    <Button className={classes.button} color="primary" variant="contained">
                        Novo Post
                </Button >
                <Box ml={2}>
                    <Notifications />
                </Box>
                <Box ml={2}>
                    <Account />
                </Box>
                </div>
            </ToolBar>
        </AppBar>
    )
}

export default Header