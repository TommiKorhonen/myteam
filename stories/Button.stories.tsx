// Button.stories.ts|tsx

import React from "react";
import { theme } from "../components/styles/theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/button/Button";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Flex>
      <Button {...args} />
    </Flex>
  </ThemeProvider>
);

export const Primary = Template.bind({});

// Primary.args = {
//   color: "primary",
// };

const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;
