# Playground

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/QD1fhjBbXU)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve playground
```

To create a production bundle:

```sh
npx nx build playground
```

To see all available targets to run for a project, run:

```sh
npx nx show project playground
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## My setup

created github repo online, completely empty. followed instructions for creating access token to push local repo to remote

make sure to update node to after 17.0 so react preset doesn't throw errors involving structuredClone support
options included nvm, brew update, or `sudo npm i -g n` and `sudo n latest`
globally install nx: `npm i -g nx`

nx commands!
after each nx command, add `--dry-run` to make sure it won't error
locally created matching repo name via `npx create-nx-workspace@latest projectName --preset=react-monorepo`
rename apps as needed. deleted the preset and generated new apps with `nx g @nx/react:app apps/client/appName`, including react router
installed `npm i @nx/express --legacy-peer-deps`
created express `nx g @nx/express:application apps/server/projectName`
rearranging folders with `nx g move --project projectName path/to/new/projectName`
update prettier.rc, eslint.config, etc.
change react app vite.config.ts build outDir to local folder for caching, ./build/projectName
create local libs for shared logic with `nx g @nx/react:library libs/client/libName --unitTestRunner=vitest --bundler=none --style=none`
Use style=none because it doesnt let me pick an option and for some reason would default to a broken styled components + tailwind
installed `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion --legacy-peer-deps`
Fix peer dependency issues with `npm install eslint@^8.57.1`, since `eslint-plugin-jsx-a11y@6.7.1` only supports up to eslint@8.x
deleted all instances of jest in test files and configs, make sure vitest types are specified in the tsconfig.spec.jsons for projects/libs
make sure `nx.json` generators have the line `"unitTestRunner": "vitest"` since that's what i wanna use, and i dont want it to unnecessarily install and config jest
test `npx nx graph`
try testing via
```shell
npx nx test projectName
npx nx lint projectName
npx nx e2e projectName
npx nx run-many -t test
```



todo:
set up storybook, husky, commitizen, github actions, chakraUI
react query, observable-hooks, zustand, msw...
