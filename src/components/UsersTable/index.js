import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import './styles.scss';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UsersTable(props) {
  const classes = useStyles();
  const data = props.data ? props.data : [];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption> Tabela do desafio Gofind! </caption>
        <TableHead>
          <TableRow>
            <TableCell align="left">Ação</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">E-mail</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Sobrenome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                <Link to={`/edit/${row.id}`} className="hover-effect">
                    <EditIcon
                        style={{ color: '#333', height: '32px', width: '32px' }}
                    />
                </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.first_name}</TableCell>
              <TableCell align="left">{row.last_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}