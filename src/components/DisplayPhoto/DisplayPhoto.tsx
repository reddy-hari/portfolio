import React from "react";
import { Image, SemanticSIZES } from "semantic-ui-react";
import dp from "../../assets/hari.png";

interface IDPProps {
  size: string;
}

export default function DisplayPhoto(props: IDPProps) {
  const { size } = props;
  return <Image src={dp} centered size={size as SemanticSIZES} circular />;
}
