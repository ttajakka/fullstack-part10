import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  // input: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   fontSize: theme.fontSizes.subheading,
  //   color: theme.colors.textSecondary,
  //   margin: 10,
  //   marginBottom: 0,
  //   padding: 8,
  //   borderStyle: 'solid',
  //   borderWidth: 1,
  //   borderRadius: 4,
  //   borderColor: theme.colors.inputBorder,
  // },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 4,
    padding: 10,
    margin: 10,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        // style={styles.input}
        name="username"
        placeholder="Username"
        placeholderTextColor={theme.colors.placeholderText}
      />
      <FormikTextInput
        // style={styles.input}
        name="password"
        placeholder="Password"
        placeholderTextColor={theme.colors.placeholderText}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text color="white" fontSize="subheading" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
