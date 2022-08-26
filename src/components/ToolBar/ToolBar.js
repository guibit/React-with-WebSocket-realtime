import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DeclineBtn } from '../DeclineButton/DeclineBtn';
import Typography from '@mui/material/Typography';

    
export const ToolBar = (props)=>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#153252" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ mr: 2 }}>
                        {props.data[0]}
                    </Typography>
                    <DeclineBtn click={props.logout} text="Desconectar"/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}