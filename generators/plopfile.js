module.exports = function (plop) {
  plop.setGenerator('controller', {
    description: 'application controller',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please'
      }
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/tests.ts',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
