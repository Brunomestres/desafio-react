import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Center,
  Text
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import SocialButton from '../SocialButton';
import  data  from '../../data.json';

export default function FormLogin(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  let navigate = useNavigate();
  let users = data.users
  function gerarToken() {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 10; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

  function onLogin(e:FormEvent){
    e.preventDefault();
    users.forEach(item => {
      if(item.login === email && item.password === password){
        setToken(gerarToken());
        localStorage.setItem('token',JSON.stringify(token));
        navigate('/home' , { replace: true });

        return item;
      }
      return;
    });
    
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Entre com sua conta</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={2}>
              <SocialButton />
              <Button
                m={10}
                w={'full'}
                maxW={'md'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={onLogin}>
                  <Center>
                    <Text>Entrar</Text>
                  </Center>
                </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}