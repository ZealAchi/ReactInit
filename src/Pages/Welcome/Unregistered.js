import React from 'react'
import {SectionNews} from '../../helpers/ConstRouters'
import {Container,Divider, Hero, Title,Column, Section, Message} from 'rbx'
// import Cards from '../../Components/Cards'
import Carrusel from './../NoAuth/Carrusel'
import Styled from 'styled-components'
export default function UnRegistered(){
    return(
        <Container>
            <HeroLanging gradient >
            <Hero.Body>
                <Container>
                    <Title textAlign="centered" style={{  color: 'white', textShadow: '2px 2px 4px #000000'}}> Cosupplies </Title>
                </Container>
            </Hero.Body>
            </HeroLanging>

            <Carrusel img={imagenes}/>
            <Divider color="warning">Nuestros Colaboradores</Divider>

            
            <Carrusel img={Colaboradores}/>
            <Column.Group>
                <Column>
                    <Message color="success">
                        <Message.Body>
                        <strong>MISIÓN</strong>, Agilizar el proceso de adquisición de materiales constructivos en tiempo, precio y calidad.
                        </Message.Body>
                    </Message>
                </Column>
                <Divider vertical/>
                <Column>
                    <Message color="primary">
                        <Message.Body>
                        <strong>VISIÓN</strong>, Ser la plataforma líder a nivel mundial en el área de la construcción y conectar la mayor cantidad de usuarios con proyectos de gran alcance y proveedores de talla internacional.
                        </Message.Body>
                    </Message>
                </Column>
                
            </Column.Group>
        </Container>



    )   
}


const HeroLanging = Styled(Hero)`
    background-color: '#1fc8db';
    background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`


const Colaboradores=[
    {
        class:'',
        img:"https://onebitcode.com/wp-content/uploads/2018/02/logo1-600px.png",
        alt:''

    }
]

const imagenes=[
    {
      class: "d-block w-100",
      img:"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
      alt:"First slide"
    },
    {
      class: "d-block w-100",
      img:"https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
      alt:"First slide"
    }
  ]