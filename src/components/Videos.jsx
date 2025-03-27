import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos, direction }) => {
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;