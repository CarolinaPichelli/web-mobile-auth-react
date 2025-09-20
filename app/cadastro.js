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
import { cadastroStyles as styles } from '../styles/cadastroStyle';
import LoginSignupBackground from './components/LoginSignupBackground'; 

export default function Cadastro() {
  const [nome_usuario, setNome] = useState('');
  const [email_usuario, setEmail] = useState('');
  const [senha_usuario, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCadastro = async () => {
    if (!nome_usuario || !email_usuario || !senha_usuario || !confirmarSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (senha_usuario !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/cadastro-usuario/', {
        nome_usuario,
        email_usuario,
        senha_usuario,
      });
      Alert.alert('Sucesso', response.data.message);
      router.replace('/'); 
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Não foi possível realizar o cadastro.';
      Alert.alert('Erro no Cadastro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginSignupBackground>
      <View style={styles.card}>
        <Text style={styles.title}>Crie sua Conta</Text>
        <Text style={styles.subtitle}>Preencha os campos abaixo</Text>

        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#A9A9A9" style={styles.inputIcon} />
          <TextInput
            placeholder="Nome Completo"
            value={nome_usuario}
            onChangeText={setNome}
            style={styles.input}
          />
        </View>

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

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="#A9A9A9" style={styles.inputIcon} />
          <TextInput
            placeholder="Confirmar Senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!showConfirmPassword}
            style={styles.input}
          />
          <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <FontAwesome name={showConfirmPassword ? "eye-slash" : "eye"} size={20} color="#A9A9A9" />
          </Pressable>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#6C7A89" style={{ marginVertical: 20 }} />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        )}

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Já possui conta?</Text>
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text style={styles.linkText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LoginSignupBackground>
  );
}
