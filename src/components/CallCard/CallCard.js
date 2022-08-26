import { Box, Card, CardContent, IconButton, Typography } from "@mui/material"
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import { Timer } from "../Timer/Timer";
import React, { useState } from "react";
export const CallCard = (props) =>{
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [selected, setSelected] = useState(false);

    React.useEffect(() => {
        let interval = null;
      
        if (isActive === true) {
          interval = setInterval(() => {
            setTime((time) => time + 1000);
          }, 1000);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
    }, [isActive]);

    React.useEffect(() => {
        cardSelected(props.cardSelected);
    }, [props.cardSelected]);

    const startTime = () => {
        setIsActive(true);
    };
    const stopTime = () =>{
        setIsActive(false);
    }

    const onClick = () =>{
        props.onClick(props.user);
    }
    const cardSelected =(selected) =>{
        setSelected(selected)
    }

    return(
        <Card 
            onClick={onClick}
            eleveation={0}
            borderLeft={10}
            sx={{
                m:2,
                boxShadow:0,
                border:2,
                borderColor: '#f7f7f9',
                ...(selected === true && {
                    borderLeft:10,
                    borderLeftColor:'#e94545',
                    
                  }),
                borderRadius: 2,
                width:'100hv',
                "&:hover": {
                    cursor:'pointer'
                },
            }}
        >
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems:'center'
                    }}
                >
                    <Box sx={{
                        display: 'flex'
                    }}>
                        
                        <SmsRoundedIcon fontSize="large" />
                        
                        <Box sx={{
                            ml:2,
                            display: 'block'
                        }}>
                            <Typography
                                sx={{
                                    color:'#153252'
                                }}
                                variant="h6"
                            >
                                {props.user.caller}
                            </Typography>
                            <Typography
                                sx={{
                                    color:'#707497',
                                }}
                                variant="subtitle2"
                            >
                                {props.user.service}
                            </Typography>
                        </Box>
                    </Box>
                    
                        <Timer time={time}></Timer>
                </Box>  
            </CardContent>
        </Card>
    )
}