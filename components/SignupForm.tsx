import * as React from "react";
import { Button, Input, Stack, FormControl, VStack } from "native-base";
import { signup, signupMock, SignupForm } from "../utils/helpers/signup";
import { useState } from "react";
type Props = {
  setUser: (user: PromoterProfile | null) => void;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUpForm = ({ setUser, setIsNewUser }: Props) => {
  const [formData, setFormData] = useState<SignupForm>(signupMock);

  const submitHandler = async () => {
    signup(formData)
  };
  return (
    <VStack>
      <FormControl>
        <Stack mt="-30px">
          <Input
            size="xl"
            bg="#161C29"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="Name"
            onChangeText={(value: string) =>
              setFormData({ ...formData, name: value })
            }
          />
          <Input
            size="xl"
            bg="#161C29"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="Telephone"
            onChangeText={(value: string) =>
              setFormData({ ...formData, telephone: +value })
            }
          />
          <Input
            type="email"
            size="xl"
            bg="#161C29"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="Enter email"
            onChangeText={(value: string) =>
              setFormData({ ...formData, email: value })
            }
          />
          <Input
            type="password"
            size="xl"
            bg="#161C29"
            borderColor="transparent"
            borderBottomColor="light.400"
            placeholder="Enter password"
            onChangeText={(value: string) =>
              setFormData({ ...formData, password: value })
            }
          />
        </Stack>

        <Button
          variant="solid"
          colorScheme="primary"
          onPress={submitHandler}
          mt={"15px"}
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
        <p style={{color: "white",}}>New user? Sign up!</p>
      </Button>
    </VStack>
  );
};

export default SignUpForm;
