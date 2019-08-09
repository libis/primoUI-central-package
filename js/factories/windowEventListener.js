export default class WindowEventListener {
    constructor($rootScope, $window) {
        $window.addEventListener("message", receiveMessage, false);

// TODO : Maak config hash van origin en event_id =>
       
        function receiveMessage(event) {
            console.log ("receiveMessage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            //            console.log( $rootScope.$$childHead.$ctrl)

            let primoExploreJwt = $rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt;
            
            if (event.data.event_id === "retrieve_user") {
                if (event.origin !== "http://localhost:9292" && event.origin !== "https://services.libis.be/") return;
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