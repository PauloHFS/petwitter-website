import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
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
      <Flex
        display={['none', 'flex']}
        justifyContent={'center'}
        alignItems="center"
        minW="50vw"
        minH="100vh"
        backgroundImage="url('/images/loginbglarge.png')"
      >
        <svg
          width="419"
          height="103"
          viewBox="0 0 419 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8_258)">
            <path
              d="M19.3124 51.5C25.238 51.5 30.0416 46.6964 30.0416 40.7708C30.0416 34.8452 25.238 30.0416 19.3124 30.0416C13.3869 30.0416 8.58325 34.8452 8.58325 40.7708C8.58325 46.6964 13.3869 51.5 19.3124 51.5Z"
              fill="white"
            />
            <path
              d="M38.625 34.3333C44.5506 34.3333 49.3542 29.5297 49.3542 23.6042C49.3542 17.6786 44.5506 12.875 38.625 12.875C32.6995 12.875 27.8959 17.6786 27.8959 23.6042C27.8959 29.5297 32.6995 34.3333 38.625 34.3333Z"
              fill="white"
            />
            <path
              d="M64.375 34.3333C70.3006 34.3333 75.1042 29.5297 75.1042 23.6042C75.1042 17.6786 70.3006 12.875 64.375 12.875C58.4495 12.875 53.6459 17.6786 53.6459 23.6042C53.6459 29.5297 58.4495 34.3333 64.375 34.3333Z"
              fill="white"
            />
            <path
              d="M83.6875 51.5C89.6131 51.5 94.4167 46.6964 94.4167 40.7708C94.4167 34.8452 89.6131 30.0416 83.6875 30.0416C77.762 30.0416 72.9584 34.8452 72.9584 40.7708C72.9584 46.6964 77.762 51.5 83.6875 51.5Z"
              fill="white"
            />
            <path
              d="M74.4176 63.7742C70.6839 59.3967 67.5509 55.6629 63.7743 51.2854C61.8001 48.9679 59.268 46.6504 56.2639 45.6204C55.7918 45.4488 55.3197 45.32 54.8476 45.2342C53.7747 45.0625 52.6159 45.0625 51.5001 45.0625C50.3843 45.0625 49.2255 45.0625 48.1097 45.2771C47.6376 45.3629 47.1655 45.4917 46.6934 45.6633C43.6893 46.6933 41.2001 49.0108 39.183 51.3283C35.4493 55.7058 32.3164 59.4396 28.5397 63.8171C22.9176 69.4392 16.008 75.6621 17.2955 84.3742C18.5401 88.7517 21.673 93.0863 27.2951 94.3308C30.428 94.9746 40.4276 92.4425 51.0709 92.4425H51.8434C62.4868 92.4425 72.4864 94.9317 75.6193 94.3308C81.2414 93.0863 84.3743 88.7088 85.6189 84.3742C86.9493 75.6192 80.0397 69.3962 74.4176 63.7742Z"
              fill="white"
            />
          </g>
          <path
            d="M157.746 49.6526C157.746 51.747 157.265 53.6696 156.304 55.4206C155.342 57.1373 153.866 58.5278 151.875 59.5921C149.883 60.6565 147.411 61.1886 144.459 61.1886H139V74.1666H130.193V38.0136H144.459C147.343 38.0136 149.78 38.5115 151.772 39.5071C153.763 40.5028 155.256 41.8761 156.252 43.6271C157.248 45.3781 157.746 47.3866 157.746 49.6526ZM143.789 54.1846C145.471 54.1846 146.725 53.7898 147.549 53.0001C148.373 52.2105 148.785 51.0946 148.785 49.6526C148.785 48.2106 148.373 47.0948 147.549 46.3051C146.725 45.5155 145.471 45.1206 143.789 45.1206H139V54.1846H143.789ZM171.137 45.0691V52.3821H182.93V59.1801H171.137V67.1111H184.475V74.1666H162.33V38.0136H184.475V45.0691H171.137ZM216.2 38.0136V45.0691H206.621V74.1666H197.815V45.0691H188.236V38.0136H216.2ZM270.369 38.0136L260.944 74.1666H250.284L244.516 50.3736L238.542 74.1666H227.881L218.714 38.0136H228.139L233.34 64.3301L239.778 38.0136H249.46L255.64 64.3301L260.893 38.0136H270.369ZM283.592 38.0136V74.1666H274.785V38.0136H283.592ZM315.981 38.0136V45.0691H306.402V74.1666H297.596V45.0691H288.017V38.0136H315.981ZM346.409 38.0136V45.0691H336.83V74.1666H328.023V45.0691H318.444V38.0136H346.409ZM359.635 45.0691V52.3821H371.428V59.1801H359.635V67.1111H372.973V74.1666H350.828V38.0136H372.973V45.0691H359.635ZM397.128 74.1666L389.609 60.5191H387.497V74.1666H378.691V38.0136H393.471C396.321 38.0136 398.741 38.5115 400.733 39.5071C402.758 40.5028 404.269 41.8761 405.265 43.6271C406.26 45.3438 406.758 47.2665 406.758 49.3951C406.758 51.7985 406.071 53.9443 404.698 55.8326C403.359 57.721 401.368 59.06 398.724 59.8496L407.067 74.1666H397.128ZM387.497 54.2876H392.956C394.57 54.2876 395.771 53.8928 396.561 53.1031C397.385 52.3135 397.797 51.1976 397.797 49.7556C397.797 48.3823 397.385 47.3008 396.561 46.5111C395.771 45.7215 394.57 45.3266 392.956 45.3266H387.497V54.2876Z"
            fill="white"
          />
          <defs>
            <clipPath id="clip0_8_258">
              <rect width="103" height="103" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Flex>

      <Flex width={'100%'} flexDir={['column']}>
        <Flex
          display={['flex', 'none']}
          flexDir="column"
          justifyContent="space-between"
          minH="64"
          bgImage={["url('/images/loginbgmobile.png')"]}
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

        <Flex display={['none', 'flex']} flexDir="column" px="4.5rem" pt="2rem">
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2499 38C18.6222 38 22.1666 34.4555 22.1666 30.0833C22.1666 25.711 18.6222 22.1666 14.2499 22.1666C9.87766 22.1666 6.33325 25.711 6.33325 30.0833C6.33325 34.4555 9.87766 38 14.2499 38Z"
              fill="#00ACC1"
            />
            <path
              d="M28.5002 25.3332C32.8724 25.3332 36.4168 21.7888 36.4168 17.4165C36.4168 13.0443 32.8724 9.49988 28.5002 9.49988C24.1279 9.49988 20.5835 13.0443 20.5835 17.4165C20.5835 21.7888 24.1279 25.3332 28.5002 25.3332Z"
              fill="#00ACC1"
            />
            <path
              d="M47.4999 25.3332C51.8722 25.3332 55.4166 21.7888 55.4166 17.4165C55.4166 13.0443 51.8722 9.49988 47.4999 9.49988C43.1277 9.49988 39.5833 13.0443 39.5833 17.4165C39.5833 21.7888 43.1277 25.3332 47.4999 25.3332Z"
              fill="#00ACC1"
            />
            <path
              d="M61.75 38C66.1223 38 69.6667 34.4555 69.6667 30.0833C69.6667 25.711 66.1223 22.1666 61.75 22.1666C57.3778 22.1666 53.8334 25.711 53.8334 30.0833C53.8334 34.4555 57.3778 38 61.75 38Z"
              fill="#00ACC1"
            />
            <path
              d="M54.9099 47.0567C52.1549 43.8267 49.8432 41.0717 47.0566 37.8417C45.5999 36.1317 43.7316 34.4217 41.5149 33.6617C41.1666 33.535 40.8182 33.44 40.4699 33.3767C39.6782 33.25 38.8232 33.25 37.9999 33.25C37.1766 33.25 36.3216 33.25 35.4982 33.4083C35.1499 33.4717 34.8016 33.5667 34.4532 33.6933C32.2366 34.4533 30.3999 36.1633 28.9116 37.8733C26.1566 41.1033 23.8449 43.8583 21.0582 47.0883C16.9099 51.2367 11.8116 55.8283 12.7616 62.2567C13.6799 65.4867 15.9916 68.685 20.1399 69.6033C22.4516 70.0783 29.8299 68.21 37.6832 68.21H38.2532C46.1066 68.21 53.4849 70.0467 55.7966 69.6033C59.9449 68.685 62.2566 65.455 63.1749 62.2567C64.1566 55.7967 59.0582 51.205 54.9099 47.0567Z"
              fill="#00ACC1"
            />
          </svg>
          <Text
            fontSize="36"
            fontWeight="700"
            fontStyle="normal"
            lineHeight="49.03px"
            color="#00ACC1"
          >
            Comece agora. <br />
            Conecte-se já.
          </Text>
        </Flex>

        <Flex flexDir="column" px={['8', '4.5rem']} pt="30" pb="6">
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
          <HStack display={['flex', 'none']} mx="auto" mt="57">
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
