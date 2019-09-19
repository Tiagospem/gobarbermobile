import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, ProviderList, Avatar, Provider, Name} from './styles';
import Background from '~/components/Background';

import api from '~/services/api';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
    }
    loadProviders();
  }, []);
  return (
    <Background>
      <Container>
        <ProviderList
          data={providers}
          keyExtrator={provider => String(provider.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', {provider})}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Selecione o prestador',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Main');
      }}>
      <Icon name={'chevron-left'} size={20} color={'#fff'} />
    </TouchableOpacity>
  ),
});
