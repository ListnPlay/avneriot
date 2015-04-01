process.env.SYSTEM_JS_PATH = "file://Users/avnerus/Projects/Equala/avneriot/build";

console.log("BaseURL: ", process.env.SYSTEM_JS_PATH);

System.config({
  "baseURL": process.env.SYSTEM_JS_PATH
});
