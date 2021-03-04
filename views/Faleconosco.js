import React from 'react';
import { Text, View, TextInput, Button,Image,TouchableOpacity  } from 'react-native';
import {styles} from './Css';

export default function Faleconosco(props)
{
    return(
        <View style={styles.container}>
            <Image resizeMode='contain' source={require('../assets/logo.png')} style={styles.logo}/>
            <TouchableOpacity>
                <Text style={{ marginTop: 30, fontSize:25, color:"#212529",fontWeight: "bold", }}>Mande sua mensagem:</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Digite seu e-mail" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Digite aqui sua mensagem" onChangeText={text=>setNome(text)}/>
            <TouchableOpacity style={styles.btnOut}>

            <Text style={styles.btnInside}>Enviar Mensagem</Text>
            
            </TouchableOpacity>

            <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btnlogin} title='Home' onPress={ ()=> props.navigation.navigate("Home")}>
                    <Image resizeMode='contain' source={require('../assets/home.png')} style={styles.iconlogin}/>
                <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnlogin} title='Login' onPress={ ()=> props.navigation.navigate("Login")}>
                    <Image resizeMode='contain' source={require('../assets/login.png')} style={styles.iconlogin}/>
                <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnlogin} title='Shop' onPress={ ()=> props.navigation.navigate("Shop")}>
                    <Image resizeMode='contain' source={require('../assets/buy.png')} style={styles.iconlogin}/>
                    <Text>Shop</Text>
                </TouchableOpacity>
                
               
            </View>

        </View>
    );
}