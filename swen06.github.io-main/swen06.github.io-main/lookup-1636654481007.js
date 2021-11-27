(function(window, undefined) {
  var dictionary = {
    "7b2ed56c-0ff9-4871-9e7d-8481477f0e1b": "Feedback",
    "537f7d7f-7774-4f4f-a529-e5512ecd7527": "Resources",
    "70a4e4b0-cf69-4987-8af2-befcb1441c29": "Account",
    "b30ead33-5801-47a5-aa05-de561a04dad6": "Clans",
    "7e40b955-4e01-48f6-ad1d-ff61a395ca3e": "Sign up",
    "ee5f6a9d-589d-41c1-906a-9d216fa3618c": "Login",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Homepage/Dashboard",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);