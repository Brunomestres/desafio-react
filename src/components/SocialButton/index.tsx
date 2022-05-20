import { FaFacebook } from 'react-icons/fa';
import { Button, Center, Text } from '@chakra-ui/react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useNavigate } from 'react-router-dom';
export default function SocialButton() {
  let navigate = useNavigate();
  const responseFacebook = (response: any) => {
    if(response.accessToken){
      let token = response.accessToken;
      localStorage.setItem('token', JSON.stringify(token));
      navigate('/home');
    }
  }

  const onFailureFacebook = (response: any) => {
    console.log(response);
  }
  return (
      <FacebookLogin
          appId="713992326593863"
          autoLoad={false}
          fields="name,email,picture"
          onFailure={onFailureFacebook}
          callback={responseFacebook}
          render={renderProps => (
            <Button
              w={'full'}
              maxW={'md'}
              colorScheme={'facebook'}
              leftIcon={<FaFacebook />}
              onClick={renderProps.onClick}
              >
              <Center>
                <Text>Entre com Facebook</Text>
              </Center>
            </Button>
          )}  
      />
    
  );
}