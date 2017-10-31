# primoUI-central-package

## build
```bash
gulp run --view CENTRAL_PACKAGE --browserify --proxy http://limo.q.libis.be
```

## Important
This project depends on [primo-explore-dom](https://github.com/mehmetc/primo-explore-dom). 

* How to download [primo-explore-dom](https://github.com/mehmetc/primo-explore-dom) and create a symlink from the __js__ directory
```bash
$ pwd
/primo-explore-devenv/primo-explore/custom
$ git clone https://github.com/mehmetc/primo-explore-dom.git
$ ls -l
drwxr-xr-x@  9 user  staff    306 Oct  5 10:09 CENTRAL_PACKAGE
drwxr-xr-x@ 10 user  staff    340 Jul 13 17:45 primo-explore-dom

$ cd CENTRAL_PACKAGE/js
$ ln -s ../../primo-explore-dom ./
 ```
 
## Available Components 

- __general/search-tips__
- __prm-brief-results-after/source-icon__: display data-source icon like WOW in the old UI
- __prm-fines-overview-after/pay-my-fines__: displays a “Pay now!” button in your user account
- __prm-logo-after/home-icon__: specific logo per view + a home icon
- __prm-main-menu-after/feedback__: feedback button in home menu opens a dialog and sends it to our help desk
- __prm-search-result-thumbnail-container-after/pnx-xml__: creates a hotspot in the bottom right corner. When clicked adds a xml and pnx button to every loaded record. Makes use of jQuery.PRIMO.jar available in the August release. People with access to their environment can upgrade today.
- __prm-service-header-after/report-a-problem__: places a “Report a problem” link on the “View Online” section. Sends reports to our help desk
- __prm-top-bar-after/fines-message__: Display a header message (announcement) when you have fines and gives the possibility to pay them. Makes use of primo-explore-dom to get easy access to user and view information.
- __prm-top-bar-after/general-message__: Display a message that is placed in the “View Labels/default.lbs.generalMessage” code table.
