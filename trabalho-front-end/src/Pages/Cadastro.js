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

const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucMessage, setSucMessage] = useState("");
  const navigate = useNavigate();

  const jaTemConta = () => {
    window.location.href = "/Login";
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMessage("Preencha todos os campos!");
      setSucMessage("");
    } else if (username.length < 8) {
      setErrorMessage("Nome de usuário precisa ter no mínimo 8 caracteres!");
      setSucMessage("");
    } else if (password.length < 8) {
      setErrorMessage("Senha precisa ter no mínimo 8 caracteres");
      setSucMessage("");
    } else if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem!");
      setSucMessage("");
    } else {
      setSucMessage(`Usuário ${username} cadastrado!`);
      sessionStorage.setItem('nome', username);
      sessionStorage.setItem('senha', password);
      alert("Redirecionando para página de Login!");
      navigate("/Login");
    }
  };

  return (
    <Box
      bgImage="url('https://tse1.mm.bing.net/th?id=OIG4.Mnlzl0.3aWerZmYlFB9_&pid=ImgGn')"
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
            Página de Cadastro
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
                <FormLabel color="white">Nome de Usuário:</FormLabel>
                <Input
                  type="text"
                  placeholder="Digite seu nome de usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  bg="white"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Email:</FormLabel>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="white"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel color="white">Senha:</FormLabel>
                <Input
                  type="password"
                  placeholder="Digite uma senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  bg="white"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Confirmar Senha:</FormLabel>
                <Input
                  type="password"
                  placeholder="Digite novamente a senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  bg="white"
                />
              </FormControl>
              {errorMessage && (
                <Text color="red.500" fontSize="sm">
                  {errorMessage}
                </Text>
              )}
              {sucMessage && (
                <Text color="green.500" fontSize="sm">
                  {sucMessage}
                </Text>
              )}
              <Flex justify="space-between" width="100%">
                <Button
                  type="submit"
                  colorScheme="green"
                  variant="solid"
                  width="48%"
                >
                  Finalizar cadastro
                </Button>
                <Button
                  onClick={jaTemConta}
                  colorScheme="blue"
                  variant="solid"
                  width="48%"
                >
                  Já tem uma conta?
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Cadastro;
