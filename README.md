The COVID-19 Dashboard is a mobile-friendly REACT WebApp, which tracks the SARS CoV2 outbreak situation. The App is hosted on an S3 bucket and can be accessed at [COID-19 Dashboard](https://covid-19-dashboard.s3-us-west-2.amazonaws.com/index.html). 

The intent of the project is to consolidate the data from various public APIs and visulaize it in an easy to consume dashboard. The dashboard is divided into three sections:

1. **Summary Section**: Displays aggregate total and daily increments
2. **Visulaization section**: Displays an interative world map and historic trendline
3. **Datatable section**: Displays a country wise break down of data and allows users to filter 


## React Components Refererence
The `Table` and `Map` components utilizes following REACT components:
* [React Bootstrap Table] (https://github.com/react-bootstrap-table/react-bootstrap-table2)
* [React Highcharts Official] (https://www.npmjs.com/package/highcharts-react-official)

## Data Source Refererence
[COID-19 API] (https://github.com/novelcovid/api)

Here is the list of all the APIs the app is using to render the components:
* https://corona.lmao.ninja/v2/countries
* https://corona.lmao.ninja/v2/all
* https://corona.lmao.ninja/v2/historical

## Quick Start Guide

Clone the repo and install package dependencies by running:

### `npm install`

Go to the project directory and run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm-version patch|minor|major`

Increments the project version in `package.json`