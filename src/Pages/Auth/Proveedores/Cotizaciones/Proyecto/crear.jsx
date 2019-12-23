import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd';
import { Box } from '@material-ui/core';
import Prueba from './Formulario';


export default function ({visible}) {


  return (
    <>
      <Link to="/Cotización/Proyecto/Nuevo">
        <Button type="primary" style={{ display: `${visible ? '' : 'none'}`, margin: 3, background: 'rgba(41, 130, 27, 0.75)', color: '#fff' }}>
          {'Crear Proyecto'}
        </Button>
      </Link>
      <Box style={{ display: `${visible ? 'none' : ''}`}}>
      <Prueba />
      </Box>
      

    </>
  );
}