import { Component } from "react";
import Navigation from "../../Hoc";
import Image from "../../Image.svg";
import{Box, Avatar,Typography,Button} from "@mui/material";
import Group from "../../Group.png";
import MenuIcon from '@mui/icons-material/Menu';
//import { count } from "console";
//import { Button } from "react-bootstrap";

interface Iprops{
    classes:any

}
interface Istate{
    count:boolean

}
class Head extends Component<Iprops,Istate>{
    state: Istate = {
        // optional second annotation for better type inference
        count: true,
      };
      
     container:any=this.props.classes
    onBoolean=()=>{
        this.setState({count:!this.state.count})
     }
   
    render(){
       
        return(
            <Box className={this.container.root} id="Home">
                <Box className={this.container.navHead}>

                <Box className={this.container.nav}>
                <Avatar  variant="square" sx={{ width: 40, height: 30 }} alt="Remy Sharp" src={Image} />
                <Typography className={this.container.head}>start</Typography>
                </Box>

                <Box className={this.container.navItems}>
                    <Typography sx={{color:"white"}} href="#Home" component="a">Home</Typography>
                    <Typography sx={{color:"white"}}  href="#Profilo" component="a">Profilo</Typography>
                    <Typography sx={{color:"white"}} href="#Service" component="a">Service</Typography>
                    <Typography sx={{color:"white"}} href="#Contact" component="a">Contact</Typography>

                </Box>
                <Box className={this.container.navItemss}>
                <MenuIcon  onClick={this.onBoolean}/>

                </Box>

                </Box>
                <Box className={this.container.spaceBetween}>
                <Box className={this.container.firstPara}>
                
                    <Typography variant="h6">WELCOME</Typography>
                    <Typography className={this.container.para1}> Lorem ipsum dolor sit amet consectetur </Typography>
                    <Typography className={this.container.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</Typography>
                    <Button className={this.container.but}>Explore</Button>
                </Box>
                <Avatar variant="square" sx={{ width: 500, height: 300 }} src={Group} />
                </Box>

                <Box className={this.container.spaceBetweenn}>
                    {this.state.count && (<Box className={this.container.navTags}>
                        <Typography sx={{color:"white"}} href="#Home" component="a">Home</Typography>
                    <Typography sx={{color:"white"}} href="#Profilo" component="a">Profilo</Typography>
                    <Typography sx={{color:"white"}} href="#Service" component="a">Service</Typography>
                    <Typography  sx={{color:"white"}} href="#Contact" component="a">Contact</Typography>  

                    </Box>)}
            
                <Avatar sx={{ width: 300, height: 200 }} variant="square" src={Group} />
                <Box className={this.container.firstPara}>
                    <Typography variant="h6">WELCOME</Typography>
                    <Typography className={this.container.para1}> Lorem ipsum dolor sit amet consectetur </Typography>
                    <Typography className={this.container.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</Typography>
                    <Button className={this.container.but}>Explore</Button>
                </Box>
                </Box>
          
          
            </Box>
        )
        
    }
}
export default Navigation(Head);
