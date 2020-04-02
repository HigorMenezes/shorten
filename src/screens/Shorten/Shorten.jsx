import React from "react";

import ShareLinkIcon from "../../components/ShareLinkIcon";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Default from "../../layouts/Default";

import { Container } from "./Shorten.style";

const Shorten = () => (
  <Default>
    <Container>
      <ShareLinkIcon />
      <Input />
      <Button>Shorten it!</Button>
    </Container>
  </Default>
);

export default Shorten;
