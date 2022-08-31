import { ComponentStory, ComponentMeta } from "@storybook/react";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  //   args:{
  //     title: "title default",
  //     description: 'default description'
  //   }
  //pode passar esses valores de algumas formas: pode passar os argumentos para todos os stories por aqui
} as ComponentMeta<typeof Main>;

//Ou pega os valores default como abaixo
const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const FirstStory = Basic.bind({});

//ou pode passar os valores por aqui
FirstStory.args = {
  title: "title default",
  description: "default description",
};
