import {Component} from "react";
import{Box,Typography,Button} from "@mui/material";
import Navigation from "../../Hoc";
import Card2Image from "../../Card2Image.svg";


interface Iprops{
    classes:any

}
class Card2 extends Component<Iprops>{
    container:any=this.props.classes
    render() {
        return(
            <Box className={this.container.card3} id="Service">
                <Box className={this.container.spaceBetween}>
                <img alt="ff" className={this.container.card3Image} src={Card2Image}/>
                <Box className={this.container.firstPara}>
                    <Typography variant="h4" className={this.container.head2}>Lorem ipsum dolor sit amet consectetur </Typography>
                    <p className={this.container.card2para2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Button className={this.container.but2}>Learn More</Button>
                </Box>
                </Box>

                <Box className={this.container.spaceBetweenn}>
                <img  alt="hd" className={this.container.card3Image} src={Card2Image}/>
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
export default Navigation(Card2);