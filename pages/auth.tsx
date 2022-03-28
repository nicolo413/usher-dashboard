import React from "react";
import { Flex, View, Text, Button, Center } from "native-base";
import Image from "next/image";
import { useRouter } from 'next/router';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";
import { useEffect, useState } from "react";

type Props = {
  setUser: (user: PromoterProfile | null) => void;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('promoter');
    // if (token) router.push('/index')
  }, []);

  return (
      <div>
        <div >
          {/* <Text>Hero area</Text> */}
          <Image src="/images/hero.jpg" alt="hero image" layout="fill"/>
        </div>
        
        <Center>
          <View>
            <Image
              src="/images/adaptive-icon.png"
              alt="Usher icon"
              width="300px"
              height="300px"
              />
          <View>

          {isNewUser ? (
            <SignUpForm setUser={setUser} setIsNewUser={setIsNewUser} />
            // <Text>Sign UP</Text>
            ) : (
              // <Text>Log IN</Text>
              <LoginForm setUser={setUser} setIsNewUser={setIsNewUser} />
              )}
          </View>
          
          </View>
        </Center>
      </div>
  );
};

export default Auth;
