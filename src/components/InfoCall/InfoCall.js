import { Card, CardActions, CardContent, Grid, List, ListItem, ListItemText } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { DeclineBtn } from "../DeclineButton/DeclineBtn";

export const InfoCall = (props) =>{

    const [info, infoSet] = useState({
        CallId:'123',
        Midia:'CHAT',
        DataInicial:'18/08/2022',
        Servico:'Nova Matrícula',
        Orgiem:'Lucas',
    })
    return(
        <Card sx={{
            m:4,
            backgroundColor: '#f7f7f9',
            }} 
        >
            <CardContent>
                <Grid 
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    >
                    <Grid item xs={12}>
                    <Typography sx={{ ml:2 ,mt: 2 }} variant="h6" component="div">
                        Chamada Selecionada:
                    </Typography>
                        <List dense
                        >
                            <ListItem>
                                <ListItemText
                                    primary={`Call Id: ${props.callSelected.callId}`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={`Mídia: ${props.callSelected.media}`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={`Data Inicial: ${props.callSelected.startDate}`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={`Serviço: ${props.callSelected.service}`}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={`Orgiem: ${props.callSelected.caller}`}
                                />
                            </ListItem>
                        </List>
 
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{
                    display:'flex',
                    justifyContent: 'flex-end',
                    mr:3,

                }}>
                <DeclineBtn text="Finalizar" click={props.finish}></DeclineBtn>
            </CardActions>
        </Card>
    )
}