import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      setError('');
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError('El usuario o la contraseña son incorrectas');
      } else {
        login(userDetails);
      }
    }
  });

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        autoCapitalize='none'
        style={[styles.input, { marginBottom: 8 }]}
        placeholder='Nombre de usuario'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        secureTextEntry={true}
        autoCapitalize='none'
        style={[styles.input, { marginBottom: 32 }]}
        placeholder='Contraseña'
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Pressable style={styles.btn} onPress={formik.handleSubmit}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </Pressable>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues() {
  return {
    username: '',
    password: ''
  }
}

function validationSchema() {
  return {
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  },
  btn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12
  },
  btnText: {
    color: '#fff',
    fontWeight: '600'
  }
});

export default LoginForm