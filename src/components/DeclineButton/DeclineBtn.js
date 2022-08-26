import { Button } from "@mui/material"

export const DeclineBtn = (props) => {
    return(
        <Button onClick={props.click} color="error" variant="contained">{props.text}</Button>
    )
}