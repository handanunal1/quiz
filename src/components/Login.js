import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
    return (

        <form noValidate autoComplete="off">
            <TextField label="Email" name="Email" variant="outlined"></TextField>
            <TextField label="Name" name="Name" variant="outlined"></TextField>
            <Button type='submit' variant='contained' size='large'>Start</Button>
        </form>
    )
}
