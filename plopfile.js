module.exports = plop => {
  plop.setGenerator('component', {
      description: 'Foundation for a storybook component for twig.',
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is your component name?"
        },
        {
          type: "list",
          name: "type",
          message: "What kind of component?",
          choices: ["Other", "Atoms", "Molecules", "Organisms"]
        },
        {
          type: "input",
          name: "typeOther",
          message: "Enter the type name for your component:",
          when: (answers) => answers.type === 'Other'
        }
      ],
      actions: [
        {
          type: "add",
          path: "src/stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.twig",
          templateFile: "plop-templates/Component/template.twig"
        },
        {
          type: "add",
          path: "src/stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.js",
          templateFile: "plop-templates/Component/template.stories.js",
          data: { folder: "stories" }
        },
        {
          type: "add",
          path: "src/stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.data.js",
          templateFile: "plop-templates/Component/template.data.js",
          data: { folder: "stories" }
        },
        {
          type: "modify",
          path: "src/stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.js",
          pattern: "Other",
          template: "{{pascalCase typeOther}}",
          abortOnFail: false
        },
        {
          type: "add",
          path: "src/stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.css",
          templateFile: "plop-templates/Component/template.css"
        },
        {
          type: "add",
          path: "src/stories/{{pascalCase type}}/{{pascalCase name}}/{{pascalCase name}}.js",
          templateFile: "plop-templates/Component/template.js"
        },
        {
          type: "add",
          path: "src/stories/{{pascalCase type}}/{{pascalCase name}}/readme.md",
          templateFile: "plop-templates/Component/template.md"
        }
      ]
  });
};
