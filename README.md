# TSPro
TypeScript Pro - Basic Concept of Typescript to Understanding Design Pattern for TS projects

## Install Packages

1. Typescript -> for programming using TS and ts-node is for compiling typescript. Once you install ts-node you should be able to compile Ts files using command line.
> npm install -g typescript ts-node
> npm init (to generate package.json file)

Comand line to compile Ts file:
> tsc --help
> tsc index.ts
2. Install VS Code IDE for programming editor
> Install Prettier plugin into VScode

3. Install axios package
> npm install axios

4. Parcel has a development server built in, which will automatically rebuild your app as you make changes. To start it, run the parcel CLI pointing to your entry file:
Install it using following commad:
> npm install --save-dev parcel
> npm install parcel-bundler --save-dev

and then use run it using following command 
   >npx parcel index.html or
   >npx parcel src/index.html

5. Use Faker for Testing
Faker is a popular library that generates fake (but reasonable) data that can be used for things such as:
   - Unit Testing
   - Performance Testing
   - Building Demos
   - Working without a completed backend
Install following faker, as after this it has issue breaking it
> npm i faker@5.5.3
Install as Dev dependency type definition file:
> npm install @faker-js/faker --save-dev
6. Plan to install Typed Definition file if you are planning to use Javascript Library in TypeScript project. Package format would be like @types/{library}.
> npm i -D @types/google.maps

7. Install typescript globally
   > npm install typescript@latest -g
Generate tsconfig.json file
   > tsc --init
Know tsc version:
   > tsc --version
   

