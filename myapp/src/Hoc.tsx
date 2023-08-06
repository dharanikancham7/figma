
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background:"#74C69D",
    //   width:'95%',
      padding: '20px',
    //   position: "fixed",
    // //    bottom: "0",
    //   right: "0",
    // "@media screen and (max-width:700px)":{
        
    // }



    },
    
    head:{
        fontfamily: "Work Sans",
        fontSize: "40px",
        fontWeight: "500",
        lineHeight: "50px",
        letterSpacing: "0px",
        textAlign: "left",
        color: "#FFFFFF",
        
    },
    nav:{
        display:"flex",
        // justifyContent:"space-around",
        // width:"200px"


    },
    navItems:{
        display:"flex",
         justifyContent:"space-around",
        width:"400px",
        "@media screen and (max-width:700px)":{
            display:"none"
        }
    },
    navItemss:{
        // display:"flex",
        //  justifyContent:"space-around",
        // width:"400px",
        "@media screen and (min-width:700px)":{
            display:"none"
         }
    },
    navHead:{
        display:"flex",
        justifyContent:"space-between",
        color:"white"

    },
    firstPara:{
        width:"500px",
        padding:"10px",
        display:"flex",
        flexDirection:"column",
        color:"white",
        justyfyContent:"flex-start",
        alignItems:"flex-start",
        margin:"10px",
        "@media screen and (max-width:700px)":{
            width:"300px"

        }
    },
    but:{
        backgroundColor:"#FFFFFF !important",
        color:"black !important" ,
        height: "48px !important",
      width: "170px !important" ,
      left: "0px",
     top: "0px",
    borderRadius: "5px !important",

    },
para:{
        fontfamily: 'Work Sans !important',
fontStyle: "normal !important",
fontWeight: "400 !important",
fontSize: "15px !important",
lineHeight:"125% !important",
    },
    para1:{
fontfamily: 'Crimson Text !important',
fontStyle: "normal !important",
fontWeight: "700 !important",
fontSize: "40px !important",
lineHeight: "125% !important",
    }, 
    spaceBetween:{
        display:"flex",
        // width:"1100px",
        justifyContent:"space-between",
        marginTop:"30px",
        "@media screen and (max-width:700px)":{
            display:"none"
        
        }

    },
    spaceBetweenn:{
        "@media screen and (max-width:700px)":{
            display:"flex",
            flexDirection:"column",
        
        },
        "@media screen and (min-width:700px)":{
            display:"none"
        }
    },
    secondCard:{
        background:"#F5F5F5",
        // width:'100%',
        padding:"20px",
        textAlign:"center"
    },

    secondHead1:{
//         width: "121px",
// height: "20px",

/* Typography / Label / Bold */

fontFamily: 'Work Sans',
fontStyle: "normal",
fontWeight: "700",
fontSize: "16px",
lineHeight: "125%",
/* identical to box height, or 20px */
letterSpacing: "5px",
textTransform: "uppercase",

/* Color / Green / 100 */

color: "#74C69D",


/* Inside auto layout */

// flex: "none",
// order: "0",
// flexGrow: "0",
    },
    secondHead2:{
        

/* Typography/Heading/Bold 1 */

fontFamily: 'Crimson Text !important',
fontStyle: "normal !important",
fontWeight: "700 !important",
fontSize: "40px !important",
lineHeight: "125% !important",
/* identical to box height, or 50px */

// textAlign: "center",

/* Text_Black */

color: "#000000",


    },
    secondHead3:{
       
/* Typography/Sub-Heading/Regular */

fontFamily: 'Work Sans !important',
fontStyle: "normal !important",
fontWeight: "400 !important",
fontSize: "20px !important",
lineHeight: "125% !important",
marginBottom:"20px",
/* or 25px */

// textAlign: "center",

/* Text_Black */

color: "#000000 !important",
    },
    secondCardContainer1:{
        textAlign:"center",

    },
    secondCardContainer2:{
        display:"flex",
        // width:"1000px",
        justifyContent:"space-between",
        marginTop:"40px",
        marginBottom:"50px",
        "@media screen and (max-width:700px)":{
            flexDirection:"column",
            justifyContent:"center",
            textAlign:"center",
            alignItems:"center",
            // height:"400px"
        }
    },
    but2:{
        
        backgroundColor:" #212529 !important",
        color:"white !important" ,
        height: "48px !important",
      width: "170px !important" ,
      left: "0px",
     top: "0px",
    borderRadius: "5px !important",

   
    },
    card3:{
        background:"#F5F5F5",
        width:"100%",
        // display:"flex",
        // width:"1100px",
        // justifyContent:"space-between"
        // textAlign:"center"
        
    },
    card3Image:{
        height: "300px",
width: "500px",
"@media screen and (max-width:700px)":{
    width:"350px",
    Height:"200px"
}


    },
    head2:{
        fontfamily: "Work Sans",
        fontSize: "40px",
        fontWeight: "500",
        lineHeight: "50px",
        letterSpacing: "0px",
        textAlign: "left",
        color: "black",
        
    },
    card2para2:{
        color:"black",

    },
    cardlast:{
        height: "200px",
        width: "150px",
        left: "0px",
        top: "0px",
        borderRadius: "5px",
        background:"white",
        padding:"20px",
        // marginLeft:"45px",
        // marginTop:"20px",
        marginBottom:"20px",
        boxShadow: "3px 4px 12px 1px rgba(0, 0, 0, 0.25)",
        
        // textAlign:"left"
        "@media screen and (max-width:700px)":{
            // marginLeft:"65px",
        }
        
        
    },
    textlast:{
        textAlign:"left",
    },
    imagelast:{
        height:"100px",
        width:"100px",
    },
    lastCardFlex:{
        display:"flex",
        // marginLeft:"10px",
        justifyContent:"space-between",
        // boxShadow: "3px 4px 12px 1px rgba(0, 0, 0, 0.25)",

        "@media screen and (max-width:700px)":{
            flexDirection:"column",
            justifyConten:"center",
            alignItems:"center"

        }

        

    },
    flexitems:{
        display:"flex",
        justifyContent:"space-between",
        // alignItems:"center"
    },
    insta:{
        display:"flex",
        width:"300px",
        justifyContent:"space-between"

    },
    footterparastyles:{
        color:"white",
    },
    roots: {
        background:"#74C69D",
      //   width:'95%',
        padding: '20px',
      //   position: "fixed",
      // //    bottom: "0",
      //   right: "0",
      "@media screen and (max-width:700px)":{
        //   display:"block"
      },
  
        height:"15px"  
  
      },

      navTags:{
        display:"flex",
        flexDirection:"column"
      }

  });



const Navigation = (Component: any) => {
    const Content = (props: any) => {
      const classes = useStyles();
      return <Component {...props} classes={classes} />;
    };
    return Content;
  };
export default Navigation;