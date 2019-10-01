export default class WindowEventListener {
    constructor($rootScope, $window) {
        $window.addEventListener("message", receiveMessage, false);
        let possibleOriginsPerEvent = [{
            eventId : "retrieve_user",
            possibleOrigins : [ "http://localhost:9292","https://services.libis.be","https://sandbox-eu.alma.exlibrisgroup.com"]
        }]
// TODO : Maak config hash van origin en event_id =>
       
        function receiveMessage(event) {
            console.log ("receiveMessage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

            if ( ! event.data ){
                console.log ("No Event data !!");
                return;
            }

            var possibleOriginsObj = possibleOriginsPerEvent.find(function (ev) {
                return ev.eventId === event.data.event_id;
            });
            console.log(possibleOriginsObj);

            let primoExploreJwt = $rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt;
            
            if (event.data.event_id === "retrieve_user") {
                possibleOriginsObj.possibleOrigins 

                if ( !  possibleOriginsObj.possibleOrigins.includes(event.origin)  ) return;
                Primo.user.then(user => {
                    event.source.postMessage({
                        event_id: "retrieve_user",
                        "data": {
                            "onCampus": user.isOnCampus(),
                            "isLoggedIn": user.isLoggedIn(),
                            "ubid": user.id,
                            "display_name": user.display_name,
                            "email": user.email
                        }
                    }, event.origin);
                    event.source.postMessage({
                        event_id: "jwt",
                        "data": primoExploreJwt
                    }, event.origin);
                });

            }
        }
    }
};

WindowEventListener.$inject = ['$rootScope', '$window'];