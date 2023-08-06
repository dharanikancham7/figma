import {Component} from "react";
import{Box,Typography,Button} from "@mui/material";
import Navigation from "../../Hoc";
import Group14 from "../../Group14.svg";
import Group15 from "../../Group15.svg";
import Group16 from "../../Group16.svg";
import Group17 from "../../Group17 (1).svg"

interface Iprops{
    classes:any

}
class Teams extends Component<Iprops>{
    container:any=this.props.classes
    render(){
        return(
            <Box className={this.container.secondCard} >
                 <Box className={this.container.secondCardContainer1}>
                    <Typography className={this.container.secondHead1}>
                    Teams
                    </Typography>
                    <Typography className={this.container.secondHead2}>Our Teams</Typography>
                    <Typography className={this.container.secondHead3}>Lorem ipsum, dolor sit amet consectetur
Suscipit nemo hic quos, ab,</Typography>

                </Box>
                <Box className={this.container.lastCardFlex}>
                <Box className={this.container.cardlast}>
                    <img alt="teams" className={this.container.imagelast} src={Group14}/>
                    <Box className={this.container.textlast}>
                    <p>Peg Legge</p>
                    <p>CEO</p>

                    </Box>
                    

                </Box>
                <Box className={this.container.cardlast}>
                    <img  alt="teams" className={this.container.imagelast}src={Group15}/>
                    <Box className={this.container.textlast}>
                    <p>Peg Legge</p>
                    <p>CEO</p>

                    </Box>
                    

                </Box>
                <Box className={this.container.cardlast}>
                    <img alt="teams"  className={this.container.imagelast} src={Group16}/>
                    <Box className={this.container.textlast}>
                    <p>Peg Legge</p>
                    <p>CEO</p>

                    </Box>
                    

                </Box>
                <Box className={this.container.cardlast}>
                    <img alt="teams" className={this.container.imagelast} src={Group17}/>
                    <Box className={this.container.textlast}>
                    <p>Peg Legge</p>
                    <p>CEO</p>

                    </Box>
                    

                </Box>

                




                </Box>
                <Button className={this.container.but2}>Learn More</Button>
                

            </Box>

        )
    }
}
export default Navigation(Teams);