import { View, StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary,
    margin: 10,
    marginBottom: 0,
    padding: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.inputBorder,
  },
  inputWithError: {
    borderColor: theme.colors.red
  },
  errorText: {
    marginTop: 5,
    marginLeft: 10,
    color: theme.colors.red
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={[styles.input, showError && styles.inputWithError]}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;