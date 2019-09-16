import React from 'react';
import Background from '~/components/Background';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignInLink,
  SignInLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Sua senha"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInLinkText>Já sou cadastrado</SignInLinkText>
        </SignInLink>
      </Container>
    </Background>
  );
}
