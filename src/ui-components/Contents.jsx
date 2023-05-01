/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Contents(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="80px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Contents")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="20px 16px 20px 16px"
        {...getOverrideProps(overrides, "Haeder")}
      >
        <View
          width="210px"
          height="68px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "logo")}
        >
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="43.568180084228516px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="210px"
            height="67px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pomofocus"
            {...getOverrideProps(overrides, "Pomofocus")}
          ></Text>
        </View>
        <View
          width="210px"
          height="68px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "nav_to_todo")}
        >
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="43.568180084228516px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="210px"
            height="67px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Todos"
            {...getOverrideProps(overrides, "Todos")}
          ></Text>
        </View>
        <Icon
          width="74px"
          height="68px"
          viewBox={{ minX: 0, minY: 0, width: 74, height: 68 }}
          paths={[
            {
              d: "M74 34C74 52.7777 57.4345 68 37 68C16.5655 68 0 52.7777 0 34C0 15.2223 16.5655 0 37 0C57.4345 0 74 15.2223 74 34Z",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "icon")}
        ></Icon>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "timer_contents")}
      >
        <Flex
          gap="20px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="20px 30px 20px 30px"
          backgroundColor="rgba(225,155,153,1)"
          {...getOverrideProps(overrides, "Timer")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="529px"
            height="34px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "timer_items")}
          >
            <View
              width="136px"
              height="34px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "item_pomodolo")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="24.204544067382812px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="138px"
                height="34px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0px"
                left="-2px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Pomodoro"
                {...getOverrideProps(overrides, "Pomodoro")}
              ></Text>
            </View>
            <View
              width="136px"
              height="34px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="201px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "item_short_rest")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="24.204544067382812px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="133px"
                height="36px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="-2px"
                left="3px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Short Break"
                {...getOverrideProps(overrides, "Short Break")}
              ></Text>
            </View>
            <View
              width="136px"
              height="34px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="393px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "item_long_rest")}
            >
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(0,0,0,1)"
                lineHeight="24.204544067382812px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="135px"
                height="34px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0px"
                left="1px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Long Break"
                {...getOverrideProps(overrides, "Long Break")}
              ></Text>
            </View>
          </Flex>
          <View
            width="303px"
            height="112px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "clock")}
          >
            <Text
              fontFamily="Inter"
              fontSize="64px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="77.45454406738281px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="300px"
              height="111px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="1px"
              left="3px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="00:00"
              {...getOverrideProps(overrides, "00:00")}
            ></Text>
          </View>
          <View
            width="158px"
            height="50px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "start_button")}
          >
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="400"
              color="rgba(186,73,73,1)"
              lineHeight="48.409088134765625px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="158px"
              height="50px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Start"
              {...getOverrideProps(overrides, "Start")}
            ></Text>
          </View>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Words")}
      >
        <View
          width="227px"
          height="83px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "words_box")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24.204544067382812px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="101px"
            height="24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="18px"
            left="63px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="#0"
            {...getOverrideProps(overrides, "#0")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24.204544067382812px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="164px"
            height="28px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="44px"
            left="34px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Time to focus!"
            {...getOverrideProps(overrides, "Time to focus!")}
          ></Text>
        </View>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "tasks220")}
      >
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="48.409088134765625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="152px"
          height="34px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="tasks"
          {...getOverrideProps(overrides, "tasks235")}
        ></Text>
        <Image
          width="30px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "open_button")}
        ></Image>
        <Icon
          width="647.01px"
          height="0px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 647.000244140625,
            height: 2.94537353515625,
          }}
          paths={[
            {
              d: "M0 0L647.007 0L647.007 -5L0 -5L0 0Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 5,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "under_line")}
        ></Icon>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "add_task")}
      >
        <View
          width="649px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "add_tasks_button")}
        >
          <View
            width="42px"
            height="30px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="14.05px"
            left="calc(50% - 21px - 70.5px)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "+ flame")}
          >
            <Icon
              width="43px"
              height="31px"
              viewBox={{ minX: 0, minY: 0, width: 43, height: 31 }}
              paths={[
                {
                  d: "M43 15.5C43 24.0604 33.3741 31 21.5 31C9.62588 31 0 24.0604 0 15.5C0 6.93959 9.62588 0 21.5 0C33.3741 0 43 6.93959 43 15.5Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="-1.05px"
              left="-1px"
              {...getOverrideProps(overrides, "+button")}
            ></Icon>
          </View>
          <View
            width="180px"
            height="34px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="calc(50% - 17px - -0.05px)"
            left="calc(50% - 90px - -40.5px)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "textbox")}
          >
            <Text
              fontFamily="Inter"
              fontSize="32px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="38.727272033691406px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="180px"
              height="31px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="3px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Add task"
              {...getOverrideProps(overrides, "Add task")}
            ></Text>
          </View>
          <View
            width="647px"
            height="60px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="-2px"
            left="2px"
            border="3px SOLID rgba(0,0,0,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "box")}
          ></View>
        </View>
      </Flex>
    </Flex>
  );
}
