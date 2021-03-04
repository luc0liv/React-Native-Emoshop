import React from 'react';
import {styles} from './Css';
import { Text,View, Image,TouchableOpacity,ScrollView  } from 'react-native';


export default function Home(props)
{

    
    return(
        
        <View style={styles.container}>
            <Image resizeMode='contain' source={require('../assets/logo.png')} style={styles.logo}/>

            <ScrollView>
                
            <Text style={styles.textao} >Seja bem-vinde a Emoshop! 
            </Text>
           
            <Text style={styles.textao2} >
            Aqui você encontrará os melhores conteúdos sobre a subcultura Emo. <br />
             Além de items para completar sua coleção de Cd's e LP's. <br />
            </Text>

            <Text style={styles.textao2} >
            Fique à vontade para explorar nossa plataforma.</Text>
            
            
            
            
        </ScrollView>
            
            
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnlogin} title='Login' onPress={ ()=> props.navigation.navigate("Login")}>
                    <Image resizeMode='contain' source={require('../assets/login.png')} style={styles.iconlogin}/>
               <Text>Login</Text> 
               </TouchableOpacity>
                <TouchableOpacity style={styles.btnlogin} title='Shop' onPress={ ()=> props.navigation.navigate("Shop")}>
                    <Image resizeMode='contain' source={require('../assets/buy.png')} style={styles.iconlogin}/>
                   <Text>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnMenu} title='Fale Conosco' onPress={ ()=> props.navigation.navigate("Faleconosco")}>
                    <Image resizeMode='contain' source={require('../assets/contact.png')} style={styles.iconlogin}/>
                <Text>Contact Us</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
      

}