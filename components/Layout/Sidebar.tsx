import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Sidebar.module.css";
import { useRouter } from "next/router";
import * as React from "react";
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoBarChartOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { Center, Flex, useToken, VStack } from "native-base";

const Sidebar = () => {
  const router = useRouter();
  const [dark400, light200] = useToken("colors", ["dark.400", "light.200"]);
  const titles = ["Dashboard", "Venues", "Events", "Stats", "Settings"];
  const routes = ["/dashboard", "/[venueId]", "", "", ""];
  const curRoute = router.route;
  return (
    <aside className={styles.fullSidebar}>
      <Flex
        justifyContent={"space-around"}
        flexDirection={"column"}
        h={"100%"}
        py={16}
        ml={8}
      >
        <Link href={routes[0]} passHref>
          <IoHomeOutline
            size={"2.5rem"}
            title={titles[0]}
            color={curRoute === routes[0] ? light200 : dark400}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <GiTheaterCurtains
          size={"2.5rem"}
          title={titles[1]}
          color={curRoute === routes[1] ? light200 : dark400}
          style={{ cursor: "pointer" }}
        />
        <IoCalendarOutline
          size={"2.5rem"}
          title={titles[2]}
          color={curRoute === routes[2] ? light200 : dark400}
          style={{ cursor: "pointer" }}
        />
        <IoBarChartOutline
          size={"2.5rem"}
          title={titles[3]}
          color={curRoute === routes[3] ? light200 : dark400}
          style={{ cursor: "pointer" }}
        />
        <IoSettingsOutline
          size={"2.5rem"}
          title={titles[4]}
          color={curRoute === routes[4] ? light200 : dark400}
          style={{ cursor: "pointer" }}
        />
      </Flex>
    </aside>
  );
};

export default Sidebar;
