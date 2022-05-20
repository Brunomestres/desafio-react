import React,{ useEffect } from 'react';
import {
  Container,
  Stack,
  Flex,
  useToast,
  Heading,
  Text
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LineChartSimple from '../../components/LineChartSimple';
import BarChartSimple from '../../components/BarChartSimple';
import TableProduct from '../../components/TableProduct';
import Mapa from '../../components/Mapa';


function Home() {
  let navigate = useNavigate();
  let toast = useToast();
  
  
  useEffect(() => { 
    let token = localStorage.getItem('token');
    if(!token) {
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
    <>
      <Container maxW={'7xl'}>
        <Stack mt={20} spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>This is the headline</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Text>
        </Stack>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'column' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <LineChartSimple></LineChartSimple>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <BarChartSimple></BarChartSimple>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} w={850}>
            <TableProduct />
          </Stack>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Mapa />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Home;




