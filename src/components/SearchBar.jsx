import { useState } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const searchbarStyles = {
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl: 2,
    boxShadow: 'none',
    mr: { sm: 5 }
}

const searchIconStyles = {
    p: '10px',
    color: 'red'
}

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e, searchTerm) {
        e.preventDefault();

        if (searchTerm) {
            navigate('/search/' + searchTerm );
            setSearchTerm('');
        }
    }

    return (
        <Paper component='form' onSubmit={(e) => handleSubmit(e, searchTerm)} sx={searchbarStyles}>
            <input
                type="text"
                className="search-bar"
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton>
                <Search type='sumit' sx={searchIconStyles} />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;