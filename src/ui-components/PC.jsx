/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Contents from "./Contents";
import { View } from "@aws-amplify/ui-react";
export default function PC(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1500px"
      height="1000px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(186,73,73,1)"
      {...getOverrideProps(overrides, "PC")}
      {...rest}
    >
      <Contents
        display="flex"
        gap="80px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="410px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "contents")}
      ></Contents>
    </View>
  );
}
