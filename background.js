chrome.runtime.onInstalled.addListener(() => {
    const rules = [{
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { url: "https://www.instagram.com" }
      },
      condition: {
        urlFilter: { urlMatches: "https://www.instagram.com/reels/*" }
      }
    }];
  
    chrome.declarativeNetRequest.updateSessionRules({ removeRuleIds: [], addRules: rules });
  });