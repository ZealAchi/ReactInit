import React, { useContext } from 'react'


import { Button, Box } from '@material-ui/core';
import styled from "styled-components";
import { VectorMap } from '@south-paw/react-vector-maps';

import worldLowRes from '../Maps/world.json'
import Mexico from '../Maps/mexico.json'
import { DataContextForProveedores } from './formContext.jsx';

export const InfoMapa = ({Mapa}) => {
  const { visible, estado, pais, hovered } = useContext(DataContextForProveedores)
  return(
  <Box bgcolor="background.paper" m={1} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
    <div >
    {visible&&Mapa&&<Button component="span">
        Seleccionar {hovered && hovered}
      </Button>}
    </div>
    {!visible&&!Mapa? <div>
      <Button component="span">
        Pais: {pais === undefined ? ' ' : pais}
      </Button>
      <Button component="span">
        Estado: {estado === undefined ? ' ' : estado}
      </Button>
    </div>:visible&&Mapa& <div>
      <Button component="span">
        Pais: {pais === undefined ? ' ' : pais}
      </Button>
      <Button component="span">
        Estado: {estado === undefined ? ' ' : estado}
      </Button>
    </div>}
  </Box>
)}
export default function () {
  const { visible, estado, pais, hovered, layerPropsEstados, layerPropsPais } = useContext(DataContextForProveedores)
  return (<>
    <InfoMapa Mapa={'Mapa'}/>
    <Box bgcolor="background.paper" m={1} style={{ display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid #ccc', alignItems: 'stretch' }}>
      <Button type='primary' component="span" block>
        {pais === undefined ? 'Proyectos Activos en el Mundo :8' :
          estado === undefined ? 'Proyectos Activos en el Pais :2' : `Proyectos activos en ${estado}: 2`
        }
      </Button>

    </Box>
    <Box css={{ display: `${visible ? '' : 'none'}` }}>
      <Map>
        {pais === undefined ? <MapNew {...worldLowRes} currentLayers={['mx-oax']} layerProps={layerPropsPais} style={{ display: 'inline-block' }} />
          : <MapNew {...pais === 'Mexico' ? Mexico : worldLowRes} checkedLayers={['mx-ver', 'mx-dur']} layerProps={layerPropsEstados} currentLayers={['mx-oax']} style={{ display: 'inline-block' }} />
        }</Map>
    </Box>
  </>
  )
}


const MapNew = styled(VectorMap)`
${props => console.log(props.layers)}
`
const Map = styled.div`
  margin: 1rem auto;
  width: 100%;
  svg {
    stroke: #fff;

    
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      
      &:hover {
        fill: rgba(168,43,43,0.83);
        
      }

      
      &:focus {
        fill: rgba(168,43,43,0.6);
      }

      
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }

      
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }

      
      &[id="nz-can"] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`;