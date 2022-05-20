import React, { useEffect } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export default function About() {
  let navigate = useNavigate();
  let toast = useToast();
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (!token){
      navigate('/');
      toast({
        title: "Acesso Negado",
        description:"Entre com sua conta" ,
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }    
  }, [])

  return (
    <Container maxW={'5xl'} py={67} mb={200}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Sua História
          </Text>
          <Heading>Lorem ipsum dolor sit amet, consetetu</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut laboreLorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labor
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labor
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}