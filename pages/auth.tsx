import React from "react";
import { View, Center } from "native-base";
import Image from "next/image";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";
import { useState } from "react";
import { PromoterProfile } from "../utils/Types/userTypes";

type Props = {
  setUser: (user: PromoterProfile | null) => void;
};

const Auth = ({ setUser }: Props) => {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <div>
      <div>
        <Image src="/images/hero.jpg" alt="hero image" layout="fill" />
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
            ) : (
              <LoginForm setUser={setUser} setIsNewUser={setIsNewUser} />
            )}
          </View>
        </View>
      </Center>
    </div>
  );
};

export default Auth;
