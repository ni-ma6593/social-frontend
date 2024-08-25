/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    nextjs: {
      appDirectory: false,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
