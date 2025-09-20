import { useState, useCallback } from 'react';
import { 
  View, Text, FlatList, ActivityIndicator, TouchableOpacity, 
  RefreshControl, Alert, Image 
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../lib/api';
import { noticiasStyles as styles } from '../../styles/noticiasStyles';
import { AntDesign } from '@expo/vector-icons';

export default function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const carregarNoticias = async () => {
    try {
      const response = await api.get('/select-noticias/');

      const noticiasComImagem = await Promise.all(
        response.data.map(async (n) => {
          const imagemSalva = await AsyncStorage.getItem(`imagem_${n.id_noticias}`);
          return { ...n, imagem: imagemSalva || null };
        })
      );

      setNoticias(noticiasComImagem);
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível carregar as notícias.');
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      carregarNoticias();
    }, [])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimas Notícias</Text>

      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id_noticias.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => router.push(`/noticias/${item.id_noticias}`)}
            activeOpacity={0.8}
          >
            <Image
              source={
                item.imagem
                  ? { uri: item.imagem }
                  : require('../../assets/placeholder.png')
              }
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>{item.titulo_noticias}</Text>
            <Text style={styles.cardContent} numberOfLines={3}>
              {item.conteudo_noticias}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>Nenhuma notícia encontrada.</Text>
        }
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={carregarNoticias} />
        }
      />

      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => router.push('/noticias/novo')}
        activeOpacity={0.8}
      >
        <AntDesign name="plus" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}
