jQuery("#simulation")
  .on("click", ".s-70a4e4b0-cf69-4987-8af2-befcb1441c29 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b30ead33-5801-47a5-aa05-de561a04dad6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/537f7d7f-7774-4f4f-a529-e5512ecd7527"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7b2ed56c-0ff9-4871-9e7d-8481477f0e1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/70a4e4b0-cf69-4987-8af2-befcb1441c29"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-70a4e4b0-cf69-4987-8af2-befcb1441c29 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_1 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_3 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_4 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "center"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "center",
                      "text-decoration": "none",
                      "font-family": "'OpenSans-Light',Arial",
                      "font-size": "10.0pt"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-70a4e4b0-cf69-4987-8af2-befcb1441c29 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_3 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  },{
                    "target": [ "#s-70a4e4b0-cf69-4987-8af2-befcb1441c29 #s-Paragraph_4 span" ],
                    "attributes": {
                      "color": "#282828"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });