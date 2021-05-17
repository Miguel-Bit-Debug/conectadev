import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import SvgIcon from '@material-ui/core/SvgIcon'
import Avatar from '@material-ui/core/Avatar'
import { Bell } from 'react-feather'


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
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
})


function Header() {

    const classes = useStyles()
    const user = null

    return (
        <AppBar className={classes.appBar} position="fixed" color="inherit">
            <ToolBar>
                <img src="/images/logo.png" className={classes.img} />
                <div className={classes.grow}></div>

                <div className={classes.userSection}>
                    <Button className={classes.button} color="primary" variant="contained">
                        Novo Post
                </Button >
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Shalf" src={user && user.avatar} />
                </div>
            </ToolBar>
        </AppBar>
    )
}

export default Header