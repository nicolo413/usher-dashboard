import * as React from "react";
const { useState } = React;
import { Flex, View, Text, Button } from "native-base";
import Image from "next/image";
import LoginForm from "../components/LoginForm";
// import LogInForm from "../../components/auth/LogInForm";
// import SignUpForm from "../../components/auth/SignUpForm";
import { useEffect } from "react";

type Props = {
  setUser: (user: PromoterProfile | null) => void;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
  }, []);

  return (
      <Flex
        w="100%"
        h="100%"
        py={"20px"}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexDirection="row"
      >
        <View>
          <Text>Hero area</Text>
        </View>
        <View bg="black">
          <Image
            src="/images/adaptive-icon.png"
            alt="Usher icon"
            width="300px"
            height="300px"
          />
        <View bg="white">

        {isNewUser ? (
          // <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser} />
          <Text>Sign UP</Text>
          ) : (
            // <Text>Log IN</Text>
            <LoginForm setUser={setUser} setIsNewUser={setIsNewUser} />
            )}
        </View>
        <Button
          onPress={() => {setIsNewUser(prev => !prev)}}
          >
          <Text>Switch</Text>
        </Button>
        </View>
      </Flex>
  );
};

export default Auth;
