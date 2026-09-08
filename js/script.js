// ===============================
// DASHBOARD MAP
// ===============================

const mapContainer = document.getElementById("indiaMap");

if (mapContainer && typeof L !== "undefined") {

    const map = L.map("indiaMap").setView([22.5, 78.9], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    // India marker
    const indiaMarker = L.marker([20.5937, 78.9629]).addTo(map);

    indiaMarker.bindPopup(
        "<b>India</b><br>Land Governance Data Platform"
    );

    // State locations
    const states = [
        {
            name: "Andhra Pradesh",
            lat: 15.9129,
            lng: 79.7400
        },
        {
            name: "Telangana",
            lat: 18.1124,
            lng: 79.0193
        },
        {
            name: "Karnataka",
            lat: 15.3173,
            lng: 75.7139
        },
        {
            name: "Tamil Nadu",
            lat: 11.1271,
            lng: 78.6569
        },
        {
            name: "Kerala",
            lat: 10.8505,
            lng: 76.2711
        },
        {
            name: "Maharashtra",
            lat: 19.7515,
            lng: 75.7139
        }
    ];

    states.forEach(function(state) {

        const marker = L.marker([
            state.lat,
            state.lng
        ]).addTo(map);

        marker.bindPopup(
            "<b>" +
            state.name +
            "</b><br>Land-use information available"
        );
    });


    // ===============================
    // STATE DROPDOWN
    // ===============================

    const stateSelect = document.getElementById("stateSelect");

    if (stateSelect) {

        const stateLocations = {

            andhra: {
                name: "Andhra Pradesh",
                lat: 15.9129,
                lng: 79.7400
            },

            telangana: {
                name: "Telangana",
                lat: 18.1124,
                lng: 79.0193
            },

            karnataka: {
                name: "Karnataka",
                lat: 15.3173,
                lng: 75.7139
            },

            tamilnadu: {
                name: "Tamil Nadu",
                lat: 11.1271,
                lng: 78.6569
            },

            kerala: {
                name: "Kerala",
                lat: 10.8505,
                lng: 76.2711
            },

            maharashtra: {
                name: "Maharashtra",
                lat: 19.7515,
                lng: 75.7139
            }
        };


        stateSelect.addEventListener("change", function() {

            const selectedState =
                stateLocations[this.value];

            if (!selectedState) return;

            map.setView(
                [
                    selectedState.lat,
                    selectedState.lng
                ],
                7
            );

            L.popup()
                .setLatLng([
                    selectedState.lat,
                    selectedState.lng
                ])
                .setContent(
                    "<b>" +
                    selectedState.name +
                    "</b><br>Land-use information available"
                )
                .openOn(map);

        });
    }


    // ===============================
    // LAND USE CHART
    // ===============================

    const chartCanvas =
        document.getElementById("landUseChart");

    if (chartCanvas && typeof Chart !== "undefined") {

        new Chart(chartCanvas, {

            type: "doughnut",

            data: {

                labels: [
                    "Agricultural Land",
                    "Forest Land",
                    "Urban Land",
                    "Water Bodies",
                    "Other Land"
                ],

                datasets: [{
                    data: [
                        40,
                        25,
                        15,
                        10,
                        10
                    ],
                    borderWidth: 1
                }]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {
                        position: "bottom"
                    }
                }
            }
        });
    }
}


// ===============================
// RESEARCH SEARCH
// ===============================

