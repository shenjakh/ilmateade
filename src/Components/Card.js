import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { WiDaySunny } from 'react-icons/wi';

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

function LinnaCard({ maxTemperature, minTemperature, sunrise, sunset, precipitation, windSpeed }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <WiDaySunny size={48} color="#FFD700" />
                <Typography variant="h5" component="div">
                    {`${maxTemperature}${bull}${minTemperature}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {sunrise}
                    <br />
                    {sunset}
                    <br />
                    {precipitation}
                    <br />
                    {windSpeed}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default LinnaCard;