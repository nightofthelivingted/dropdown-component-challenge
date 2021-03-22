# Ted Barnes Design Notes

## Custom selects

From the provided screen shot, it wasn't clear whether this was a custom `select` element or a a standard macOS `select` in Big Sur.

As the menu itself is an OS component instead of browser-based, it's nearly impossible to style in a consistent, cross-borwser way.

A truly custom `select` element is possible but a complex project to ensure WCAG compliance and keyboard accessibility — the testing alone would be outside of the project's "React basics" scope. It's complex enough that for any production code, I would strongly recommend using an open-source project like [React Select](https://react-select.com/home), where the large install base can keep us honest about defects.

## Additions to scope

1. Added a focus state that wasn't included in the spec.
1. Created dueling selects component with two new controlled select components. _Choose your type_ select not controls the options available for _Choose your player_ select.

---

# Dropdown Component Challenge

This exercise is mainly about styling, semantic/accessible JSX, and React basics. Your task is to create the design in the design1.png file in App.js

1. Must create and use a reusable dropdown component.
2. Use the options `groupOptions` for the first dropdown, and `singerOptions` for the second dropdown. Note: as shown in the design, the first item in the second must read "-Select an option-" and cannot be selectable.
3. Match the styling and placement of the design. Font is Roboto.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
