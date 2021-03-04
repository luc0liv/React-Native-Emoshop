import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      marginTop: 30,
      
    },

    logo:{
      width:'100%',
      height:'20%',
      position:'fixed',
      top:80,
      left:0,
      right:0,
      bottom:0,
    
    },

    imgs:{ 
      alignSelf: 'center',
      margin: 10,
      width:'200px',
      height:'200px',
     
      
    },

    prices: {
      fontFamily: 'Verdana',
      fontSize: '12pt',
      textAlign: 'center',

    },

    botoes:{
      flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
     
    },

    divisor: {

   alignSelf:"center",
   backgroundColor: "#212529",
   width: "80%",
   height: "2px",
   margin: 10,

    },

    input:{
      width:'auto',
      color:"#212529",
      padding:5,
      margin: 5,
      borderColor: "#c77dff",
      borderWidth: 2,
      padding: 10,
      fontWeight: "bold",
      
    },
    
    containerBtn:{
      flexDirection:'row',
      width:'100%',
      alignSelf:'flex-end',
      borderTopWidth:3,
      borderBottomWidth:1,
      borderColor:'#c77dff',
      position: 'fixed',
      bottom:0,
      backgroundColor:'#FAFAFA',
      justifyContent:'space-around',
      padding: 5,
    },
    btnMenu:{
      marginHorizontal:10,
    },
    btnlogin:{
      height:50,
      width:50,
      justifyContent:'center',
      alignItems:'center',
      borderColor:'#333',
      backgroundColor:'#FAFAFA',
    },
    iconlogin:{
      height:40,
      width:40,
    },

    textao:{ 
      backgroundColor: '#c77dff',
      fontFamily:"Verdana",
      fontSize: "14pt",
      fontWeight:"bold",
      marginTop: 130,
      marginLeft: 20,
      marginRight:10,
     padding: 20,
     textAlign: "center",

    },
    textao2:{ 
      borderRadius: 2,
      borderWidth: 2,
     borderColor: "#c77dff",
      fontFamily:"Verdana",
      fontSize: "14pt",
      marginBottom: 10,
      marginTop: 30,
      marginLeft: 20,
      marginRight:10,
     padding: 20,
     textAlign: "left",

    },

    btnOut:{

      alignItems: "center",
      backgroundColor:"#212529", 
      borderRadius: 30,
      justifyContent: "center",
      marginTop: 30,
      padding: 5,
      width: 200,
    },

    btnInside: {
      
      color: "#f8f9fa",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    }
  });

  export {styles};