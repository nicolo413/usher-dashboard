import * as React from "react";
import { Button, Stack, Input, FormControl, VStack } from "native-base";
import { login, LoginForm, loginMock } from "../utils/helpers/login";
import { useState } from "react";

type Props = {
  setUser: (user: PromoterProfile | null) => void;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogInForm = ({ setUser, setIsNewUser }: Props) => {
  const [formData, setFormData] = useState<LoginForm>(loginMock);

  const submitHandler = async () => {
    login(formData).then(console.log);
    // console.log(promoter)
  }
 
  return (
    <VStack>
      <FormControl>
        <Stack mt={"-30px"}>
          <Input
            type="email"
            bg="#161C29"
            borderColor="transparent"
            size="xl"
            placeholder="Enter email"
            onChangeText={(value: string) =>
              setFormData({ ...formData, email: value })
            }
          />
          <Input
            type="password"
            bg="#161C29"
            borderColor="transparent"
            size="xl"
            placeholder="Enter password"
            onChangeText={(value: string) =>
              setFormData({ ...formData, password: value })
            }
          />
        </Stack>

        <Button
          size="lg"
          mt={"15px"}
          variant="solid"
          colorScheme="primary"
          onPress={submitHandler}
          mb={5}
        >
          Log in
        </Button>
      </FormControl>
      <Button
        size="lg"
        variant="outlined"
        onPress={() => {
          setIsNewUser(true);
        }}
        _pressed={{ _text: { color: "light.200" } }}
      >
        <p style={{color: "white",}}>New user? Sign up!</p>        
      </Button>
    </VStack>
  );
};

export default LogInForm;
