import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Container,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [animefiltrado, setanimefiltrado] = useState("");

  useEffect(() => {
    const getAnimeDetalhe = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${animefiltrado}`
        );
        setanimefiltrado(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAnimeDetalhe();
  }, [animefiltrado]);

  return (
    <Box bg="#f4f4f4" minHeight="100vh">
      <Box bg="gray.800" color="white" textAlign="center" py="5">
        <Heading as="h1" fontSize="2.5em">
          OtakuHub
        </Heading>
        <Text as="h3">Busque seu novo anime favorito aqui!</Text>
      </Box>
      <Box bg="gray.800">
        <Flex justify="center">
          <Input
            color="teal"
            placeholder="Buscar anime..."
            p="20px"
            borderRadius="25px"
            value={animefiltrado}
            onChange={(e) => setanimefiltrado(e.target.value)}
            w="850px"
            bg="teal.100"
          />
          <Button
            bg="teal"
            color="white"
            _hover={{ bg: "teal.200" }}
            borderRadius="25px"
          >
            Pesquisar
          </Button>
        </Flex>
      </Box>
      <Flex as="nav" justify="center" bg="gray.900" py="2">
        <Button colorScheme="teal" mx="2">
          <RouterLink to="/Login">Entrar</RouterLink>
        </Button>
        <Button colorScheme="teal" mx="2">
          <RouterLink to="/Cadastro">Cadastrar</RouterLink>
        </Button>
        <Button colorScheme="teal" mx="2">
          <RouterLink to="/Listagem">Lista de Animes</RouterLink>
        </Button>
      </Flex>
      <Container maxW="container.xl" py="10">
        <Heading as="h2" size="lg" textAlign="center" mb="6">
          Animes do Momento
        </Heading>
        <Flex justifyContent="space-around">
          <Box
            className="card"
            bg="white"
            border="1px solid #ddd"
            borderRadius="md"
            p="5"
            m="2"
            width="250px"
            boxShadow="md"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Image
              src="https://i.pinimg.com/236x/01/30/ea/0130ea9951133c58d2cad260c6a6d9f5.jpg"
              alt="Attack on Titan"
              borderRadius="md"
              mb="4"
            />
            <Heading as="h2" size="md">
              Attack on Titan
            </Heading>
            <Text>
              Um mundo onde humanos vivem em uma cidade cercada por paredes
              gigantes para se protegerem de criaturas humanoides gigantes.
            </Text>
          </Box>
          <Box
            className="card"
            bg="white"
            border="1px solid #ddd"
            borderRadius="md"
            p="5"
            m="2"
            width="250px"
            boxShadow="md"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Image
              src="https://i.pinimg.com/236x/5c/58/ad/5c58ad5e38ad45514ecf821e9aaa0a76.jpg"
              alt="Naruto"
              borderRadius="md"
              mb="4"
            />
            <Heading as="h2" size="md">
              Naruto
            </Heading>
            <Text>
              Uma história de um jovem ninja que sonha em se tornar o líder de
              seu vilarejo.
            </Text>
          </Box>
          <Box
            className="card"
            bg="white"
            border="1px solid #ddd"
            borderRadius="md"
            p="5"
            m="2"
            width="250px"
            boxShadow="md"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Image
              src="https://i.pinimg.com/736x/3e/c2/6d/3ec26d7e107d58018432a94d86cc7bbc.jpg"
              alt="One Piece"
              borderRadius="md"
              mb="4"
            />
            <Heading as="h2" size="md">
              One Piece
            </Heading>
            <Text>
              A jornada de Monkey D. Luffy e sua tripulação para encontrar o
              tesouro One Piece e se tornar o Rei dos Piratas.
            </Text>
          </Box>
          <Box
            className="card"
            bg="white"
            border="1px solid #ddd"
            borderRadius="md"
            p="5"
            m="2"
            width="250px"
            boxShadow="md"
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Image
              src="https://i.pinimg.com/236x/86/f6/72/86f672b83fb88d1ed6d081891bef51ae.jpg"
              alt="Dragon Ball"
              borderRadius="md"
              mb="4"
            />
            <Heading as="h2" size="md">
              Dragon Ball
            </Heading>
            <Text>
              As aventuras de Goku desde sua infância até se tornar um dos
              guerreiros mais poderosos do universo.
            </Text>
          </Box>
        </Flex>
      </Container>
      <Box
        as="footer"
        bg="gray.800"
        color="white"
        textAlign="center"
        py="20"
        w="100%"
      >
        <Text fontSize={25}>Direitos reservados a Felipe Marques</Text>
      </Box>
    </Box>
  );
};

export default Index;
