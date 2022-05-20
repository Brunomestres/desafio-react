import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useNavigate, Link } from "react-router-dom";
export default function NavBar() {
  let navigate = useNavigate();
  let token = localStorage.getItem('token');
  let buttonLogout;
  let links;
  
  if(token){
    buttonLogout = <Button
      as={'a'}
      fontSize={'sm'}
      fontWeight={400}
      variant={'link'}
      href={'#'}
      mr={15}
      onClick={() => logout()}>
      Logout
    </Button>

    links = <Stack flex={{ base: 1, md: 0 }}
                  justify={'flex-end'}
                  ml={15}
                  direction={'row'}
                  spacing={6}>
              <Link to='home'>Home</Link>
              <Link to='about'>Sobre</Link>
            </Stack>

  }else {
    buttonLogout = <></>
    links = <></>
  }


  function logout(){
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.200', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Pós Controle
          </Text>
          { links }
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          
          { buttonLogout }
          
        </Stack>
      </Flex>
    </Box>
  );
}

