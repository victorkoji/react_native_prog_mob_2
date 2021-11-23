import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Alert, ScrollView } from "react-native";
import { Divider, TextInput, Title } from "react-native-paper";
import { Colors, Picker } from "react-native-ui-lib";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/core";

import User from "../../database/models/User";
import UserService from "../../database/services/userService";

import Aluno from "../../database/models/Student";
import AlunoService from "../../database/services/alunoService";

import Admin from "../../database/models/Admin";
import AdminService from "../../database/services/adminService";

const fieldValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email não pode ser vazio")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min(3, "A senha deve conter pelo menos 6 dígitos"),
  passwordConfirmation: yup
    .string()
    .test("passwords-match", "As senhas devem ser iguais", function (value) {
      return this.parent.password === value;
    }),
  tipoUsuario: yup.string().required("O tipo de usuário não pode ser vazio"),
  name: yup
    .string()
    .required("O nome não pode ser vazio"),
});

export default function AddUser() {
  const navigation = useNavigation();
  const [tipoUsuario, setTipoUsuario] = useState("");
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(fieldValidationSchema),
  });

  const onSubmit = async (data) => {
    try {
      // const user = new User(1, data.email, data.password, data.tipoUsuario);
      // const user_id = await UserService.addData(user);

      // if(data.tipoUsuario == "admin"){
      //   const admin = await new Admin(data.name, user_id)
      //   const admin_id = await AdminService.addData(admin);
      // }else{
      //   const aluno = await new Aluno(data.name, user_id)
      //   const aluno_id = await AlunoService.addData(aluno);
      // }

      console.log(getValues("email"))
      // setValue("password", "")
      // setValue("passwordConfirmation", "")
      // setValue("tipoUsuario", "")
      // setValue("name", "")

      navigation.navigate("Users");
      Alert.alert("Cadastrado com sucesso!");
    } catch (error) {
      Alert.alert("Não foi possível cadastrar!");
    }
  };

  useEffect(() => {
    register("email");
    register("password");
    register("passwordConfirmation");
    register("tipoUsuario");
    register("name");
  }, [register]);

  return (
    <ScrollView>
      <View style={Style.container}>
        <Title>Login</Title>
        <TextField
          label="Email"
          error={errors?.email}
          placeholder={"Digite seu email"}
          onChangeText={(text) => setValue("email", text)}
        />
        <TextField
          label="Senha"
          secureTextEntry={true}
          error={errors?.password}
          placeholder={"Digite sua senha"}
          onChangeText={(text) => setValue("password", text)}
        />

        <TextField
          label="Confirmar Senha"
          secureTextEntry={true}
          error={errors?.passwordConfirmation}
          placeholder={"Digite sua senha"}
          onChangeText={(text) => setValue("passwordConfirmation", text)}
        />

        <Picker
          placeholder="Tipo de Usuário"
          value={tipoUsuario}
          floatingPlaceholder
          enableModalBlur={false}
          onChange={(item) => {
            setTipoUsuario(item.value);
            setValue("tipoUsuario", item.value);
          }}
          topBarProps={{ title: "Tipo de Usuário" }}
          style={{ width: "80%", color: Colors.red20 }}
          searchStyle={{
            color: Colors.blue30,
            placeholderTextColor: Colors.grey50,
          }}
        >
          <Picker.Item key={"1"} value={"admin"} label={"Admin"} />
          <Picker.Item key={"2"} value={"aluno"} label={"Aluno"} />
        </Picker>
        {!!errors?.tipoUsuario && (
          <Text style={Style.errorMessage}>{errors?.tipoUsuario.message}</Text>
        )}

        <Title>Informações Gerais</Title>

        <TextField
          label="Nome"
          error={errors?.name}
          placeholder={"Digite seu nome"}
          onChangeText={(text) => setValue("name", text)}
        />

        <TouchableOpacity
          style={Style.loginBtn}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={Style.loginText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const TextField = ({ error, label, ...inputProps }) => (
  <View style={Style.containerInput}>
    <View>
      <TextInput
        label={label}
        error={!!error && Style.borderError}
        mode="outlined"
        {...inputProps}
      />
      {!!error && <Text style={Style.errorMessage}>{error.message}</Text>}
    </View>
  </View>
);

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  containerInput: {
    width: "80%",
    marginBottom: 20,
  },
  borderError: {
    borderWidth: 1,
    borderColor: "rgba(200,0,50,1)",
  },
  errorMessage: {
    fontSize: 12,
    color: "rgba(200,0,50,1)",
    textAlign: "center",
    marginTop: 5,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#01518B",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
