import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Link,
  Container,
  VStack,
  AspectRatio,
  Spinner,
} from "@chakra-ui/react";

const Detalhes = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAnimeDetalhes = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}`
        );
        setAnime(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAnimeDetalhes();
  }, [id]);

  if (!anime) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
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
          Detalhes do Anime
        </Heading>
        <Link
          ml="4"
          fontWeight="bold"
          textDecoration="underline"
          _hover={{ textDecoration: "none" }}
          onClick={() => navigate(-1)}
        >
          Voltar
        </Link>
      </Box>
      <Box mt="90px" px="4" py="8">
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="flex-start"
            gap="8"
          >
            <Box
              bg="white"
              border="1px solid #ccc"
              borderRadius="lg"
              boxShadow="md"
              p="5"
              maxW="600px"
              w="100%"
              textAlign="center"
            >
              <Image
                src={anime.images.jpg.image_url}
                alt={anime.title}
                borderRadius="md"
                mb="4"
              />
              <Heading as="h3" fontSize="xl" mb="2">
                {anime.title}
              </Heading>
              <Text>
                <strong>Temporadas:</strong>{" "}
                {anime.seasons ? anime.seasons.length : "N/A"}
              </Text>
              <Text>
                <strong>Episódios:</strong> {anime.episodes}
              </Text>
              <Text>
                <strong>Ano de Lançamento:</strong>{" "}
                {anime.aired.from.split("-")[0]}
              </Text>
            </Box>
            <VStack align="start" spacing="4" maxW="560px" w="100%">
              {anime.trailer && anime.trailer.embed_url ? (
                <AspectRatio ratio={16 / 9} w="100%">
                  <iframe
                    src={anime.trailer.embed_url}
                    title={anime.title}
                    allowFullScreen
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </AspectRatio>
              ) : (
                <Text>Trailer não disponível</Text>
              )}
              <Text
                fontSize="md"
                p="4"
                bg="white"
                borderRadius="md"
                boxShadow="md"
              >
                {anime.synopsis}
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Detalhes;
