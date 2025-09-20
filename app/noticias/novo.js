import { useState } from 'react';
import { 
  View, TextInput, Alert, TouchableOpacity, Text, 
  KeyboardAvoidingView, Platform, ScrollView, Image 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import api from '../../lib/api';
import { noticiasStyles as styles } from '../../styles/noticiasStyles';

export default function NovaNoticia() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [inputHeight, setInputHeight] = useState(150);
  const router = useRouter();

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

  const salvarNoticia = async () => {
    if (!titulo || !conteudo) {
      Alert.alert('Erro', 'Título e conteúdo são obrigatórios.');
      return;
    }

    try {
      const response = await api.post('/cadastro-noticias/', {
        id_noticias: 0,
        titulo_noticias: titulo,
        conteudo_noticias: conteudo,
      });

      const id = response.data.id_noticias; 
      if (id && imagem) {
        await AsyncStorage.setItem(`imagem_${id}`, imagem);
      }

      Alert.alert('Sucesso', 'Notícia cadastrada!');
      router.back();
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível salvar a notícia.');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Nova Notícia</Text>

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

        <TouchableOpacity style={styles.button} onPress={salvarNoticia}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
