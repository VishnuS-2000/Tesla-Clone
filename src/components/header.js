import React,{useEffect, useState} from 'react'
import styled  from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {motion, useAnimation} from "framer-motion"






const NavBar=styled.div`
position:fixed;
min-height:20px;
display:flex;
justify-content:space-between;
right:0;
left:0;
z-index:2;

`

const Logo=styled.img`


`

const MiddleBar=styled.div`

display:flex;
margin-left:3vw;


@media screen and (max-width:1200px){

    display:none;


}



`

const EndBar=styled.div`
display:flex;


@media screen and (max-width:1200px){

    display:none;


}


`

const NavItem=styled.button`
background:none;
outline:none;
border:none;
cursor:pointer;
font-size:0.9rem;
transition:0.2s;
border-radius:15px;
flex-wrap:no-wrap;
align-items:center;
margin:0 10px;
padding: 0 10px;
&:hover{
  background:rgba(20,20,0,0.10);
  backdrop-filter:blur(6px);


    
}


`
 

const BurgerIcon=styled.a`
position:absolute;
right:0;
z-index:5;
@media screen and (min-width:1200px){

    display:none;
    margin-right:20px;


}

`

const BurgerMenu=styled.div`
background-color:#fff;
width:300px;
height:100vh;
z-index:3;



@media screen and (min-width:1200px){
    display:none;
}


`




const Container=styled.div`

width:100vw;
z-index:3;



`


const OverLay=styled.div`
position:fixed;
display:flex;
background:none;
backdrop-filter:blur(5px);
z-index:3;
background:none;
width:100vw;
height:100vh;
justify-content:flex-end;
transition:0.5s;

`




const BurgerList=styled.ul`
padding-top:6vh;
padding-left:5vh;
height:90vh;
display:flex;
flex-direction:column;
justify-content:space-between;
text-align:left;
li a{
text-decoration:none;
color:#2C3333;
font-weight:400;
}

li a:active{
    color:#2C3333;
}


`

const CloseButton=styled.a`

position:absolute;
right:20px;



`


function Header() {


    const [showMenu,setShowMenu]=useState(false)

    function slide(e){

        console.log(e.target)

    }

    const controls=useAnimation()

    const menuVariants={

        "visible":{opacity:[0,1],x:0},
        "hidden":{opacity:0,x:100}
    }

    useEffect(()=>{

        if(showMenu){
            controls.start("visible")

        }
        else{
            controls.start("hidden")
        }

    })
   

  return (
    <Container>
   <NavBar>
   <Logo src="images/logo.svg"></Logo>
    <MiddleBar>
        <NavItem onMouseOver={slide}>Model 3</NavItem>
        <NavItem onMouseOver={slide}>Model S</NavItem>
        <NavItem onMouseOver={slide}>Model X</NavItem>
        <NavItem onMouseOver={slide}>Model Y</NavItem>    
        <NavItem onMouseMove={slide}>Solar Panels</NavItem>
        <NavItem onMouseOver={slide}>Solar Roof</NavItem>   

    </MiddleBar>

    <EndBar>
        <NavItem onMouseOver={slide}>Shop</NavItem>
        <NavItem onMouseOver={slide}>Account</NavItem>
        <NavItem onMouseOver={slide}>Menu</NavItem>
    </EndBar>
    



  

    {showMenu||<BurgerIcon onClick={()=>{
        
        setShowMenu(true)
    }}>

    <MenuIcon style={{fontSize:"2rem"}} />

    </BurgerIcon>}
   

    


    
   
   </NavBar>



   <motion.div animate={controls} initial="hidden"  variants={menuVariants}  transition={{duration:0.8,ease:"easeInOut"}}>
   <OverLay>

  
    <BurgerMenu>

    <CloseButton onClick={()=>{setShowMenu(false)}}>
    <CloseIcon style={{fontSize:"2rem"}} />
    </CloseButton>
   

    <BurgerList style={{listStyleType:"none"}}>

    <li><a href="#">
    Model 3
    </a></li>
   
        <li><a href="#">
        Model S
        </a></li>

        <li><a href='#'>
        Model X
        </a></li>

        <li><a href='#'>
        Model Y
        </a></li>

        <li><a href='#'>
        Solar Roof
        </a></li>

        <li><a href='#'>
        Solar Panels
        </a></li>

        <li><a href="#">
        Existing Inventory
        </a></li>
       
            <li><a href="#">
            Used Inventory
            </a></li>
    
            <li><a href='#'>
            Account
            </a></li>
    
            <li><a href='#'>
            Shop
            </a></li>
    
            <li><a href='#'>
            Support        
            </a></li>
    
           
            

    
    
    </BurgerList>

   
   </BurgerMenu>

 
   
   
 </OverLay>

 </motion.div>

    </Container>

  )
}

export default Header