'use client';

import {
  Typography,
  TextField,
  Divider,
  Button,
} from "@mui/material";

export default function SignIn () {
  return (
    <>
      <Typography variant="h6" color="black" component="p" sx={{ fontWeight: 700 }}>
        Welcome!
      </Typography>

      <div className="my-2 w-full flex flex-col gap-3">
        <TextField variant="outlined" label="Username" size="small"/>
        <TextField variant="outlined" label="Password" size="small"/>
      </div>

      <div className="w-full">
        <Divider/>
      </div>

      <div className="my-2 w-full flex flex-col gap-3">
        <Button variant="contained" size="small" fullWidth>Sign-In</Button>
        <Button variant="outlined" size="small" fullWidth>Sign-Up</Button>
      </div>
    </>
  )
}