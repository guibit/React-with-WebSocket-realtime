import TextFieldMaterial from '@mui/material/TextField';
    
export const TextField = (props)=>{

    const change = (event) =>{  
        props.change(event.target.value)
    }


    return(
        <TextFieldMaterial 
            onChange={change}
            value={props.value}
            margin="dense"
            label={props.label}
            type={props.type}
            size="small" 
            variant="outlined" 
        />
    )
}