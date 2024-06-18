import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Link,
  VStack,
  Container,
  Spinner,
} from "@chakra-ui/react";

const Listagem = () => {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const getAnimes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/top/anime?page=${page}`
      );
      setAnimes((prevAnimes) => [...prevAnimes, ...response.data.data]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getAnimes();
  }, [page, getAnimes]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!animes.length && !loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Heading>Lista de Animes em branco</Heading>
      </Flex>
    );
  }

  return (
    <Box>
      <Box
        bg="gray.800"
        color="white"
        py="4"
        px="8"
        textAlign="center"
        boxShadow="md"
        position="fixed"
        top="0"
        width="100%"
        zIndex="1000"
      >
        <Heading as="h1" fontSize="24px" mb="2">
          Lista de Animes
        </Heading>
        <Link
              ml="4"
              fontWeight="bold"
              textDecoration="underline"
              _hover={{ textDecoration: "none" }}
              onClick={() => Navigate(-1)}
            >
              Voltar
            </Link>
      </Box>
      <Box mt="90px" px="4" py="8">
        <Container maxW="container.xl">
          <Flex wrap="wrap" justify="center" gap="6">
            {animes.map((anime) => (
              <VStack
                key={anime.mal_id}
                bg="white"
                border="1px solid #ccc"
                borderRadius="lg"
                boxShadow="md"
                overflow="hidden"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)" }}
                width="250px"
                textAlign="center"
                p="4"
              >
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  borderRadius="md"
                />
                <Heading as="h3" fontSize="xl" mt="2">
                  {anime.title}
                </Heading>
                <Text>
                  <strong>Episódios:</strong> {anime.episodes}
                </Text>
                <Text>
                  <strong>Ano de Lançamento:</strong>{" "}
                  {anime.aired.from.split("-")[0]}
                </Text>
                <Link
                  as={RouterLink}
                  to={`/Detalhes/${anime.mal_id}`}
                  color="blue.500"
                  mt="2"
                >
                  Ver mais
                </Link>
              </VStack>
            ))}
          </Flex>
          {loading && (
            <Flex justify="center" mt="6">
              <Spinner size="xl" />
            </Flex>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Listagem;