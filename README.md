After importing a const from a shared project, cypress errors with:

```
The plugins file is missing or invalid.

Your pluginsFile is set to '/Users/bersimoes/src/angular/farm/dist/out-tsc/apps/my-app-e2e/src/plugins/index.js', but either the file is missing, it contains a syntax error, or threw an error when required. The pluginsFile must be a .js or .coffee file.

Please fix this, or set 'pluginsFile' to 'false' if a plugins file is not necessary for your project.
```

**How to reproduce:**

- create-nx-workspace farm
- ng generate jest
- ng generate application myApp ( pick cypress )
- ng generate lib fixtures --no-module

run `ng e2e` and everything is fine.

Export a canst from the  fixtures lib into a cypress spec and the build will brake.

OR

Checkout this project and run `ng e2e`

** Angular & node versions **
Angular CLI: 7.0.1
Node: 10.12.0
OS: darwin x64
Angular: 7.0.2

