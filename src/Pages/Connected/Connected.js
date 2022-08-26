import { ToolBar } from "../../components/ToolBar/ToolBar"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CallList from "../../components/CallList";
import { InfoCall } from "../../components/InfoCall/InfoCall";
import React, { useState } from "react";

export const Connected = (props) => {
    const [callSelected,setCallSelected] = useState({});

    const selected = (call) =>{
        setCallSelected(call)
    }

    const finishedCall = ()=>{
        props.finishCall(callSelected.callId)
    }


    
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ToolBar data={props.user} logout={props.logout}/>
            <Grid container spacing={2}>    
                <Grid item xs={12} md={4}>
                    <CallList callSelected={selected}  calles={props.calles}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <InfoCall callSelected={callSelected} finish={finishedCall}/>
                </Grid>
            </Grid>
        </Box>
    )
}