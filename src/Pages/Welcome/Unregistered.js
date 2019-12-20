import React from 'react'
import {SectionNews} from '../../helpers/ConstRouters'
import {Column, Section} from 'rbx'
// import Cards from '../../Components/Cards'
import Carrusel from './../NoAuth/Carrusel'

export default function UnRegistered(){
    return(
        <Section>
            <Carrusel/>
            <Column.Group multiline centered style={{width:'100%'}}  breakpoint="mobile">
            <Column>
                {/* <Cards to="/Noticias" titulo="Noticias" contenido="Las noticias del Decá" imagen="https://cdn.pixabay.com/photo/2017/06/30/03/34/gui-2457113_960_720.png"/> */}
            </Column>
            <Column>
                {/* <Cards to="/Anuncios" titulo="Anuncios" contenido="Mirá los anuncios del Decá" imagen="https://www.tablondigital.com/wp-content/uploads/sites/8/2018/07/tablon_de_anuncios_digital_5.png"/> */}
            </Column>
            <Column>
                {/* <Cards to="/Bolsa-Trabajo" titulo="Bolsa de Trabajo" contenido="Da trabajo/Busca trabajo" imagen="http://fisioterapia.facmed.unam.mx/wp-content/uploads/2018/11/bolsa-de-trabajo.png"/> */}
            </Column>
            <Column>
                {/* <Cards to="/Servicios" titulo="Servicios" contenido="Busca servicios/Ofrece servicios" imagen="https://sbgmallorca.com/wp-content/uploads/2019/03/servicios-1.png"/> */}
            </Column>
            <Column>
                {/* <Cards to="/Cargos-Comunitarios" titulo="Cargos Comunitarios" contenido="Visualiza todos los cargos de la comunidad." imagen="http://www.malpartidadeplasencia.net/images/directivatenismesa.png"/> */}
            </Column>
            <Column>
                {/* <Cards to="/Religion" titulo="Cargos Religisos" contenido="Visualiza todos los cargos de las Religiones." imagen="http://3.bp.blogspot.com/_sQstvz4A02c/S_K8eDBywGI/AAAAAAAABQ8/eIAaLeUFX1g/s320/primriaEducaci%C3%B3nReligiosa.jpg"/> */}
            </Column>
            <Column>
                {/* <Cards to="/Eventos" titulo="Eventos" contenido="Ve los eventos de la comunidad" imagen="http://www.badmintonmenorca.com/wp-content/uploads/2017/12/calendario1.png"/> */}
            </Column>
    
            </Column.Group>
        </Section>
    )   
}