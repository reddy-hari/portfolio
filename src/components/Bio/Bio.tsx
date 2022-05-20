import React, { useState, useEffect } from "react";
import { Icon, Image, SemanticICONS, SemanticCOLORS } from "semantic-ui-react";
import { IconSizeProp } from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import dp from "../../assets/hari.png";
import { color, size, socialMediaLink } from "../../constants/constants";

/* Alternate temporary fix for the React and Seamtic UI version support differences: */
// import { ComponentType } from "react";
// import { Table as _Table, TableProps } from "semantic-ui-react";
// const Table = _Table as ComponentType<TableProps>

const DisplayPhoto = () => {
  const centerImageTagStyle = {
    margin: "auto",
    marginTop: "3em",
    opacity: "95%",
  };
  return <Image src={dp} style={centerImageTagStyle} size="medium" circular />;
};

const Bio = () => {
  const openLink = (url: string | URL | undefined) => {
    window.open(url);
  };

  return (
    <div>
      <div
        style={{
          display: "block",
          margin: "auto",
          width: "50%",
        }}
      >
        <DisplayPhoto></DisplayPhoto>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3em",
            marginBottom: "2em",
          }}
        >
          A modern nomad sharing a journey!
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2em",
          }}
        >
          {Object.entries(socialMediaLink).map((sm, i) => {
            let [key, value] = sm;
            return (
              <Icon
                key={key}
                name={key as SemanticICONS}
                size={size.big as IconSizeProp}
                color={color.black as SemanticCOLORS}
                link
                onClick={() => openLink(value)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bio;
