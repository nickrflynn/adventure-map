// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBPSyGcT1J4fkCD-PJKRhL0ZqY0ZDqKaEU",
    authDomain: "adventure-map-app.firebaseapp.com",
    databaseURL: "https://adventure-map-app.firebaseio.com",
    projectId: "adventure-map-app",
    storageBucket: "",
    messagingSenderId: "263396668178"
  }
};
