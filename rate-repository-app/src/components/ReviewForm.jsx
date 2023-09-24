import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';
import useCreateRevew from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
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
  ownerName: '',
  repositoryName: '',
  rating: 0,
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number()
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .required('Rating is required'),
  // text: yup.string().required('Username is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        placeholderTextColor={theme.colors.placeholderText}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        placeholderTextColor={theme.colors.placeholderText}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        placeholderTextColor={theme.colors.placeholderText}
      />
      <FormikTextInput
        name="text"
        placeholder="Reviews"
        placeholderTextColor={theme.colors.placeholderText}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text color="white" fontSize="subheading" fontWeight="bold">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const ReviewForm = () => {
  const [createReview] = useCreateRevew();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, text } = values;
    const rating = parseInt(values.rating);

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log('error:', e);
    }
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

export default ReviewForm;
