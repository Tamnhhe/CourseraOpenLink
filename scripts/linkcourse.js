document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("courseSelect");
    var openLinksButton = document.getElementById("openLinksButton");

    selectElement.addEventListener("change", function () {
        switch (selectElement.value) {
            case "ITE302c":
                openLinksButton.disabled = false;
                break;
            case "WED201c":
                openLinksButton.disabled = false;
                break;
            case "ITA203c":
                openLinksButton.disabled = false;
                break;
            default:
                openLinksButton.disabled = true;
        }
    });

    openLinksButton.addEventListener("click", function () {
        openLinks(selectElement.value);
    });

    function openLinks(courseName) {
        switch (courseName) {
            case "ITE302c":
                var links = [
                    "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/exam/iyd6e/data-driven-emerging-technologies-quiz",
                    "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/exam/2rF4o/privacy-and-legal-concepts-related-to-data-driven-technologies-quiz",
                    "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/exam/vousp/bias-quiz",
                    "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/exam/vA5Tl/ethical-theories-quiz",
                    "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/exam/RyrAe/ethical-principles-applied-to-data-driven-technologies-quiz",
                    "https://www.coursera.org/learn/ethical-frameworks-action/exam/dFvtO/frameworks-and-ethical-responsibilities-with-data-driven-technologies-quiz",
                    "https://www.coursera.org/learn/ethical-frameworks-action/exam/XINkU/application-of-ethical-frameworks-to-ethical-dilemmas-quiz",
                    "https://www.coursera.org/learn/ethical-frameworks-action/exam/PVNuF/regulations-and-standards-quiz",
                    "https://www.coursera.org/learn/ethical-frameworks-action/exam/t5enb/conflict-reconciliation-between-ethics-regulations-and-business-demands-quiz",
                    "https://www.coursera.org/learn/detect-mitigate-ethical-risks/exam/HqYhk/analyzing-ethical-risks",
                    "https://www.coursera.org/learn/detect-mitigate-ethical-risks/exam/4MYUV/managing-privacy-risks",
                    "https://www.coursera.org/learn/detect-mitigate-ethical-risks/exam/N6cA0/managing-accountability-risks-quiz",
                    "https://www.coursera.org/learn/detect-mitigate-ethical-risks/exam/4CPkd/managing-transparency-and-explainability-risks-quiz",
                    "https://www.coursera.org/learn/detect-mitigate-ethical-risks/exam/i1WSA/managing-fairness-and-non-discrimination-risks",
                    "https://www.coursera.org/learn/detect-mitigate-ethical-risks/exam/ZSL8t/managing-safety-and-security-risks-quiz",
                    "https://www.coursera.org/learn/ethical-communication-data-driven-technologies/exam/SNs9L/communicating-the-business-impacts-of-ethical-risks",
                    "https://www.coursera.org/learn/ethical-communication-data-driven-technologies/exam/K6TaO/designing-communication-strategies",
                    "https://www.coursera.org/learn/ethical-communication-data-driven-technologies/exam/5v1OD/managing-a-crisis-communicating-critical-messages-and-ensuring-business",
                    "https://www.coursera.org/learn/ethical-communication-data-driven-technologies/exam/wqLkP/managing-the-media-during-an-ethical-crisis",
                    "https://www.coursera.org/learn/ethical-data-driven-technology-leader/exam/Vzp5x/ethical-organizational-culture-quiz",
                    "https://www.coursera.org/learn/ethical-data-driven-technology-leader/exam/zRafZ/ethical-considerations-in-governance-and-policy-making-quiz",
                    "https://www.coursera.org/learn/ethical-data-driven-technology-leader/exam/Q0saz/code-of-ethics-quiz",
                    "https://www.coursera.org/learn/ethical-data-driven-technology-leader/exam/j5tLn/policy-development-and-monitoring-quiz",
                    "https://www.coursera.org/learn/preparing-for-your-certnexus-certification-exam/exam/DLw5W/summative-assessment",
                    "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/peer/MneNm/op-ed-article",
                    "https://www.coursera.org/learn/ethical-frameworks-action/peer/B8Wrx/ethical-review",
                    "https://www.coursera.org/learn/detect-mitigate-ethical-risks/peer/oqeJE/algorithmic-impact-assessment-aia",
                    "https://www.coursera.org/learn/ethical-communication-data-driven-technologies/peer/SSTVf/crisis-response",
                    "https://www.coursera.org/learn/ethical-data-driven-technology-leader/peer/Vbox1/corporate-code-of-ethics-proposal"
                ];
                openAllLinks(links);
                break;
            case "WED201c":
                var links = [
                    "https://bootstrapmade.com/flexstart-bootstrap-startup-template/download/",
                    "https://bootstrapmade.com/flexstart-bootstrap-startup-template/download/",
                    "https://bootstrapmade.com/flexstart-bootstrap-startup-template/download/"
                ];
                openAllLinks(links);
                break;
            case "ITA203c":
                var links = [
                    "https://desktop.github.com/",
                    "https://desktop.github.com/"
                ];
                openAllLinks(links);
                break;
        }
    }

    function openAllLinks(links) {
        links.forEach(function (link) {
            window.open(link, "_blank");
        });
    }
});