function searchResearch() {

    const searchInput =
        document.getElementById("researchSearch");

    if (!searchInput) return;

    const searchText =
        searchInput.value.toLowerCase().trim();

    const researchCards =
        document.querySelectorAll(".research-item");

    researchCards.forEach(function(card) {

        const cardText =
            card.innerText.toLowerCase();

        if (
            searchText === "" ||
            cardText.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });
}


// ===============================
// RESEARCH DETAILS
// ===============================

function showResearch(topic) {

    let message = "";

    if (topic === "Agricultural Land") {

        message =
            "Agricultural Land Research\n\n" +
            "• Agricultural land-use planning\n" +
            "• Rural development\n" +
            "• Land productivity\n" +
            "• Sustainable land management";

    }

    else if (topic === "Urban Land") {

        message =
            "Urban Land Research\n\n" +
            "• Urban expansion\n" +
            "• Land-use planning\n" +
            "• Sustainable cities\n" +
            "• Urban development";

    }

    else if (topic === "Forest & Ecology") {

        message =
            "Forest & Ecology Research\n\n" +
            "• Forest management\n" +
            "• Biodiversity\n" +
            "• Ecological conservation\n" +
            "• Sustainable land management";

    }

    else if (topic === "Land Policy") {

        message =
            "Land Policy Research\n\n" +
            "• Land regulations\n" +
            "• Governance frameworks\n" +
            "• Policy implementation\n" +
            "• Evidence-based policy";
    }

    alert(message);
}


// ===============================
// POLICY DETAILS
// ===============================

function showPolicy(policyName) {

    let title = "";
    let content = "";

    if (policyName === "Digital Land Mapping") {

        title = "Digital Land Mapping";

        content =
            "Use digital maps and geospatial technologies " +
            "to improve land-use planning, transparency " +
            "and evidence-based decision making.";
    }

    else if (policyName === "Data-Driven Governance") {

        title = "Data-Driven Governance";

        content =
            "Integrate land datasets, analytics and research " +
            "evidence to support transparent and informed " +
            "governance decisions.";
    }

    else if (policyName === "Sustainable Land Management") {

        title = "Sustainable Land Management";

        content =
            "Promote responsible land use by balancing " +
            "agriculture, development, environmental protection " +
            "and long-term sustainability.";
    }

    else if (policyName === "Smart Urban Planning") {

        title = "Smart Urban Planning";

        content =
            "Use spatial data and land-use analysis to support " +
            "planned urban growth, infrastructure development " +
            "and sustainable cities.";
    }

    alert(title + "\n\n" + content);
}
// ===============================
// FEEDBACK FORM
// ===============================

const feedbackForm =
    document.getElementById("feedbackForm");

if (feedbackForm) {

    feedbackForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const location =
                document.getElementById("location").value.trim();

            const category =
                document.getElementById("category").value;

            const message =
                document.getElementById("message").value.trim();

            const feedbackMessage =
                document.getElementById("feedbackMessage");


            // Check empty fields
            if (
                name === "" ||
                email === "" ||
                location === "" ||
                category === "" ||
                message === ""
            ) {

                feedbackMessage.textContent =
                    "Please fill in all the fields.";

                feedbackMessage.style.display = "block";

                feedbackMessage.style.background =
                    "#fee2e2";

                feedbackMessage.style.color =
                    "#991b1b";

                return;
            }


            // Create feedback object
            const feedback = {
                name: name,
                email: email,
                location: location,
                category: category,
                message: message,
                date: new Date().toLocaleString()
            };


            // Get old feedback
            let feedbackList =
                JSON.parse(localStorage.getItem("feedbackList")) || [];


            // Add new feedback
            feedbackList.push(feedback);


            // Save feedback
            localStorage.setItem(
                "feedbackList",
                JSON.stringify(feedbackList)
            );


            // Success message
            feedbackMessage.textContent =
                "Thank you, " +
                name +
                "! Your feedback has been submitted successfully.";

            feedbackMessage.style.display = "block";

            feedbackMessage.style.background =
                "#dcfce7";

            feedbackMessage.style.color =
                "#166534";


            // Clear form
            feedbackForm.reset();

        }
    );
}
/* ============================= */
/* ADMIN LOGIN */
/* ============================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const loginMessage = document.getElementById("loginMessage");

        // Demo login credentials
        const correctUsername = "admin";
        const correctPassword = "admin123";

        if (username === correctUsername && password === correctPassword) {

            // Store login status
            sessionStorage.setItem("adminLoggedIn", "true");

            loginMessage.textContent = "Login successful! Redirecting...";
            loginMessage.style.display = "block";
            loginMessage.style.background = "#dcfce7";
            loginMessage.style.color = "#166534";

            setTimeout(function() {
                window.location.href = "admin.html";
            }, 800);

        } else {

            loginMessage.textContent = "Invalid username or password.";
            loginMessage.style.display = "block";
            loginMessage.style.background = "#fee2e2";
            loginMessage.style.color = "#991b1b";

        }

    });

}
/* ============================= */
/* ADMIN LOGOUT */
/* ============================= */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function(event) {

        event.preventDefault();

        sessionStorage.removeItem("adminLoggedIn");

        window.location.href = "login.html";

    });

}
