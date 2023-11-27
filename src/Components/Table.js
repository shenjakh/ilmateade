import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Locations from '../Data/Locations';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${theme.palette.mode === 'light' ? 'head' : 'headDark'}`]: {
        backgroundColor: '#2D3E40',
        color: theme.palette.common.white,
    },
    [`&.${theme.palette.mode === 'light' ? 'body' : 'bodyDark'}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
        backgroundColor: '#93BFB7',
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    cursor: 'pointer',
}));

function createData(
    name,
    maxTemperature,
    minTemperature,
    sunrise,
    sunset,
    precipitation,
    windSpeed
) {
    return { name, maxTemperature, minTemperature, sunrise, sunset, precipitation, windSpeed };
}

const LocationsTable = ({ setSelectedLocation }) => {
    const [data, setData] = useState([]);
    const [selectedLocation, setSelectedLocationLocal] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchDataForLocation = async (location) => {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max&timezone=auto`
                );
                const result = await response.json();
                return createData(
                    location.name,
                    result.daily.temperature_2m_max,
                    result.daily.temperature_2m_min,
                    result.daily.sunrise,
                    result.daily.sunset,
                    result.daily.precipitation_sum,
                    result.daily.wind_speed_10m_max
                );
            };

            const newData = await Promise.all(Locations.map(fetchDataForLocation));
            setData(newData);
        };

        fetchData();
    }, []);

    const headerDates = data.length > 0 ? data[0].sunrise : [];

    const handleRowClick = (location) => {
        setSelectedLocationLocal(location === selectedLocation ? null : location);
        setSelectedLocation(location === selectedLocation ? null : location);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{ backgroundColor: '#2D3E40' }}></StyledTableCell>
                        {headerDates.map((value, index) => (
                            <StyledTableCell style={{ backgroundColor: '#2D3E40', color: '#E4F2E7' }} key={index} align="right">
                                {value.slice(0, 10)}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow
                            key={row.name}
                            onClick={() => handleRowClick(row)}
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{`${Math.floor(row.minTemperature[0])}°/${Math.floor(row.maxTemperature[0])}°`}</StyledTableCell>
                            <StyledTableCell align="right">{`${Math.floor(row.minTemperature[1])}°/${Math.floor(row.maxTemperature[1])}°`}</StyledTableCell>
                            <StyledTableCell align="right">{`${Math.floor(row.minTemperature[2])}°/${Math.floor(row.maxTemperature[2])}°`}</StyledTableCell>
                            <StyledTableCell align="right">{`${Math.floor(row.minTemperature[3])}°/${Math.floor(row.maxTemperature[3])}°`}</StyledTableCell>
                            <StyledTableCell align="right">{`${Math.floor(row.minTemperature[4])}°/${Math.floor(row.maxTemperature[4])}°`}</StyledTableCell>
                            <StyledTableCell align="right">{`${Math.floor(row.minTemperature[5])}°/${Math.floor(row.maxTemperature[5])}°`}</StyledTableCell>
                            <StyledTableCell align="right">{`${Math.floor(row.minTemperature[6])}°/${Math.floor(row.maxTemperature[6])}°`}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LocationsTable;
