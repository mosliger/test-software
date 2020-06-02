module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "globals": {
    "fetch": true,
    "window": true,
    "document": true,
    "FormData": true,
    "it": true
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react/jsx-filename-extension": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "linebreak-style": "off",
    "max-len": "off",
    "react/prefer-stateless-function": "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-shadow": "off",
    "react/forbid-prop-types": "off",
    "no-return-assign": "off",
    "prefer-destructuring": "off",
    "no-mixed-operators": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/sort-comp": "off",
    "react/button-has-type": "off",
    "react/no-danger": "off",
  }
}