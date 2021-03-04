import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TextInput,Image,TouchableOpacity  } from 'react-native';
import {styles} from './Css';


export default function Login(props)
{
    
    return(
        <View style={styles.container}>
            <Image resizeMode='contain' source={require('../assets/logo.png')} style={styles.logo}/>

            <TouchableOpacity>
                <Text style={{ marginTop: 30, fontSize:25, color:"#212529",fontWeight: "bold", }}>Faça seu login:</Text>
            </TouchableOpacity>

            <TextInput style={styles.input} placeholder="Digite seu usuário" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={text=>setSenha(text)} secureTextEntry={true}/>

            <TouchableOpacity style={styles.btnOut}>
            <Text style={styles.btnInside}>Fazer Login</Text>
            
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{ marginTop: 20, color:"#c77dff",fontWeight: "bold", }}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnlogin} title='Home' onPress={ ()=> props.navigation.navigate("Home")}>
                    <Image resizeMode='contain' source={require('../assets/home.png')} style={styles.iconlogin}/>
                    <Text>Home</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnlogin} title='Shop' onPress={ ()=> props.navigation.navigate("Shop")}>
                    <Image resizeMode='contain' source={require('../assets/buy.png')} style={styles.iconlogin}/>
                    <Text>Shop</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btnMenu} title='Fale Conosco' onPress={ ()=> props.navigation.navigate("Faleconosco")}>
                    <Image resizeMode='contain' source={require('../assets/contact.png')} style={styles.iconlogin}/>
                    <Text>Contact us</Text>
                </TouchableOpacity>

                
                
            </View>

        </View>
    );
}