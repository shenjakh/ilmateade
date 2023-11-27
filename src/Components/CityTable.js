import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, ...data) {
    return { name, data };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#2D3E40',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function CityTable({ selectedLocation }) {
    if (!selectedLocation) {
        return null;
    }

    const rows = [
        createData('Maksimaalne temperatuur(°)', ...selectedLocation.maxTemperature),
        createData('Minimaalne Temperatuur(°)', ...selectedLocation.minTemperature),
        createData('Päikesetõus', ...selectedLocation.sunrise.map(item => item.slice(-5))),
        createData('Päikeseloojang', ...selectedLocation.sunset.map(item => item.slice(-5))),
        createData('Sademed(mm)', ...selectedLocation.precipitation),
        createData('Tuule kiirus(10m)', ...selectedLocation.windSpeed),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Kuupäev</StyledTableCell>
                        {rows.map((row, index) => (
                            <StyledTableCell key={index} align="right">
                                {row.name}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedLocation.sunrise.map((value, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {value.slice(0, 10)}
                            </StyledTableCell>
                            {rows.map((row, rowIndex) => (
                                <StyledTableCell key={rowIndex} align="right">
                                    {row.data[index]}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CityTable;