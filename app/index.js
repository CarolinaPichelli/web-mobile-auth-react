import { useState } from 'react';
import { 
  View, 
  TextInput, 
  Alert, 
  TouchableOpacity, 
  Text, 
  ActivityIndicator, 
  Pressable 
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import api from '../lib/api';
import { loginStyles as styles } from '../styles/loginStyle';
import LoginSignupBackground from './components/LoginSignupBackground'; 

export default function Login() {
  const [email_usuario, setEmail] = useState('');
  const [senha_usuario, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email_usuario || !senha_usuario) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }
    setLoading(true);
    try {
      const response = await api.post('/login-usuario/', {
        nome_usuario: 'login_attempt',
        email_usuario,
        senha_usuario
      });
      Alert.alert('Sucesso', response.data.message);
      router.replace('/noticias');
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Email ou senha incorretos!';
      Alert.alert('Erro no Login', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginSignupBackground>
      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Entre com sua conta</Text>

        {/* Campo Email */}
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={20} color="#A9A9A9" style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            value={email_usuario}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="#A9A9A9" style={styles.inputIcon} />
          <TextInput
            placeholder="Senha"
            value={senha_usuario}
            onChangeText={setSenha}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={20} color="#A9A9A9" />
          </Pressable>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#6C7A89" style={{ marginVertical: 20 }} />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        )}

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Não possui conta?</Text>
          <TouchableOpacity onPress={() => router.push('/cadastro')}>
            <Text style={styles.linkText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LoginSignupBackground>
  );
}
