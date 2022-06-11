import React from "react";
import { theme } from "../components/styles/theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Global";
import HomeInfoCard from "../components/cards/HomeInfoCard";

export default {
  title: "HomeInfoCard",
  component: HomeInfoCard,
} as ComponentMeta<typeof HomeInfoCard>;

const Template: ComponentStory<typeof HomeInfoCard> = (args) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <HomeInfoCard
      {...args}
      img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21hbGwlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=65&q=72"
    />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  heading: "Experienced Individuals",
  text: "Our network is made up of highly experienced professionals who are passionate about what they do.",
};
