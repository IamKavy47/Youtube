import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const navbarStyles = {
    position: 'sticky',
    background: '#000',
    top: 0,
    justifyContent: 'space-between'
}

const linkStyles = {
    display: 'flex',
    alignItems: 'center'
}

const Navbar = () => {
    return (
        <Stack direction='row' alignItems='center' p={2} sx={navbarStyles}>
            <Link to='/' style={linkStyles}>
                <img src={logo} alt="logo" height={45} style={{ marginRight:"10px"}}/>
                <h2 style={{ color: '#fff'}}>YouTube</h2>
            </Link>
            <SearchBar />
        </Stack>
    );
}

export default Navbar;