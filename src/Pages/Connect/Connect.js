import TextField from '../../components/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './Connect.css';
import { Grid } from '@mui/material';
import { useState } from 'react';


export const Connect = (props) =>{
    const [user,setUser] = useState('')
    const [maxCall,setMaxCall] = useState('')

    const inSubmit = () =>{
        props.requestConnect([user,maxCall]);
        console.log('form enviado')
    }
    

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Card sx={{
                width: 300,
                backgroundColor: '#f5f5f5',
            }}>
                <CardContent>
                    <TextField 
                        label="Usuario" 
                        type="text"
                        value={user}
                        change={value => setUser(value)}
                    />
                    <TextField 
                        label="Máximo de chamadas" 
                        type="number"
                        value={maxCall}
                        change={value => setMaxCall(value)}
                    />
                </CardContent>

                <CardActions className='CardAction'>
                    <Button onClick={inSubmit} variant="contained">Conectar</Button>
                </CardActions>
            </Card>
        </Grid>
    )
} 