import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import {
  Link as RouterDomLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../context/auth-context';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const [showPassword, setshowPassword] = useState(false);
  const handleShowPasswordClick = () => setshowPassword(!showPassword);

  const from = location.state?.from?.pathname || '/';

  const toast = useToast();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const { error } = await signin({ email, password });

    if (!error) {
      navigate(from, { replace: true });
    } else {
      const { name, message } = error.toJSON();
      toast({
        title: name,
        description: message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex flexDir={['column', 'row']}>
      <Image maxH={['0', '100vh']} src="/images/loginbglarge.png" />
      <Flex flexDir={['column']}>
        <Flex
          flexDir="column"
          justifyContent="space-between"
          minH="64"
          bgImage={["url('/images/loginbgmobile.png')", '']}
          bgPosition="initial"
          bgRepeat="round"
          pt="12"
          pb="6"
          pl="26"
        >
          <svg
            width="54"
            height="55"
            viewBox="0 0 54 55"
            fill={'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5418 26.3092C11.1853 26.3092 14.139 23.1551 14.139 19.2644C14.139 15.3736 11.1853 12.2195 7.5418 12.2195C3.89826 12.2195 0.94458 15.3736 0.94458 19.2644C0.94458 23.1551 3.89826 26.3092 7.5418 26.3092Z"
              fill="white"
            />
            <path
              d="M19.4168 15.0374C23.0603 15.0374 26.014 11.8833 26.014 7.9925C26.014 4.10173 23.0603 0.947632 19.4168 0.947632C15.7733 0.947632 12.8196 4.10173 12.8196 7.9925C12.8196 11.8833 15.7733 15.0374 19.4168 15.0374Z"
              fill="white"
            />
            <path
              d="M35.2501 15.0374C38.8936 15.0374 41.8473 11.8833 41.8473 7.9925C41.8473 4.10173 38.8936 0.947632 35.2501 0.947632C31.6065 0.947632 28.6528 4.10173 28.6528 7.9925C28.6528 11.8833 31.6065 15.0374 35.2501 15.0374Z"
              fill="white"
            />
            <path
              d="M47.1251 26.3092C50.7686 26.3092 53.7223 23.1551 53.7223 19.2644C53.7223 15.3736 50.7686 12.2195 47.1251 12.2195C43.4815 12.2195 40.5278 15.3736 40.5278 19.2644C40.5278 23.1551 43.4815 26.3092 47.1251 26.3092Z"
              fill="white"
            />
            <path
              d="M41.425 34.3685C39.1292 31.4942 37.2028 29.0426 34.8805 26.1683C33.6667 24.6466 32.1097 23.1249 30.2625 22.4486C29.9722 22.3359 29.6819 22.2514 29.3917 22.195C28.7319 22.0823 28.0194 22.0823 27.3333 22.0823C26.6472 22.0823 25.9347 22.0823 25.2486 22.2232C24.9583 22.2795 24.668 22.3641 24.3778 22.4768C22.5305 23.1531 21 24.6748 19.7597 26.1965C17.4639 29.0708 15.5375 31.5224 13.2153 34.3967C9.75832 38.0882 5.50971 42.1742 6.30137 47.8947C7.06665 50.769 8.99304 53.6151 12.45 54.4323C14.3764 54.855 20.525 53.1924 27.0694 53.1924H27.5444C34.0889 53.1924 40.2375 54.8268 42.1639 54.4323C45.6208 53.6151 47.5472 50.7408 48.3125 47.8947C49.1305 42.1461 44.8819 38.06 41.425 34.3685Z"
              fill="white"
            />
          </svg>
          <Text
            fontSize="36"
            fontWeight="700"
            fontStyle="normal"
            lineHeight="49.03px"
            color="white"
          >
            Comece agora. Conecte-se já.
          </Text>
        </Flex>

        <Flex flexDir="column" px="8" pt="30" pb="6">
          <Text
            as="h3"
            fontStyle="normal"
            fontWeight="600"
            fontSize="24"
            lineHeight="40px"
            color="gray.900"
            mb="8"
          >
            Login
          </Text>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('E-mail inválido')
                .required('E-mail é obrigatório'),
              password: Yup.string().required('Senha é obrigatória'),
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing="8" mb="10">
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email">E-mail</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="E-mail"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <HStack justifyContent="space-between">
                          <FormLabel htmlFor="password">Senha</FormLabel>
                          <Link to="/login">
                            <Text
                              fontWeight="400"
                              fontSize="12"
                              lineHeight="16px"
                            >
                              Esqueci minha senha
                            </Text>
                          </Link>
                        </HStack>
                        <InputGroup>
                          <Input
                            {...field}
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Senha"
                          />
                          <InputRightElement>
                            <IconButton
                              icon={
                                showPassword ? <ViewOffIcon /> : <ViewIcon />
                              }
                              onClick={handleShowPasswordClick}
                              variant="unstyled"
                            />
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </VStack>

                <Button
                  width="full"
                  type="submit"
                  variant="solid"
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>

          <Text mt="6" fontWeight="400" fontSize="16" lineHeight="24px">
            {'Ainda não possui uma conta?'}
            <br />
            <Link as={RouterDomLink} to="/signup">
              Cadastrar-se
            </Link>
          </Text>
          <HStack mx="auto" mt="57">
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.06217 21.5C10.536 21.5 12.5413 19.4946 12.5413 17.0208C12.5413 14.547 10.536 12.5416 8.06217 12.5416C5.5884 12.5416 3.58301 14.547 3.58301 17.0208C3.58301 19.4946 5.5884 21.5 8.06217 21.5Z"
                fill="#00ACC1"
              />
              <path
                d="M16.1254 14.3333C18.5992 14.3333 20.6046 12.3279 20.6046 9.85417C20.6046 7.38039 18.5992 5.375 16.1254 5.375C13.6516 5.375 11.6462 7.38039 11.6462 9.85417C11.6462 12.3279 13.6516 14.3333 16.1254 14.3333Z"
                fill="#00ACC1"
              />
              <path
                d="M26.8747 14.3333C29.3485 14.3333 31.3538 12.3279 31.3538 9.85417C31.3538 7.38039 29.3485 5.375 26.8747 5.375C24.4009 5.375 22.3955 7.38039 22.3955 9.85417C22.3955 12.3279 24.4009 14.3333 26.8747 14.3333Z"
                fill="#00ACC1"
              />
              <path
                d="M34.9372 21.5C37.411 21.5 39.4163 19.4946 39.4163 17.0208C39.4163 14.547 37.411 12.5416 34.9372 12.5416C32.4634 12.5416 30.458 14.547 30.458 17.0208C30.458 19.4946 32.4634 21.5 34.9372 21.5Z"
                fill="#00ACC1"
              />
              <path
                d="M31.0672 26.6242C29.5085 24.7967 28.2006 23.2379 26.6239 21.4104C25.7997 20.4429 24.7427 19.4754 23.4885 19.0454C23.2914 18.9738 23.0943 18.92 22.8972 18.8842C22.4493 18.8125 21.9656 18.8125 21.4997 18.8125C21.0339 18.8125 20.5502 18.8125 20.0843 18.9021C19.8872 18.9379 19.6902 18.9917 19.4931 19.0633C18.2389 19.4933 17.1997 20.4608 16.3577 21.4283C14.7989 23.2558 13.491 24.8146 11.9143 26.6421C9.56725 28.9892 6.68267 31.5871 7.22017 35.2242C7.73975 37.0517 9.04767 38.8612 11.3947 39.3808C12.7027 39.6496 16.8772 38.5925 21.3206 38.5925H21.6431C26.0864 38.5925 30.261 39.6317 31.5689 39.3808C33.916 38.8612 35.2239 37.0337 35.7435 35.2242C36.2989 31.5692 33.4143 28.9712 31.0672 26.6242Z"
                fill="#00ACC1"
              />
            </svg>
            <Text color="cyan.400">PETWITTER</Text>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};
