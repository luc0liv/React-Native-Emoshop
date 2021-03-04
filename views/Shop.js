import React from 'react';
import { Text, View,Image,TouchableOpacity, ScrollView, Button } from 'react-native';
import { Divider } from 'react-native-paper';
import {styles} from './Css';


export default function Shop(props){

    return (
<View style={styles.container}>

    <Image resizeMode='contain' source={require('../assets/logo.png')} style={styles.logo}/>

  <ScrollView>

  <Text style={styles.textao}>Boas compras</Text>

  <Image resizeMode='contain' source={require('../assets/Sempiternal.png')} style={styles.imgs}/>
  <Text style={styles.prices}>Bring Me The Horizon | Sempiternal | R$ 190,00</Text>

  <View style={styles.botoes}>
  <Button title="Buy me" color="#212529" />
  <Button title="Add to Cart" color="#c77dff" />
</View>

<Divider style={styles.divisor}/>

  <Image resizeMode='contain' source={require('../assets/sualaegria.jpg')} style={styles.imgs}/>
  <Text style={styles.prices}>Fresno | Sua Alegria Foi Cancelada | R$ 40,00</Text>

  <View style={styles.botoes}>
  <Button title="Buy me" color="#212529" />
  <Button title="Add to Cart" color="#c77dff" />
</View>

<Divider style={styles.divisor}/>

  <Image resizeMode='contain' source={require('../assets/3cheers.jpg')} style={styles.imgs}/>
  <Text style={styles.prices}>My Chemical Romance | Three Cheers For Sweet Revenge| R$ 100,00</Text>

  <View style={styles.botoes}>
  <Button title="Buy me" color="#212529" />
  <Button title="Add to Cart" color="#c77dff" />
  </View>
 
 <Divider style={styles.divisor}/>

 <Image resizeMode='contain' source={require('../assets/theused.jpg')} style={styles.imgs}/>
  <Text style={styles.prices}>The Used | Heartwork | R$ 131,12</Text>

  <View style={styles.botoes}>
  <Button title="Buy me" color="#212529" />
  <Button title="Add to Cart" color="#c77dff" />
  </View>
 
 <Divider style={styles.divisor}/>

 <Image resizeMode='contain' source={require('../assets/nulo.jpg')} style={styles.imgs}/>

 
  </ScrollView>
    
<View style={styles.containerBtn}>

 <TouchableOpacity style={styles.btnlogin} title='Home' onPress={ ()=> props.navigation.navigate("Home")}>
<Image resizeMode='contain' source={require('../assets/home.png')} style={styles.iconlogin}/>
<Text>Home</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btnlogin} title='Login' onPress={ ()=> props.navigation.navigate("Login")}>
<Image resizeMode='contain' source={require('../assets/login.png')} style={styles.iconlogin}/>
<Text>Login</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btnMenu} title='Fale Conosco' onPress={ ()=> props.navigation.navigate("Faleconosco")}>
<Image resizeMode='contain' source={require('../assets/contact.png')} style={styles.iconlogin}/>
<Text>Contact us</Text>
</TouchableOpacity>


    </View>

</View>
    )
}
