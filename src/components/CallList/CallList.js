import { Card, CardContent, Grid, Typography } from "@mui/material"
import React, { useState } from "react";
import { CallCard } from "../CallCard/CallCard"

export const CallList = (props) =>{
    const[calles, setCalles] = useState([]);

    React.useEffect(() => {
        setCalles(props.calles) 
    }, [props.calles]);


    const onClick = (callUser)=>{
        calles.forEach((element,index) => {
            console.log(element.callId)
            let newUsers = [...calles];

            //user selecionado ganha selected true
            if(callUser.callId === element.callId){
                callUser.selected = true;
                newUsers[index] = callUser; 
                props.callSelected(callUser)
            }else{
                //outros perdem o status
                newUsers[index].selected = false ;
            }
            setCalles(newUsers);
        });
    }
    return(
        <Card sx={{
            m:4,
            }} 
        >
            <CardContent>
                    <Grid item xs={12}>
                        <Typography sx={{ 
                            display:'flex',
                            justifyContent:"start",
                            mt: 2, 
                            ml: 3
                            }} 
                            variant="h5" 
                            color='#153252'
                        >
                            Atendimentos
                        </Typography>

           
                        {
                            props.calles.map((item) => (
                                <CallCard key={item.callId} onClick={onClick} user={item} cardSelected={item.selected}/>
                            ))
                        }

                    </Grid>
            </CardContent>
        </Card>
    )
}