import {Alert} from 'react-native';
import {all, takeLatest, put, call} from 'redux-saga/effects';
import api from '~/services/api';

import {updateProfileFailure, updateProfileSuccess} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;
    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, 'users', profile);
    Alert.alert('Sucesso', 'Perfil atualizado');
    yield put(updateProfileSuccess(response.data));
  } catch (e) {
    Alert.alert('Erro', 'Erro ao atualizar perfil');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
