System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "../jspm_packages/github/*.js",
    "npm:*": "../jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel@4.7.16",
    "page": "npm:page@1.6.1",
    "riot": "github:ListnPlay/riotjs@2.0.13",
    "riotcontrol": "npm:riotcontrol@0.0.1",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:page@1.6.1": {
      "path-to-regexp": "npm:path-to-regexp@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-to-regexp@1.0.3": {
      "isarray": "npm:isarray@0.0.1"
    }
  }
});

