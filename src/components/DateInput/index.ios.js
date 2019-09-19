import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, DateText, DateButton, Picker} from './styles';

export default function DateInput({date, onChange}) {
  const [opned, setOpned] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  return (
    <Container>
      <DateButton onPress={() => setOpned(!opned)}>
        <Icon name={'event'} color={'#fff'} size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      {opned && (
        <Picker>
          <DatePickerIOS
            date={date}
            minimumDate={new Date()}
            minuteInterval={60}
            locale={'pt'}
            mode={'date'}
            onDateChange={onChange}
          />
        </Picker>
      )}
    </Container>
  );
}
