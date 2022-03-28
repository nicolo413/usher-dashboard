import * as React from "react";
import { Button, Input, Stack, FormControl, VStack } from "native-base";
import { signup, signupMock, SignupForm } from "../../utils/helpers/signup";
import { focusStyle } from "../../styles/authStyles";
import { useState } from "react";
import { useStatusContext } from "../../services/contexts/StatusContext";
type Props = {
  setUser: (user: UserProfile | null) => void;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUpForm = ({ setUser, setIsNewUser }: Props) => {
  const [formData, setFormData] = useState<SignupForm>(signupMock);
  const { changeStatus } = useStatusContext();

  const submitHandler = async () => {
    changeStatus("loading");
    signup(formData)
      .then(setUser)
      .catch((error) => changeStatus("error", error));
  };
  return (
    <VStack w={"80%"} justifyContent={"center"}>
      <FormControl>
        <Stack space={"md"} w="100%" maxW="400px" mb={20}>
          <Input
            size="xl"
            bg="transparent"
            color="light.100"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="First Name"
            onChangeText={(value: string) =>
              setFormData({ ...formData, firstName: value })
            }
            _focus={focusStyle}
          />
          <Input
            size="xl"
            bg="transparent"
            color="light.100"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="Last Name"
            onChangeText={(value: string) =>
              setFormData({ ...formData, lastName: value })
            }
            _focus={focusStyle}
          />
          <Input
            type="email"
            size="xl"
            bg="transparent"
            color="light.100"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="Enter email"
            onChangeText={(value: string) =>
              setFormData({ ...formData, email: value })
            }
            _focus={focusStyle}
          />
          <Input
            type="password"
            size="xl"
            bg="transparent"
            color="light.100"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="Enter password"
            onChangeText={(value: string) =>
              setFormData({ ...formData, password: value })
            }
            _focus={focusStyle}
          />
        </Stack>

        <Button
          variant="solid"
          colorScheme="primary"
          onPress={submitHandler}
          mt="-30px"
          size="lg"
        >
          Sign up
        </Button>
      </FormControl>
      <Button
        size="lg"
        mt="20px"
        variant="link"
        colorScheme="primary"
        onPress={() => {
          setIsNewUser(false);
        }}
        _pressed={{ _text: { color: "light.200" } }}
      >
        Already have an account? Log in!
      </Button>
    </VStack>
  );
};

export default SignUpForm;
