import * as React from "react";
import { Button, Stack, Input, FormControl, VStack } from "native-base";
import { login, LoginForm, loginMock } from "../utils/helpers/login";
import { useState, useContext } from "react";
import { PromoterContext, usePromoterContext } from "../services/contexts/UserContext";
import { useRouter } from "next/router";
import { PromoterProfile } from "../utils/Types/userTypes";

type Props = {
  setUser: (user: PromoterProfile | null) => void;
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogInForm = ({ setUser, setIsNewUser }: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>(loginMock);
  //@ts-ignore
  const { promoter, populatePromoter } = usePromoterContext();  

  const submitHandler = async () => {
    login(formData).then((_promoter)  => {
      populatePromoter(_promoter as PromoterProfile)
      router.push('/dashboard')
    });

  }
  console.log(promoter)
 
  return (
    <VStack>
      <FormControl>
        <Stack mt={"-60px"}>
          <Input
            type="email"
            color="black"
            bg="white"
            borderColor="transparent"
            size="xl"
            placeholder="Enter email"
            onChangeText={(value: string) =>
              setFormData({ ...formData, email: value })
            }
            _focus={{bg: 'white'}}
            _hover={{bg: 'white'}}
          />
          <Input
            mt="8px"
            color="black"
            type="password"
            bg="white"
            borderColor="transparent"
            size="xl"
            placeholder="Enter password"
            onChangeText={(value: string) =>
              setFormData({ ...formData, password: value })
            }
            _focus={{bg: 'white'}}
            _hover={{bg: 'white'}}
          />
        </Stack>

        <Button
          size="lg"
          mt={"30px"}
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
