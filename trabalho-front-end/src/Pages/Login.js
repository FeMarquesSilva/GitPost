import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCadastro = () => {
    window.location.href = "/Cadastro";
  };

  const usuarioCadastrado = sessionStorage.getItem("nome");
  const senhaCadastrado = sessionStorage.getItem("senha");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.length < 8) {
      setErrorMessage("Login precisa ter no mínimo 8 caracteres!");
    } else if (password.length < 8) {
      setErrorMessage("Senha precisa ter no mínimo 8 caracteres");
    } else if (username !== usuarioCadastrado || password !== senhaCadastrado) {
      setErrorMessage("Login ou senha inválidos");
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      bgImage="url('https://tse2.mm.bing.net/th?id=OIG2.GGQbTAtS1be0nEF9oRya&pid=ImgGn')"
      bgSize="cover"
      height="100vh"
    >
      <Box bg="rgba(0, 0, 0, 0.5)" height="100%">
        <Heading>
          <Flex
            bg="gray.800"
            p="4"
            color="white"
            justify="center"
            align="center"
            boxShadow="md"
            size="lg"
            as="h1"
          >
            Página de Login
            <Link
              ml="4"
              fontWeight="bold"
              textDecoration="underline"
              _hover={{ textDecoration: "none" }}
              onClick={() => navigate(-1)}
            >
              Voltar
            </Link>
          </Flex>
        </Heading>
        <Container mt="10" centerContent>
          <Box
            bg="gray.700"
            p="8"
            borderRadius="md"
            boxShadow="lg"
            width="100%"
            maxW="400px"
          >
            <VStack as="form" id="loginForm" onSubmit={handleLogin} spacing="4">
              <FormControl id="username">
                <FormLabel color="white">Usuário:</FormLabel>
                <Input
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  bg="white"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel color="white">Senha:</FormLabel>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  bg="white"
                />
              </FormControl>
              {errorMessage && (
                <Text color="red.500" fontSize="sm">
                  {errorMessage}
                </Text>
              )}
              <Flex justify="space-between" width="100%">
                <Button
                  type="submit"
                  colorScheme="green"
                  variant="solid"
                  width="48%"
                >
                  Entrar
                </Button>
                <Button
                  onClick={handleCadastro}
                  colorScheme="blue"
                  variant="solid"
                  width="48%"
                >
                  Cadastrar
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
