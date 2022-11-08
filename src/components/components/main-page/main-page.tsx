import {useCallback} from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DataSelect} from "../../modal-components/data-select";


export default function FirstPage() {
    function createData(
        engineeringSpecialization: string,
        engineeringGeneral: number,
        softwareDeployment: number,
        qualityAssurance: number,
        softwareDesign: number,
        SDLC: number
    ) {
        return {
            engineeringSpecialization,
            engineeringGeneral,
            softwareDeployment,
            qualityAssurance,
            softwareDesign,
            SDLC
        };
    }
    const rows = [
        createData('React', 159, 6.0, 24, 4.0, 0),
        createData('Angular', 237, 9.0, 37, 4.3, 1),
        createData('Vue', 262, 16.0, 24, 6.0, 0),
        createData('JavaScript', 305, 3.7, 67, 4.3, 0),
        createData('React Native', 356, 16.0, 49, 3.9, 0),
        createData('Node', 356, 16.0, 49, 3.9, 0),
        createData('Nest', 356, 16.0, 49, 3.9, 0),
    ];
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Software Engineering(Specialization)</TableCell>
                        <TableCell align="right">Software Engineering(General)</TableCell>
                        <TableCell align="right">Software Deployment</TableCell>
                        <TableCell align="right">Quality Assurance</TableCell>
                        <TableCell align="right">Software Design</TableCell>
                        <TableCell align="right">SDLC</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.engineeringSpecialization}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.engineeringSpecialization}
                            </TableCell>
                            <TableCell align="right">{row.engineeringGeneral}</TableCell>
                            <TableCell align="right">{row.softwareDeployment}</TableCell>
                            <TableCell align="right">{row.qualityAssurance}</TableCell>
                            <TableCell align="right">{row.softwareDesign}</TableCell>
                            <TableCell align="right">{row.SDLC}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
