import { Button, styled } from '@mui/material'
import React from 'react'

const StyButton = styled(Button)({
    color: "#fff",
    background: "#BE6C30",
    border: "1px solid #fff",
    borderRadius: "0",
    padding: "10px 30px",
    marginTop: "30px",
    transition: "all 0.4s",
    ":hover": { background: "#fff", color: "#000", border: "1px solid #BE6C30" }
})

const StyledButton = ({text, sx}) => {
  return (
    <StyButton sx={sx}>{text}</StyButton>
  )
}

export default StyledButton