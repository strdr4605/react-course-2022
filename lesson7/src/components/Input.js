import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({value, onChange, label}) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField type="number" label={label} variant="outlined" value={value} onChange={(event) => onChange(event.target.value)} />
        </Box>
    );
}