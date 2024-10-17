const SetupStorybook = () => {
  return (
    <div>
      <h2>Storybook Setup is quite straight forward!</h2>
      <p>
        Just follow the{" "}
        <a href="https://storybook.js.org/docs/get-started/frameworks/react-vite">
          Docs
        </a>
        . They will also provide basic examples and do some setup for you.
      </p>
      {/**
       * Either run this code snippet in the presentation (and delete previous setup in /stories folder or show what has been created).
       * Afterwards take a look into the example stories: Show parameters, args, rendering etc.
       * Example for our Book-List is also provided.
       */}
      <code>npx storybook@latest init</code>
    </div>
  );
};

export default SetupStorybook;
