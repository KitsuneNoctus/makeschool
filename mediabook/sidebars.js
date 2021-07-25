const nodeRedditClone = require("./tutorials/Node-Reddit-Clone/sidebar")

module.exports = {
  nodeRedditClone: nodeRedditClone,
  environmentSetup: [
    {
      type: "category",
      label: "Environment Setup",
      collapsed: false,
      items: [
        "Environment-Setup/P00-Welcome",
        "Environment-Setup/P01-Computer-And-Environment-Setup",
        "Environment-Setup/P02-Terminal-Setup",
        "Environment-Setup/P03-VS-Code-Instructions",
        "Environment-Setup/P04-Git-Github",
        "Environment-Setup/P05-iOS-Install-Instructions",
        "Environment-Setup/P06-Academic-Policies",
        "Environment-Setup/P07-Culture-of-Feedback",
      ],
    },
  ],
}