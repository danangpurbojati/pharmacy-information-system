import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    menuTitle: {
        border: '1px solid red',
        padding: '10px 16px 10px 0',
        "&:hover + $menuContent": {
            display: 'block'
        }
    },
    menuContent: {
        display: 'none',
        border: '1px solid blue',
        listStyle: 'none'
    }
})

const DropdownMenu = () => {
    const classes = useStyles();
    return (
        <div>
            <p className={classes.menuTitle}>Master</p>
            <ul className={classes.menuContent}>
                <li>Edit Role</li>
                <li>Logout</li>
                <li>Add User</li>
            </ul>
        </div>
    )
}

export default DropdownMenu
