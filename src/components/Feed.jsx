import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const feedStyles = {
    flexDirection: { sx: 'column', md: 'row' },
}

const boxStyles = {
    height: { sx: 'auto', md: '92vh' },
    borderRight: '1px solid #3d3d3d',
    px: { sx: 0, md: 2 }
}

const copyrightStyles = { mt: 1.5, color: '#fff' }

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then(data => {
                setVideos(data.items);
            })
    }, [selectedCategory])

    return (
        <Stack sx={feedStyles}>
            <Box sx={boxStyles}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={copyrightStyles}>
                    Copyright 2025 <a href="https://github.com/iamkavy47" style={{ color: '#f31503' }}>IamKavy47</a>
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed; 