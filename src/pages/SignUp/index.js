import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Background from '~/components/Background';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';
import {signUpRequest} from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignInLink,
  SignInLinkText,
} from './styles';

export default function SignUp({navigation}) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }
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
            returnKeyType={'next'}
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType={'next'}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType={'send'}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>Registrar</SubmitButton>
        </Form>
        <SignInLink onPress={() => navigation.navigate('SignIn')}>
          <SignInLinkText>Já sou cadastrado</SignInLinkText>
        </SignInLink>
      </Container>
    </Background>
  );
}
