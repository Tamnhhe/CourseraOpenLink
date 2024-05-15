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
            case "OBE102c":
                openLinksButton.disabled = false;
                break;
            case "MKT208c":
                openLinksButton.disabled = false;
                break;
            case "NWC203c":
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
                    "https://www.coursera.org/learn/html/exam/Dlayy/html-web-basics",
                    "https://www.coursera.org/learn/html/exam/a0yq0/tags",
                    "https://www.coursera.org/learn/html/exam/EQVpd/final-course-quiz",
                    "https://www.coursera.org/learn/introcss/exam/wUVuR/styling-syntax-and-theory",
                    "https://www.coursera.org/learn/introcss/exam/trNtz/advanced-selectors-quiz",
                    "https://www.coursera.org/learn/introcss/exam/JW2xb/final-quiz",
                    "https://www.coursera.org/learn/javascript/exam/uOJ7X/week-one-quiz",
                    "https://www.coursera.org/learn/javascript/exam/MJrZp/week-two-quiz",
                    "https://www.coursera.org/learn/javascript/exam/6Pnw0/week-three-review-quiz",
                    "https://www.coursera.org/learn/responsivedesign/exam/D8W4n/basic-concepts-in-responsive-design-approaches",
                    "https://www.coursera.org/learn/responsivedesign/exam/mMkPC/week-two-review-media-queries-and-breakpoints",
                    "https://www.coursera.org/learn/responsivedesign/exam/NKHvB/responsive-design-final-quiz",
                    "https://www.coursera.org/learn/html/peer/hIMvz/final-project",
                    "https://www.coursera.org/learn/introcss/peer/QUd5I/homework-one-styling-your-first-page",
                    "https://www.coursera.org/learn/introcss/peer/6YqCl/homework-two-advanced-selectors-and-display",
                    "https://www.coursera.org/learn/introcss/peer/JMPGW/final-project-create-your-site",
                    "https://www.coursera.org/learn/javascript/peer/2wVYF/javascript-interactive-photo-gallery",
                    "https://www.coursera.org/learn/javascript/peer/VHPfS/final-project-your-own-accessible-photo-gallery",
                    "https://www.coursera.org/learn/responsivedesign/peer/8dIa2/create-a-responsive-stylesheet",
                    "https://www.coursera.org/learn/responsivedesign/peer/bbH2F/final-project-photo-gallery",
                    "https://www.coursera.org/learn/web-design-project/peer/jBJMg/option-3-demo-your-portfolio-designed-using-a-framework",
                    "https://www.coursera.org/learn/web-design-project/peer/5b3oM/option-1-demo-you-portfolio-designed-from-scratch",
                    "https://www.coursera.org/learn/web-design-project/peer/prXqn/option-2-demo-your-portfolio-designed-from-a-template",
                    "https://www.coursera.org/learn/web-design-project/peer/VCAk1/option-1-design-sketch-demo-for-a-site-coded-from-scratch",
                    "https://www.coursera.org/learn/web-design-project/peer/j46GC/option-2-design-sketch-demo-for-a-site-coded-from-a-template",
                    "https://www.coursera.org/learn/web-design-project/peer/6PtQr/option-3-design-sketch-demo-for-a-site-coded-using-a-framework"

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

            case "OBE102c":
                var links = [
                    "https://www.coursera.org/learn/organisational-design-know-your-organisation/exam/5RfaR/week-1-quiz",
                    "https://www.coursera.org/learn/organisational-design-know-your-organisation/exam/OYE3p/week-2-quiz",
                    "https://www.coursera.org/learn/organisational-design-know-your-organisation/exam/YwYiW/week-3-quiz",
                    "https://www.coursera.org/learn/organisational-design-know-your-organisation/exam/6l2Kt/week-4-quiz",
                    "https://www.coursera.org/learn/organisational-design-know-your-organisation/exam/8x6cj/week-5-quiz",
                    "https://www.coursera.org/learn/organisational-design-know-your-organisation/exam/5WffK/week-6-quiz",
                    "https://www.coursera.org/learn/organisational-behaviour-know-your-people/exam/zRlWQ/week-1-quiz",
                    "https://www.coursera.org/learn/organisational-behaviour-know-your-people/exam/1KURG/week-2-quiz",
                    "https://www.coursera.org/learn/organisational-behaviour-know-your-people/exam/FmSak/week-3-quiz",
                    "https://www.coursera.org/learn/organisational-behaviour-know-your-people/exam/IaZ0y/week-4-quiz",
                    "https://www.coursera.org/learn/organisational-behaviour-know-your-people/exam/tIsF8/week-5-quiz",
                    "https://www.coursera.org/learn/organisational-behaviour-know-your-people/exam/Gxpbq/week-6-quiz",
                    "https://www.coursera.org/learn/leadership-adapt-your-style/exam/Pp4Is/week-1-quiz",
                    "https://www.coursera.org/learn/leadership-adapt-your-style/exam/5cwIa/week-2-quiz",
                    "https://www.coursera.org/learn/leadership-adapt-your-style/exam/ptEiU/week-3-quiz",
                    "https://www.coursera.org/learn/leadership-adapt-your-style/exam/DCUeC/week-4-quiz",
                    "https://www.coursera.org/learn/leadership-adapt-your-style/exam/DkOVN/week-5-quiz",
                    "https://www.coursera.org/learn/leadership-adapt-your-style/exam/n99hA/week-6-quiz",
                    "https://www.coursera.org/learn/visionary-leadership-meaning-maker/exam/OEvFA/week-1-quiz",
                    "https://www.coursera.org/learn/visionary-leadership-meaning-maker/exam/hyQcT/week-2-quiz",
                    "https://www.coursera.org/learn/visionary-leadership-meaning-maker/exam/EykYM/week-3-quiz",
                    "https://www.coursera.org/learn/visionary-leadership-meaning-maker/exam/CgKBN/week-4-quiz",
                    "https://www.coursera.org/learn/visionary-leadership-meaning-maker/exam/VzGtb/week-5-quiz",
                    "https://www.coursera.org/learn/visionary-leadership-meaning-maker/exam/9cHgJ/week-6-quiz",

                    "https://desktop.github.com/"
                ];
                openAllLinks(links);
                break;
            case "MKT208c":
                var links = [
                    "https://www.coursera.org/learn/what-is-social/exam/ds0El/quiz-1",
                    "https://www.coursera.org/learn/what-is-social/exam/nIo5r/quiz-2",
                    "https://www.coursera.org/learn/what-is-social/exam/PpTck/quiz-3",
                    "https://www.coursera.org/learn/what-is-social/exam/qxx9W/networking-tracking-assignment",
                    "https://www.coursera.org/learn/importance-of-listening/exam/9UBG5/quiz-1",
                    "https://www.coursera.org/learn/importance-of-listening/exam/kQ7g7/quiz-2",
                    "https://www.coursera.org/learn/importance-of-listening/exam/jvjrY/quiz-3",
                    "https://www.coursera.org/learn/importance-of-listening/exam/raxwA/quiz-4",
                    "https://www.coursera.org/learn/nurture-market-strategies/exam/iLIPb/quiz-1",
                    "https://www.coursera.org/learn/nurture-market-strategies/exam/DxLVm/quiz-2",
                    "https://www.coursera.org/learn/nurture-market-strategies/exam/rJgvX/quiz-3",
                    "https://www.coursera.org/learn/social-imc/exam/5jfJy/quiz-1",
                    "https://www.coursera.org/learn/social-imc/exam/eqaQW/quiz-2",
                    "https://www.coursera.org/learn/social-imc/exam/ecYtP/quiz-3",
                    "https://www.coursera.org/learn/social-imc/exam/1aaIW/quiz-4",
                    "https://www.coursera.org/learn/business-of-social/exam/8KuqZ/quiz-1",
                    "https://www.coursera.org/learn/business-of-social/exam/w7LDW/quiz-2",
                    "https://www.coursera.org/learn/business-of-social/exam/neGtD/assessing-your-performance",
                    "https://www.coursera.org/learn/business-of-social/exam/A506k/quiz-3",
                    "https://www.coursera.org/learn/what-is-social/peer/WABcz/career-targeting-assignment",
                    "https://www.coursera.org/learn/importance-of-listening/peer/OmQZd/hearing-your-target-market-through-social-tools-finding-influencers-topics-and",
                    "https://www.coursera.org/learn/nurture-market-strategies/peer/fW0dF/creating-your-first-blog-article",
                    "https://www.coursera.org/learn/social-imc/peer/XTAiE/marketing-your-blog-a-b-split-test-messages",
                    "https://www.coursera.org/learn/social-marketing-capstone/peer/tbzCQ/your-social-marketing-program"

                ];
                openAllLinks(links);
                break;
            case "NWC203c":
                var links = [
                    "https://www.coursera.org/learn/fundamentals-network-communications/exam/dVp4Q/graded-assessment-communication-networks-and-services",
                    "https://www.coursera.org/learn/fundamentals-network-communications/exam/86NSN/graded-assessment-layered-architecture",

                ];
                openAllLinks(links);
                break;
            case "ITA203c":
                var links = [
                    //MOOCS 1
                    "https://www.coursera.org/learn/is-it-governance/exam/1ZzMt/module-1-it-alignment-quiz",
                    "https://www.coursera.org/learn/is-it-governance/exam/nFr8P/module-2-evaluating-it-investments-part-i-quiz",
                    "https://www.coursera.org/learn/is-it-governance/exam/ZMH29/module-3-evaluating-it-investments-part-ii-quiz",
                    "https://www.coursera.org/learn/is-it-governance/exam/7oPvr/module-4-change-mangement-quiz",
                    "https://www.coursera.org/learn/is-it-governance/peer/NF5oC/course-project",
                    //MOOCS 2
                    "https://www.coursera.org/learn/analysis-for-business-systems/exam/dK1Ay/module-1-intro-to-business-systems-quiz",
                    "https://www.coursera.org/learn/analysis-for-business-systems/exam/wx8TD/module-2-analysis-phase-documentation-quiz",
                    "https://www.coursera.org/learn/analysis-for-business-systems/exam/WjA7m/module-3-analysis-phase-diagrams-quiz",
                    "https://www.coursera.org/learn/analysis-for-business-systems/exam/WtigG/module-4-design-phase-overview-quiz",
                    "https://www.coursera.org/learn/analysis-for-business-systems/peer/0JWIn/course-project",
                    //MOOCS 3
                    "https://www.coursera.org/learn/enterprise-systems/exam/oN90U/module-1-erp-fundamentals-quiz",
                    "https://www.coursera.org/learn/enterprise-systems/exam/YEQo5/module-2-business-processes-in-erp-quiz",
                    "https://www.coursera.org/learn/enterprise-systems/exam/FVkY1/module-3-software-selection-considerations-quiz",
                    "https://www.coursera.org/learn/enterprise-systems/exam/WgmXi/module-4-change-management-quiz",
                    "https://www.coursera.org/learn/enterprise-systems/peer/drejr/course-project",
                    //MOOCS 4
                    "https://www.coursera.org/learn/it-infrastructure-and-emerging-trends/exam/TuOFa/module-1-cloud-computing-quiz",
                    "https://www.coursera.org/learn/it-infrastructure-and-emerging-trends/exam/XDJwU/module-2-mobile-communications-quiz",
                    "https://www.coursera.org/learn/it-infrastructure-and-emerging-trends/exam/AldLi/module-3-information-security-quiz",
                    "https://www.coursera.org/learn/it-infrastructure-and-emerging-trends/exam/m9gar/module-4-emerging-trends-quiz",
                    "https://www.coursera.org/learn/it-infrastructure-and-emerging-trends/peer/hcRkG/course-project"

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