module.exports = {
    "env": {
        "browser": true,
        "jasmine": true,
        "amd": true
    },
    "plugins": [
        "requirejs"
    ],
    "extends": "eslint:recommended",
    "globals": {
        "angular": 1, // angular,
        "module": 1, // angular-mock
        "inject": 1 // angular-mock
    },
    "plugins": [
        "import"
    ]
};