import React, {Component} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Customer from './component/customer.js'
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})
const customers = [{
  'id': 1,
  'image':'https://placeimg.com/64/64/any',
  'name': '김승래',
  'birth': '010712',
  'gender' : '남성',
  'job': '대학생'
},{
  'id': 2,
  'image':'https://placeimg.com/64/64/any',
  'name': '김승래',
  'birth': '010712',
  'gender' : '남성',
  'job': '대학생'
},{
  'id': 3,
  'image':'https://placeimg.com/64/64/any',
  'name': '김승래',
  'birth': '010712',
  'gender' : '남성',
  'job': '대학생'
}]

class App extends Component {
  state = {};

  render() {
    const { classes} = this.props
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.table}>
          <Table>
        <TableHead>
          <TableRow>
            <TableCell>아이디</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map((customer)=>{return (<Customer key = {customer.id} name= {customer.name} id={customer.id} birth={customer.birth} image={customer.image} job={customer.job} gender={customer.gender}/>) })}
        </TableBody>
      </Table>
      </TableContainer>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
