const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;
  
var data = JSON.parse(jsonText)

var name = data.browsers.firefox.name
console.log(name);

var firefoxReleaseDate = data.browsers.firefox.releases["1"].engine;

console.log(firefoxReleaseDate);