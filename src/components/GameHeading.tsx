import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
