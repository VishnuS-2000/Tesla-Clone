import React, { useEffect} from 'react'
import styled  from 'styled-components';
import {useAnimation,motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
const Wrap=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
font-size:1.5rem;
overflow-x:hidden;
color:#2C3333;




`

const Title=styled.div`

padding-top:15vh;
font-weight:400;
text-align:center;
@media (max-width:768px){
 padding-top:18vh;   
}
`

const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;

@media (max-width:768px){
    flex-direction:column;

}
`


const LeftButton=styled.button`

width:220px;
height:40px;
color:#fff;
background-color:#2C3333;
opacity:0.8;
font-size:0.8rem;
border:none;
outline:none;
border-radius:50px;
font-weight:400;
text-transform:uppercase;
cursor:pointer;
margin:8px;
`


const RightButton=styled.button`
width:220px;
height:40px;
color:#2C3333;
background-color:#fff;
opacity:0.8;
font-size:0.8rem;
border:none;
outline:none;
border-radius:50px;
font-weight:400;
text-transform:uppercase;
margin:8px;
cursor:pointer;
`;

const DownArrow=styled.img`
margin-top:20px;
height:40px;
animation-name:bounce;
animation-duration:1s;
animation-iteration-count:infinite;
height:20px;
width:20px;
margin-bottom:20px;
cursor:pointer;
`

const Buttons=styled.div`



@media screen and (max-width:768px){
    margin-top:15vh;
}
`
 


function Section({title,description,imageUrl,leftButtonText,rightButtonText,white,showArrow}) {
 

    const controls=useAnimation()
    const [ref,inView]=useInView({
        threshold:0.4
    })

    const sectionVariants={
        visible:{opacity:1,y:[-50,0]},
        hidden:{opacity:0,y:[0,-50]}
    }


    useEffect(()=>{

        if(inView){
           
            controls.start("visible")
        }

        else{
            controls.start("hidden")
        }
        
    },[controls,inView])

    return (
    

    <Wrap ref={ref} style={{backgroundImage:`url(images/${imageUrl})`,color:white?"white":"2C3333"}}>


    <Title>
    <motion.h1 animate={controls} initial="hidden" variants={sectionVariants} transition={{ease:"easeInOut",duration:0.4}} >
       {title}
    </motion.h1>
    <motion.p  animate={controls} initial="hidden" variants={sectionVariants} transition={{ease:"easeInOut",duration:0.4,delay:0}} style={{fontSize:"1rem"}} >
    {description}
    </motion.p>
    </Title>
  


    <Buttons style={{"margin-bottom":showArrow?"0vh":"8vh"}}>
    <motion.div animate={controls} initial="hidden" variants={sectionVariants} transition={{ease:"easeInOut",duration:0.4,delay:0.3}}>
    <ButtonGroup >
        
        <LeftButton >{leftButtonText}</LeftButton>
       {rightButtonText&&<RightButton>{rightButtonText}</RightButton>}

    
      
    </ButtonGroup>  
    
    </motion.div>

    {showArrow&&<DownArrow src="/images/down-arrow.svg" ></DownArrow>}

    
    </Buttons>

    </Wrap>
    
  )

}


export default Section;