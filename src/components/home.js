import React from 'react'
import styled from "styled-components"
import Section from "./section"
import Header  from './header'


const Container=styled.div`
height:100vh;
width:100vw;
postion:absolute;
`





function home() {
  return (
    <Container>
    <Header/>
    <Section title="Model 3" description="Order Online for Touchless Delivery" imageUrl="model-3.jpg" leftButtonText="Custom Order" rightButtonText="Existing Inventory" showArrow={true}/>
    <Section  title="Model S" description="Order Online for Touchless Delivery" imageUrl="model-s.jpg" white={true} leftButtonText="Custom Order" rightButtonText="Existing Inventory"/>
    <Section  title="Model X" description="Order Online for Touchless Delivery" imageUrl="model-x.jpg" leftButtonText="Custom Order" rightButtonText="Existing Inventory"/>
    <Section  title="Model Y" description="Order Online for Touchless Delivery" imageUrl="model-y.jpg" leftButtonText="Custom Order" rightButtonText="Existing Inventory"/>
    <Section  title="Solar Panel" description="Low Cost Solar Panels" imageUrl="solar-panel.jpg" leftButtonText="Order Now" rightButtonText="Learn More"/>
    <Section  title="Solar Roof" description="Clean Energy From Your Roof " imageUrl="solar-roof.jpg" leftButtonText="Order Now" rightButtonText="Learn More"/>
    <Section  title="Accessories"   imageUrl="accessories.jpg" leftButtonText="Shop Now"/>
    
    
    </Container>
  )
}

export default home