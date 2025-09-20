import { useState, useEffect } from 'react';
import { 
  TextInput, 
  Alert, 
  TouchableOpacity, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  ActivityIndicator, 
  Image 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useLocalSearchParams } from 'expo-router';
import api from '../../lib/api';
import { noticiasStyles as styles } from '../../styles/noticiasStyles';

export default function EditarNoticia() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [inputHeight, setInputHeight] = useState(150);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const carregarDadosNoticia = async () => {
        try {
          const response = await api.get('/select-noticias/');
          const noticiaAtual = response.data.find((n) => n.id_noticias == id);
          if (noticiaAtual) {
            setTitulo(noticiaAtual.titulo_noticias);
            setConteudo(noticiaAtual.conteudo_noticias);

            const imagemSalva = await AsyncStorage.getItem(`imagem_${id}`);
            setImagem(imagemSalva || null);
          }
        } catch (error) {
          Alert.alert('Erro', 'Não foi possível carregar os dados da notícia.');
        } finally {
          setLoading(false);
        }
      };
      carregarDadosNoticia();
    }
  }, [id]);

  const escolherImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      setImagem(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  };

  const atualizarNoticia = async () => {
    if (!titulo || !conteudo) {
      Alert.alert('Erro', 'Título e conteúdo são obrigatórios.');
      return;
    }
    try {
      await api.post('/update-noticias/', {
        id_noticias: parseInt(id),
        titulo_noticias: titulo,
        conteudo_noticias: conteudo,
      });

      if (imagem) {
        await AsyncStorage.setItem(`imagem_${id}`, imagem);
      }

      Alert.alert('Sucesso', 'Notícia atualizada!');
      router.back();
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível atualizar a notícia.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={{ flex: 1 }} />;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Editar Notícia</Text>

        <TouchableOpacity onPress={escolherImagem} style={{ marginBottom: 20 }}>
          <Image
            source={imagem ? { uri: imagem } : require('../../assets/placeholder.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={{ textAlign: 'center', color: '#6C757D', marginTop: 8 }}>
            {imagem ? 'Trocar imagem' : 'Selecionar imagem'}
          </Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Título da Notícia"
          value={titulo}
          onChangeText={setTitulo}
          style={styles.input}
        />

        <TextInput
          placeholder="Conteúdo da Notícia"
          value={conteudo}
          onChangeText={setConteudo}
          style={[styles.input, { height: inputHeight }]}
          multiline
          onContentSizeChange={(e) =>
            setInputHeight(Math.max(150, e.nativeEvent.contentSize.height))
          }
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.button} onPress={atualizarNoticia}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
