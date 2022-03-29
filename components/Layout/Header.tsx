import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "native-base";

const Nav = () => {
  const router = useRouter();

  const handleClick = () => {
    localStorage.removeItem("promoter");
    router.push("/auth");
  };

  return (
    <header className={styles.fullHeader}>
      <Image
        className={styles.logo}
        src="/images/adaptive-icon.png"
        alt="usher icon"
        height="200px"
        width="200px"
      />
      <div>
        Hellooo
        <Button variant="outlined" onPress={handleClick}>
          <h3 style={{ color: "#161C29" }}>Logout</h3>
        </Button>
      </div>
    </header>
  );
};
export default Nav;
