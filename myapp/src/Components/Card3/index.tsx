import {Component, ReactNode} from "react";
import{Box,Typography,Button} from "@mui/material";
import Navigation from "../../Hoc";
import Imageee from "../../Imageee.svg"


interface Iprops{
    classes:any

}
class Card3 extends Component<Iprops>{
    container:any=this.props.classes
    render() {
        return(
            <Box className={this.container.card3}>
                <Box className={this.container.spaceBetween}>
                <Box className={this.container.firstPara}>
                    <Typography variant="h4" className={this.container.head2}>Lorem ipsum dolor sit amet consectetur </Typography>
                    <p className={this.container.card2para2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Button className={this.container.but2}>Learn More</Button>
                </Box>
                <img className={this.container.card3Image} src={Imageee}/>
               
                </Box>

                <Box className={this.container.spaceBetweenn}>
                
                <img className={this.container.card3Image} src={Imageee}/>
                <Box className={this.container.firstPara}>
                    <Typography variant="h4" className={this.container.head2}>Lorem ipsum dolor sit amet consectetur </Typography>
                    <p className={this.container.card2para2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Button className={this.container.but2}>Learn More</Button>
                </Box>

               
                </Box>

            </Box>
        )
        
    }
}
export default Navigation(Card3);