import styled from '@emotion/styled'
import { Badge, Mail, Notifications, Pets,MailIcon } from '@mui/icons-material';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import {borderRadius} from "@mui/system"
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  backgroundColor:"white",
  padding:" 0 10px",
  // borderRadius: theme.shape.borderRadius,
  width:"40%",
}));

const Icons = styled(Box)(({theme}) => ({
 display:"flex",
 gap: "20px"
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs:"none", sm:"block"}}}>Khurana world</Typography>
        <Pets sx={{display: {xs:"block", sm:"none"}}} />
        <Search><InputBase placeholder='Search ..'/></Search>
        <Icons>
        {/* <Badge badgeContent={4} color="secondary">
  <MailIcon color="action" />
</Badge>
<Badge badgeContent={4} color="success">
  <MailIcon color="action" />
</Badge> */}
          <Badge badgeContent={4} color="white">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="action" />
          </Badge>
        </Icons>
        </StyledToolbar>
      </AppBar>
  )
}

export default Navbar