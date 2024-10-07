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
      case "DMS301m":
        openLinksButton.disabled = false;
        break;
      case "OBE102c":
        openLinksButton.disabled = false;
      case "PRJ301c":
        openLinksButton.disabled = false;
        break;
      case "HRM201c":
        openLinksButton.disabled = false;
        break;
      case "MSM201c":
        openLinksButton.disabled = false;
        break;
      case "SSL101c":
        openLinksButton.disabled = false;
        break;
      case "MKT208c":
        openLinksButton.disabled = false;
        break;
      case "MKT205c":
        openLinksButton.disabled = false;
        break;
      case "EBC301c":
        openLinksButton.disabled = false;
        break;
      case "ITE303c":
        openLinksButton.disabled = false;
        break;
      case "WDU202c":
        openLinksButton.disabled = false;
        break;
      case "WDU203c":
        openLinksButton.disabled = false;
        break;
      case "PMG201c":
        openLinksButton.disabled = false;
        break;
      case "PRJ301cJFD":
        openLinksButton.disabled = false;
        break;
      case "ENW492c":
        openLinksButton.disabled = false;
        break;
      case "SWE201c":
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
          "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/assignment-submission/iyd6e/data-driven-emerging-technologies-quiz",
          "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/assignment-submission/2rF4o/privacy-and-legal-concepts-related-to-data-driven-technologies-quiz",
          "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/assignment-submission/vousp/bias-quiz",
          "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/exam/vA5Tl/ethical-theories-quiz",
          "https://www.coursera.org/learn/promote-ethical-data-driven-technologies/assignment-submission/RyrAe/ethical-principles-applied-to-data-driven-technologies-quiz",
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
          "https://www.coursera.org/learn/ethical-data-driven-technology-leader/peer/Vbox1/corporate-code-of-ethics-proposal",
          "https://www.coursera.org/learn/ethics-of-artificial-intelligence/exam/zlc94/weekly-quiz",
          "https://www.coursera.org/learn/ethics-of-artificial-intelligence/exam/D1iux/weekly-quiz",
          "https://www.coursera.org/learn/ethics-of-artificial-intelligence/exam/cazTR/weekly-quiz",
          "https://www.coursera.org/learn/ethics-of-artificial-intelligence/exam/Jh4NS/weekly-quiz"
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
      case "SSL101c":
        var links = [
          //MOOCS 1
          "https://www.coursera.org/learn/digital-literacy/exam/vExwy/summative-quiz-module-1",
          "https://www.coursera.org/learn/digital-literacy/exam/AG3ia/discussion-board-self-assessment-module-1",
          "https://www.coursera.org/learn/digital-literacy/exam/FFWgS/summative-quiz-module-2",
          "https://www.coursera.org/learn/digital-literacy/exam/Ht89z/discussion-board-self-assessment-module-2",
          "https://www.coursera.org/learn/digital-literacy/exam/U9wJy/summative-module-3",
          "https://www.coursera.org/learn/digital-literacy/exam/DLz9q/discussion-board-self-assessment-module-3",
          "https://www.coursera.org/learn/digital-literacy/exam/EURgp/summative-module-4",
          "https://www.coursera.org/learn/digital-literacy/exam/ieIom/discussion-board-self-assessment-module-4",
          "https://www.coursera.org/learn/digital-literacy/exam/kcmYy/summative-module-5",
          "https://www.coursera.org/learn/digital-literacy/exam/JfQsU/discussion-board-self-assessment-module-5",
          "https://www.coursera.org/learn/digital-literacy/peer/OPSG4/critically-evaluating-sources",
          //MOOCS 2
          "https://www.coursera.org/learn/problem-solving-skills/exam/p71AE/summative-quiz-module-1",
          "https://www.coursera.org/learn/problem-solving-skills/exam/6p3ew/discussion-board-self-assessment-module-1",
          "https://www.coursera.org/learn/problem-solving-skills/exam/eIThH/summative-quiz-module-2",
          "https://www.coursera.org/learn/problem-solving-skills/exam/M5HbO/discussion-board-self-assessment-module-2",
          "https://www.coursera.org/learn/problem-solving-skills/exam/2vjlk/summative-quiz-module-3",
          "https://www.coursera.org/learn/problem-solving-skills/exam/uc0U7/discussion-board-self-assessment-module-3",
          "https://www.coursera.org/learn/problem-solving-skills/exam/m6fac/summative-quiz-module-4",
          "https://www.coursera.org/learn/problem-solving-skills/exam/O1xPA/discussion-board-self-assessment-module-4",
          "https://www.coursera.org/learn/problem-solving-skills/exam/k1JMF/summative-quiz-module-5",
          "https://www.coursera.org/learn/problem-solving-skills/exam/5FGri/discussion-board-self-assessment-module-5",
          "https://www.coursera.org/learn/problem-solving-skills/peer/yOvvY/describing-your-problem-solving-processes",
          //MOOCS 3
          "https://www.coursera.org/learn/critical-thinking-skills/exam/UTsAS/summative-quiz-module-1",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/YaKuB/discussion-board-self-assessment-module-1",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/zU8g9/2-5-summative-quiz-module-2",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/EVp7b/discussion-board-self-assessment-module-2",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/pb577/summative-quiz-module-3",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/zBNpz/discussion-board-self-assessment-module-3",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/cTkDN/summative-quiz-module-4",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/LJRMh/discussion-board-self-assessment-module-4",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/auP1D/summative-quiz-module-5",
          "https://www.coursera.org/learn/critical-thinking-skills/exam/CHUDp/discussion-board-self-assessment-module-5",
          "https://www.coursera.org/learn/critical-thinking-skills/peer/PGcQn/critically-evaluating-arguments",
          //MOOCS 4
          "https://www.coursera.org/learn/communication-skills/exam/09pD5/summative-quiz-module-1",
          "https://www.coursera.org/learn/communication-skills/exam/aHMrE/discussion-board-self-assessment-module-1",
          "https://www.coursera.org/learn/communication-skills/exam/6FSQa/summative-quiz-module-2",
          "https://www.coursera.org/learn/communication-skills/exam/9VY4A/discussion-board-self-assessment-module-2",
          "https://www.coursera.org/learn/communication-skills/exam/4nrXk/summative-quiz-module-3",
          "https://www.coursera.org/learn/communication-skills/exam/o2R0C/discussion-board-self-assessment-module-3",
          "https://www.coursera.org/learn/communication-skills/exam/9CT7C/summative-quiz-module-4",
          "https://www.coursera.org/learn/communication-skills/exam/oQvEf/discussion-board-self-assessment-module-4",
          "https://www.coursera.org/learn/communication-skills/exam/x2T6q/summative-quiz-module-5",
          "https://www.coursera.org/learn/communication-skills/exam/nVuwW/discussion-board-self-assessment-module-5",
          "https://www.coursera.org/learn/communication-skills/peer/mSBnx/communication-in-a-university-course",
          //MOOCS 5
          "https://www.coursera.org/learn/academic-skills-project/peer/RYbjM/problem-statement",
          "https://www.coursera.org/learn/academic-skills-project/peer/jINkK/background-paragraph",
          "https://www.coursera.org/learn/academic-skills-project/peer/QYH47/evaluating-actions",
          "https://www.coursera.org/learn/academic-skills-project/peer/tZ8BQ/smart-goals",
          "https://www.coursera.org/learn/academic-skills-project/peer/8GYlG/project-proposal-final-submission",
          "https://www.coursera.org/learn/academic-skills-project/peer/Vdjs9/video-proposal-final-submission"
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
      case "HRM201c":
        var links = [
          //MOOCS 1
          "https://www.coursera.org/learn/managing-human-resources/exam/DosiJ/different-approaches-to-managing-people",
          "https://www.coursera.org/learn/managing-human-resources/exam/NLXmK/monetary-aspects-of-work",
          "https://www.coursera.org/learn/managing-human-resources/exam/7HNLK/non-monetary-aspects-of-work",
          "https://www.coursera.org/learn/managing-human-resources/peer/VttJk/analyzing-your-hr-landscape",
          "https://www.coursera.org/learn/managing-human-resources/exam/bZ82U/managing-in-a-complex-system",
          //MOOCS 2
          "https://www.coursera.org/learn/recruiting-hiring-onboarding-employees/exam/rBUPh/aligning-recruitment-and-selection-with-company-strategy",
          "https://www.coursera.org/learn/recruiting-hiring-onboarding-employees/peer/yVhFK/workforce-planning-application-understanding-business-labor-challenges-and",
          "https://www.coursera.org/learn/recruiting-hiring-onboarding-employees/exam/Vxnf7/recruitment-finding-the-best-candidates",
          "https://www.coursera.org/learn/recruiting-hiring-onboarding-employees/exam/SOc3a/choosing-the-best-candidates",
          "https://www.coursera.org/learn/recruiting-hiring-onboarding-employees/peer/d2WZ1/onboarding-portfolio",
          //MOOCS 3
          "https://www.coursera.org/learn/employee-performance/exam/j1BHQ/developing-performance-management-systems",
          "https://www.coursera.org/learn/employee-performance/peer/Jr8Lr/management-by-objective-mbo",
          "https://www.coursera.org/learn/employee-performance/exam/HqYjb/tools-for-effective-performance-management",
          "https://www.coursera.org/learn/employee-performance/exam/uFZpA/creating-a-positive-performance-culture",
          //MOOCS 4
          "https://www.coursera.org/learn/compensation-management/exam/GNdfb/pay-determination",
          "https://www.coursera.org/learn/compensation-management/exam/ntuLz/pay-for-performance",
          "https://www.coursera.org/learn/compensation-management/exam/1SSga/benefits-and-compliance",
          "https://www.coursera.org/learn/compensation-management/peer/kyf9P/job-and-benefits-analysis",
          "https://www.coursera.org/learn/compensation-management/exam/6aszH/non-monetary-rewards",
          //MOOOCS 5
          "https://www.coursera.org/learn/human-resources-management-capstone/peer/UA2l3/hrm-capstone-project"
        ];
        openAllLinks(links);
        break;
      case "ITE303c":
        var links = [
          //MOOCS 1
          "https://www.coursera.org/learn/ai-algorithm-limitations/exam/yMpV4/weekly-quiz",
          "https://www.coursera.org/learn/ai-algorithm-limitations/exam/Y1zqu/weekly-quiz",
          "https://www.coursera.org/learn/ai-algorithm-limitations/exam/czJXU/weekly-quiz",
          "https://www.coursera.org/learn/ai-algorithm-limitations/exam/kpD3i/weekly-quiz",
          //MOOCS 2
          "https://www.coursera.org/learn/ai-data-bias/exam/iytev/weekly-quiz",
          "https://www.coursera.org/learn/ai-data-bias/exam/vSZhp/weekly-quiz",
          "https://www.coursera.org/learn/ai-data-bias/exam/meLyz/weekly-quiz",
          //MOOCS 3
          "https://www.coursera.org/learn/ai-privacy-and-convenience/exam/xUnOw/weekly-quiz",
          "https://www.coursera.org/learn/ai-privacy-and-convenience/exam/HrFKc/weekly-quiz",
          "https://www.coursera.org/learn/ai-privacy-and-convenience/exam/lXceA/weekly-quiz",
          //MOOCS 4
          "https://www.coursera.org/learn/ai-ethics-analysis/exam/tv0Oo/analysis",
          "https://www.coursera.org/learn/ai-ethics-analysis/exam/bsDnp/analysis",
          "https://www.coursera.org/learn/ai-ethics-analysis/exam/2plSH/analysis"
        ];
        openAllLinks(links);
        break;
      case "PRJ301c":
        var links = [
          //MOOCS 1
          "https://www.coursera.org/learn/java-database-connectivity-introduction/exam/NtBPQ/module-1-exam",
          "https://www.coursera.org/learn/java-database-connectivity-introduction/exam/Nr1SK/module-2-exam",
          //MOOCS 2
          "https://www.coursera.org/learn/java-database-connectivity-prepared-statements/exam/TnWzG/module-1-exam",
          "https://www.coursera.org/learn/java-database-connectivity-prepared-statements/exam/QHHim/module-2-exam",
          //MOOCS 3
          "https://www.coursera.org/learn/java-database-connectivity-sql-primer/exam/Pfic0/module-1-exam",
          "https://www.coursera.org/learn/java-database-connectivity-sql-primer/exam/U6geV/module-2-exam",
          //MOOCS 4
          "https://www.coursera.org/learn/java-database-connectivity-jakarta-persistence/exam/UDks0/module-1-exam",
          "https://www.coursera.org/learn/java-database-connectivity-jakarta-persistence/exam/jRFgH/module-2-exam",
          "https://www.coursera.org/learn/java-database-connectivity-jakarta-persistence/exam/l6sKX/module-3-exam"
        ];
        openAllLinks(links);
        break;
      case "WDU202c":
        var links = [
          "https://www.coursera.org/learn/visual-elements-user-interface-design/assignment-submission/xuu1h/user-interface-design-foundations",
          "https://www.coursera.org/learn/visual-elements-user-interface-design/assignment-submission/gpo0x/formal-elements-of-ui-design",
          "https://www.coursera.org/learn/visual-elements-user-interface-design/assignment-submission/1kscs/active-ui-design-elements",
          "https://www.coursera.org/learn/visual-elements-user-interface-design/assignment-submission/SZjTJ/composing-ui-design",
          "https://www.coursera.org/learn/ux-design-fundamentals/assignment-submission/vZFFi/ideation-articulation-and-development",
          "https://www.coursera.org/learn/ux-design-fundamentals/assignment-submission/n7enV/planning-testing-researching-and-mapping",
          "https://www.coursera.org/learn/ux-design-fundamentals/assignment-submission/l99qg/what-goes-where",
          "https://www.coursera.org/learn/ux-design-fundamentals/assignment-submission/GvxL5/making-it-by-faking-it",
          "https://www.coursera.org/learn/web-design-strategy/peer/jGsu2/project-ideas",
          "https://www.coursera.org/learn/web-design-strategy/peer/qfDga/strategy-document",
          "https://www.coursera.org/learn/web-design-strategy/peer/Fkj9b/outline-of-scope",
          "https://www.coursera.org/learn/web-design-strategy/peer/NSY0y/sitemap",
          "https://www.coursera.org/learn/web-design-wireframes-prototypes/peer/eEaSc/wireframes",
          "https://www.coursera.org/learn/web-design-wireframes-prototypes/peer/RMarV/visual-mockups-home-pages",
          "https://www.coursera.org/learn/web-design-wireframes-prototypes/peer/hGtkS/visual-mockups-full-set",
          "https://www.coursera.org/learn/web-design-wireframes-prototypes/peer/B45Cf/final-project-submission"
        ];
        openAllLinks(links);
        break;
      case "PMG201c":
        var links = [
          //Moocs 1
          "https://www.coursera.org/learn/project-planning/exam/Lgbz3/module-2-quiz",
          "https://www.coursera.org/learn/project-planning/exam/eNyN4/module-3-quiz",
          "https://www.coursera.org/learn/project-planning/exam/G1UnF/module-4-quiz",
          "https://www.coursera.org/learn/project-planning/exam/iN7js/module-5-quiz",
          "https://www.coursera.org/learn/project-planning/exam/T4KEX/final-exam",
          //Moocs 2
          "https://www.coursera.org/learn/schedule-projects/exam/TgJP8/module-2-quiz",
          "https://www.coursera.org/learn/schedule-projects/exam/v8agT/module-3-quiz",
          "https://www.coursera.org/learn/schedule-projects/exam/x8ob7/module-4-quiz",
          "https://www.coursera.org/learn/schedule-projects/exam/n9zVp/final-exam",
          //Moocs 3
          "https://www.coursera.org/learn/project-risk-management/exam/k7VaC/module-2-quiz",
          "https://www.coursera.org/learn/project-risk-management/exam/OSt8i/module-3-quiz",
          "https://www.coursera.org/learn/project-risk-management/exam/Z46xy/module-4-quiz",
          "https://www.coursera.org/learn/project-risk-management/exam/W08Xd/final-exam",
          //Moocs 4
          "https://www.coursera.org/learn/project-management-capstone/peer/jxp63/final-peer-review-assignment"
        ];
        openAllLinks(links);
        break;
      case "MKT205c":
        var links = [
          //Moocs 1
          "https://www.coursera.org/learn/intro-international-marketing/exam/WxgXz/lesson-1-quiz",
          "https://www.coursera.org/learn/intro-international-marketing/exam/LOkrR/lesson-2-quiz",
          "https://www.coursera.org/learn/intro-international-marketing/exam/mqBHH/lesson-3-quiz",
          "https://www.coursera.org/learn/intro-international-marketing/exam/ZeBI4/final-quiz",
          //Moocs 2
          "https://www.coursera.org/learn/international-marketing-entry-execution/exam/PHKix/lesson-2-quiz",
          "https://www.coursera.org/learn/international-marketing-entry-execution/exam/qdKcS/lesson-3-quiz",
          "https://www.coursera.org/learn/international-marketing-entry-execution/exam/ByZLf/final-quiz",
          //Moocs 3
          "https://www.coursera.org/learn/b2b-marketing/exam/hypKj/lesson-1-graded-quiz",
          "https://www.coursera.org/learn/b2b-marketing/exam/KJ0ko/lesson-2-graded-quiz",
          "https://www.coursera.org/learn/b2b-marketing/exam/G9hsV/final-graded-quiz",
          //Moocs 4
          "https://www.coursera.org/learn/healthcare-marketing-hospitality-management/exam/Hd8oV/graded-quiz-for-lesson-1-what-is-unique-about-managing-a-service-business",
          "https://www.coursera.org/learn/healthcare-marketing-hospitality-management/exam/J0CG1/graded-quiz-lesson-2-how-to-successfully-market-a-hospitality-business",
          "https://www.coursera.org/learn/healthcare-marketing-hospitality-management/exam/cL2td/graded-quiz-lesson-3-how-to-successfully-market-a-healthcare-business",
          //Moocs 5
          "https://www.coursera.org/learn/international-entertainment-sports-marketing/exam/gThSc/week-1-graded-quiz",
          "https://www.coursera.org/learn/international-entertainment-sports-marketing/exam/ePR95/week-2-graded-quiz",
          "https://www.coursera.org/learn/international-entertainment-sports-marketing/exam/lEmqV/final-quiz",
          //Moocs 6
          "https://www.coursera.org/learn/international-vertical-marketing-capstone-project/peer/kjytx/international-marketing-cross-industry-growth-capstone-peer-review"
        ];
        openAllLinks(links);
        break;
      case "ENW492c":
        var links = [
          //Moocs 1
          "https://www.coursera.org/learn/grammar-punctuation/assignment-submission/GUVaf/verb-tenses-and-conjunctions",
          "https://www.coursera.org/learn/grammar-punctuation/assignment-submission/XRY2Y/compound-and-complex-sentences",
          "https://www.coursera.org/learn/grammar-punctuation/assignment-submission/Udaq4/commas-parallel-structure-and-sentence-variety",
          //Moocs 2
          "https://www.coursera.org/learn/getting-started-with-essay-writing/exam/bhs3M/essay-writing",
          "https://www.coursera.org/learn/getting-started-with-essay-writing/peer/ICHzg/compare-contrast-essay-peer-review",
          "https://www.coursera.org/learn/getting-started-with-essay-writing/exam/NEr6a/writing-compare-contrast-essays",
          "https://www.coursera.org/learn/getting-started-with-essay-writing/peer/fQ0p5/cause-effect-essay-peer-review",
          "https://www.coursera.org/learn/getting-started-with-essay-writing/exam/JB7Fb/writing-cause-effect-essays",
          "https://www.coursera.org/learn/getting-started-with-essay-writing/peer/y10b5/argument-essay-peer-review",
          "https://www.coursera.org/learn/getting-started-with-essay-writing/exam/pedZ2/argument-essays",
          //Moocs 3
          "https://www.coursera.org/learn/advanced-writing/peer/a4RMx/advanced-argument-essay-peer-review",
          "https://www.coursera.org/learn/advanced-writing/exam/DzuJn/advanced-argument-quiz",
          "https://www.coursera.org/learn/advanced-writing/exam/HcYie/plagiarism-quiz",
          "https://www.coursera.org/learn/advanced-writing/peer/mk7IJ/synthesis-essay-peer-review",
          "https://www.coursera.org/learn/advanced-writing/exam/CPlvf/synthesis-essay-quiz",
          "https://www.coursera.org/learn/advanced-writing/peer/8kvZL/documented-essay-peer-review",
          "https://www.coursera.org/learn/advanced-writing/exam/IFp2m/documented-essay-quiz",
          //Moocs 4
          "https://www.coursera.org/learn/introduction-to-research-for-essay-writing/exam/cYaIj/introduction-to-research-quiz",
          "https://www.coursera.org/learn/introduction-to-research-for-essay-writing/peer/fXG7c/annotated-bibliography-assignment-feedback",
          "https://www.coursera.org/learn/introduction-to-research-for-essay-writing/peer/pAw7G/thesis-statement-for-research-paper",
          "https://www.coursera.org/learn/introduction-to-research-for-essay-writing/exam/Gszpk/doing-research-quiz",
          "https://www.coursera.org/learn/introduction-to-research-for-essay-writing/peer/mzs3a/using-statistics-for-writing-peer-review",
          "https://www.coursera.org/learn/introduction-to-research-for-essay-writing/exam/4WjQv/language-for-research-quiz",
          "https://www.coursera.org/learn/introduction-to-research-for-essay-writing/exam/UtIw0/citing-sources-and-formatting-quiz",
          //Moocs 5
          "https://www.coursera.org/learn/academic-writing-capstone/peer/liyDu/submit-research-paper-final-draft"
        ];
        openAllLinks(links);
        break;
      case "MSM201c":
        var links = [
          //Moocs 1
          "https://www.coursera.org/learn/social-media-marketing-introduction/assignment-submission/xUbL3/the-social-media-landscape-quiz",
          "https://www.coursera.org/learn/social-media-marketing-introduction/assignment-submission/PMX6Y/social-media-platforms-overview-quiz",
          "https://www.coursera.org/learn/social-media-marketing-introduction/assignment-submission/sUgWl/goals-and-planning-for-success-quiz",
          "https://www.coursera.org/learn/social-media-marketing-introduction/peer/8gxni/create-a-smart-goal-and-kpis",
          "https://www.coursera.org/learn/social-media-marketing-introduction/assignment-submission/8ygIE/understand-your-audience-quiz",
          "https://www.coursera.org/learn/social-media-marketing-introduction/peer/ICTeY/create-a-customer-persona-and-journey-development",
          "https://www.coursera.org/learn/social-media-marketing-introduction/assignment-submission/4yH7d/choose-your-social-media-channels-quiz",
          //Moocs 2
          "https://www.coursera.org/learn/social-media-management/peer/QLKjb/create-a-facebook-business-page-or-an-instagram-business-account",
          "https://www.coursera.org/learn/social-media-management/assignment-submission/pW18i/establish-your-presence-quiz",
          "https://www.coursera.org/learn/social-media-management/peer/0qlhr/create-a-post-on-facebook-or-instagram",
          "https://www.coursera.org/learn/social-media-management/assignment-submission/WYax4/social-media-content-quiz",
          "https://www.coursera.org/learn/social-media-management/peer/mcNJW/create-your-content-calendar",
          "https://www.coursera.org/learn/social-media-management/assignment-submission/ADWjU/social-media-content-management-quiz",
          "https://www.coursera.org/learn/social-media-management/assignment-submission/akiez/evaluate-your-efforts-quiz",
          //Moocs 3
          "https://www.coursera.org/learn/social-media-advertising-fundamentals/assignment-submission/GuFNN/introduction-to-social-media-advertising-quiz",
          "https://www.coursera.org/learn/social-media-advertising-fundamentals/assignment-submission/Wm4q6/creating-effective-ads-on-social-media-quiz",
          "https://www.coursera.org/learn/social-media-advertising-fundamentals/assignment-submission/Zrmzm/data-privacy-and-policies-on-social-media-quiz",
          "https://www.coursera.org/learn/social-media-advertising-fundamentals/assignment-submission/2DLdC/getting-started-with-advertising-on-facebook-and-instagram-quiz",
          "https://www.coursera.org/learn/social-media-advertising-fundamentals/peer/8U1LK/create-a-creative-brief-for-your-social-media-ad",
          //Moocs 4
          "https://www.coursera.org/learn/advertising-with-facebook/assignment-submission/iVgrh/first-steps-in-meta-ads-manager-quiz",
          "https://www.coursera.org/learn/advertising-with-facebook/assignment-submission/URIhA/determine-your-campaign-objective-and-budget-quiz",
          "https://www.coursera.org/learn/advertising-with-facebook/assignment-submission/eQFT4/select-your-audience-placements-and-schedule-quiz",
          "https://www.coursera.org/learn/advertising-with-facebook/assignment-submission/XQ2j5/create-your-ads-and-evaluate-your-campaign-results-quiz",
          "https://www.coursera.org/learn/advertising-with-facebook/assignment-submission/RpDiu/advertising-with-meta-quiz",
          //Moocs 5
          "https://www.coursera.org/learn/measure-and-optimize-social-media-marketing-campaigns/assignment-submission/JfaK0/evaluate-your-marketing-results-against-goals-quiz",
          "https://www.coursera.org/learn/measure-and-optimize-social-media-marketing-campaigns/assignment-submission/ImL08/measure-your-advertising-effectiveness-quiz",
          "https://www.coursera.org/learn/measure-and-optimize-social-media-marketing-campaigns/assignment-submission/aaNAv/optimize-your-ad-campaigns-quiz",
          "https://www.coursera.org/learn/measure-and-optimize-social-media-marketing-campaigns/assignment-submission/RVWew/communicate-your-marketing-results-quiz",
          //Moocs 6
          "https://www.coursera.org/learn/facebook-social-media-marketing-capstone/gradedLti/9Ra4F/overview-of-the-certification-exam",
          "https://www.coursera.org/learn/facebook-social-media-marketing-capstone/peer/xdfcq/creating-a-presentation"
        ];
        openAllLinks(links);
        break;
      case "SWE201c":
        var links = [
          //Moocs 1
          "https://www.coursera.org/learn/software-processes/exam/7cVLr/requirements-and-architecture",
          "https://www.coursera.org/learn/software-processes/exam/5OFKn/design-implementation-and-testing",
          "https://www.coursera.org/learn/software-processes/exam/9if2S/traditional-software-development-models",
          "https://www.coursera.org/learn/software-processes/peer/1Rkcm/project-scenario-1",
          "https://www.coursera.org/learn/software-processes/exam/1svrY/agile-lean-software-development",
          "https://www.coursera.org/learn/software-processes/peer/LGfLh/project-scenario-2",
          //Moocs 2

          "https://www.coursera.org/learn/agile-software-development/exam/s08Gu/agile-fundamentals",
          "https://www.coursera.org/learn/agile-software-development/exam/6DboS/requirements-and-planning",
          "https://www.coursera.org/learn/agile-software-development/exam/CzWon/scrum",
          "https://www.coursera.org/learn/agile-software-development/peer/YUTng/applying-the-agile-mindset-and-techniques",
          "https://www.coursera.org/learn/agile-software-development/exam/JU7C1/xp",
          "https://www.coursera.org/learn/agile-software-development/peer/ePve3/story-mapping",
          //Moocs 3
          "https://www.coursera.org/learn/lean-software-development/exam/pmc1p/lean-principles",
          "https://www.coursera.org/learn/lean-software-development/peer/QryIh/value-stream-map",
          "https://www.coursera.org/learn/lean-software-development/exam/dacrd/kanban-value-stream-mapping-and-kaizen",
          "https://www.coursera.org/learn/lean-software-development/exam/VQh61/lean-startup",
          "https://www.coursera.org/learn/lean-software-development/exam/pzDpO/design-thinking",
          "https://www.coursera.org/learn/lean-software-development/peer/9BOgw/applying-design-thinking",
          //Moocs 4
          "https://www.coursera.org/learn/engineering-practices-secure-software-quality/exam/ub70n/quality-in-design",
          "https://www.coursera.org/learn/engineering-practices-secure-software-quality/peer/r96Hl/assessing-quality-through-scenarios",
          "https://www.coursera.org/learn/engineering-practices-secure-software-quality/peer/Q8mOW/code-style",
          "https://www.coursera.org/learn/engineering-practices-secure-software-quality/peer/fKSZW/static-analysis",
          "https://www.coursera.org/learn/engineering-practices-secure-software-quality/peer/kBZRc/commenting",
          "https://www.coursera.org/learn/engineering-practices-secure-software-quality/exam/6vDJ3/quality-in-implementation",
          "https://www.coursera.org/learn/engineering-practices-secure-software-quality/exam/kniXE/quality-in-testing-and-deployment"
        ];
        openAllLinks(links);
        break;
      case "PRJ301cJFD":
        var links = [
          "https://www.coursera.org/learn/fundamentals-of-java-programming/exam/3ZdvN/java-fundamentals-graded-quiz",
          "https://www.coursera.org/learn/fundamentals-of-java-programming/exam/aZxDE/core-java-graded-quiz",
          "https://www.coursera.org/learn/fundamentals-of-java-programming/exam/hJbLF/oops-and-other-essential-concepts-graded-quiz",
          "https://www.coursera.org/learn/frontend-development-for-java-full-stack/exam/igDfj/html-css-graded-quiz",
          "https://www.coursera.org/learn/frontend-development-for-java-full-stack/exam/6HMCv/javascript-dom-graded-quiz",
          "https://www.coursera.org/learn/frontend-development-for-java-full-stack/exam/ukBiS/angular-graded-quiz",
          "https://www.coursera.org/learn/frontend-development-for-java-full-stack/peer/Tvtbx/final-assignment-build-a-responsive-web-application-using-angular",
          "https://www.coursera.org/learn/data-structures--backend-with-java/exam/6uz1h/data-structures-graded-quiz",
          "https://www.coursera.org/learn/data-structures--backend-with-java/exam/fPllm/spring-and-spring-boot-graded-quiz",
          "https://www.coursera.org/learn/data-structures--backend-with-java/peer/zseTr/final-assignment"
        ];
        openAllLinks(links);
        break;
      case "WDU203c":
        var links = [
          "https://www.coursera.org/learn/introtoux-principles-and-processes/exam/3UqZN/module-1",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/exam/X4OZv/ux-design-overview-part-1",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/peer/TOn8V/10-000-floor-elevator",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/peer/TOn8V/10-000-floor-elevator/give-feedback",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/exam/pK37I/module-3",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/exam/0IlQ5/module-4",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/exam/6IpKU/module-5",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/peer/oHo0T/heuristic-evaluation-part-1-generating-the-list-of-issues",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/peer/oHo0T/heuristic-evaluation-part-1-generating-the-list-of-issues/give-feedback",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/peer/dNCqC/heuristic-evaluation-part-2-writing-the-report",
          "https://www.coursera.org/learn/introtoux-principles-and-processes/peer/dNCqC/heuristic-evaluation-part-2-writing-the-report/give-feedback"
        ];
        openAllLinks(links);
        break;
      case "EBC301c":
        var links = [
          "https://www.coursera.org/learn/business-english-intro/peer/EA9Ue/a-conversation",
          "https://www.coursera.org/learn/business-english-intro/peer/VbyWx/persuade-me-to-move",
          "https://www.coursera.org/learn/business-english-intro/peer/TzntC/describe-your-job",
          "https://www.coursera.org/learn/business-english-intro/peer/LIM8F/promoting-your-company",
          "https://www.coursera.org/learn/business-english-intro/exam/9KY87/email-greetings",
          "https://www.coursera.org/learn/business-english-intro/exam/ZcpMW/building-the-right-email",
          "https://www.coursera.org/learn/business-english-intro/peer/TqR87/write-an-email-based-on-a-scenario",
          "https://www.coursera.org/learn/business-english-intro/peer/jwaMm/making-a-telephone-call",
          "https://www.coursera.org/learn/business-english-intro/peer/rDJn7/arrangements-to-meet",
          "https://www.coursera.org/learn/business-english-intro/peer/OOnmg/leaving-messages",
          "https://www.coursera.org/learn/business-english-intro/peer/D8JXC/writing-invitation-emails-part-1",
          "https://www.coursera.org/learn/business-english-intro/peer/8zqz3/writing-invitation-emails-part-2-updates",
          "https://www.coursera.org/learn/business-english-intro/peer/w5CZx/writing-a-follow-up-email",
          "https://www.coursera.org/learn/business-english-meetings/exam/zahvA/successful-meetings",
          "https://www.coursera.org/learn/business-english-meetings/exam/CJGat/setting-up-a-meeting-email",
          "https://www.coursera.org/learn/business-english-meetings/peer/o4QCX/writing-an-agenda",
          "https://www.coursera.org/learn/business-english-meetings/exam/qqw7A/responding-to-meeting-invitations",
          "https://www.coursera.org/learn/business-english-meetings/peer/OfsGX/writing-and-responding-to-a-meeting-announcement",
          "https://www.coursera.org/learn/business-english-meetings/exam/grn9x/teleconferencing",
          "https://www.coursera.org/learn/business-english-meetings/peer/qZBI6/plan-a-teleconference",
          "https://www.coursera.org/learn/business-english-meetings/exam/AsrIF/directing-peoples-attention",
          "https://www.coursera.org/learn/business-english-meetings/peer/fpDcy/reporting-on-data",
          "https://www.coursera.org/learn/business-english-meetings/exam/CxoVi/brainstorming-ideas",
          "https://www.coursera.org/learn/business-english-meetings/peer/WNa1K/add-the-missing-words",
          "https://www.coursera.org/learn/business-english-meetings/peer/XRzID/creating-a-proposal",
          "https://www.coursera.org/learn/business-english-negotiating/exam/V3gVl/guidelines-for-leaving-a-voicemail",
          "https://www.coursera.org/learn/business-english-negotiating/peer/Whbkm/record-and-review-voicemail-message",
          "https://www.coursera.org/learn/business-english-negotiating/exam/epwTT/language-of-comparison",
          "https://www.coursera.org/learn/business-english-negotiating/peer/oPaJj/email-on-choice-of-venues",
          "https://www.coursera.org/learn/business-english-negotiating/exam/JOiBZ/proposals-counter-offers-and-concessions",
          "https://www.coursera.org/learn/business-english-negotiating/peer/SfmOi/writing-emails-in-a-negotiation",
          "https://www.coursera.org/learn/business-english-negotiating/peer/hw9Hk/voicemail-describing-a-problem",
          "https://www.coursera.org/learn/business-english-negotiating/exam/3Ch63/dealing-with-problems",
          "https://www.coursera.org/learn/business-english-negotiating/exam/vZB4O/resolving-problems-a-conversation",
          "https://www.coursera.org/learn/business-english-negotiating/peer/7jpLf/recording-a-voicemail-following-up-on-a-problem",
          "https://www.coursera.org/learn/business-english-negotiating/exam/UlBvh/planning-events",
          "https://www.coursera.org/learn/business-english-negotiating/peer/4gZa5/to-do-list",
          "https://www.coursera.org/learn/business-english-negotiating/exam/EIB9O/lists-in-announcements",
          "https://www.coursera.org/learn/business-english-negotiating/peer/hkNHb/writing-a-conference-announcement",
          "https://www.coursera.org/learn/business-english-presentations/exam/pc6bz/guidelines-on-giving-a-presentation",
          "https://www.coursera.org/learn/business-english-presentations/exam/255P9/effective-introductions",
          "https://www.coursera.org/learn/business-english-presentations/exam/uZ3bS/introduction-transitions-and-conclusions",
          "https://www.coursera.org/learn/business-english-presentations/exam/kGzdy/describing-charts-and-graphs",
          "https://www.coursera.org/learn/business-english-presentations/exam/RVifh/giving-details-about-data",
          "https://www.coursera.org/learn/business-english-presentations/exam/pLw2n/trends-vocabulary",
          "https://www.coursera.org/learn/business-english-presentations/exam/MiUjU/marketing-expressions",
          "https://www.coursera.org/learn/business-english-presentations/peer/llYKu/writing-a-marketing-piece",
          "https://www.coursera.org/learn/business-english-presentations/peer/IZ0CA/final-presentation",
          "https://www.coursera.org/learn/business-english-capstone/peer/gNfDe/your-networking-introduction",
          "https://www.coursera.org/learn/business-english-capstone/peer/CEKkB/milestone-3-presentation-slides",
          "https://www.coursera.org/learn/business-english-capstone/peer/dhuoV/milestone-5-first-draft-of-your-mini-business-plan",
          "https://www.coursera.org/learn/business-english-capstone/peer/YzJdn/rough-presentation",
          "https://www.coursera.org/learn/business-english-capstone/peer/Ts9S8/milestone-7-final-mini-business-plan-and-presentation"
        ];
        openAllLinks(links);
        break;
      case "DMS301m":
        var links = [
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/I3HHN/case-discussion-apple-airtags",
          "https://www.coursera.org/learn/digital-marketing-revolution/exam/TiM0L/digital-dominance-quiz",
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/KJPwi/case-discussion-disposable-cameras",
          "https://www.coursera.org/learn/digital-marketing-revolution/exam/3qQsh/analog-resistance-quiz",
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/8Qrvv/case-discussion-amazon-go",
          "https://www.coursera.org/learn/digital-marketing-revolution/exam/HJwFs/digital-analog-synergy-quiz",
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/3e708/case-discussion-museum-of-ice-cream",
          "https://www.coursera.org/learn/digital-marketing-revolution/exam/IFFQJ/analog-transformation-quiz",
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/0AlRZ/exercise-online-review",
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/NGtia/exercise-write-and-send-physical-letter",
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/3Aro0/exercise-augmented-reality-app",
          "https://www.coursera.org/learn/digital-marketing-revolution/peer/bjeWF/exercise-digital-detox",
          "https://www.coursera.org/learn/marketing-digital/peer/GgpaB/case-study-peer-graded-assignment-threadless",
          "https://www.coursera.org/learn/marketing-digital/exam/9KYry/exercise-quiz-ideas-lego-com",
          "https://www.coursera.org/learn/marketing-digital/exam/hX2Qc/product-quiz",
          "https://www.coursera.org/learn/marketing-digital/peer/19GJb/case-study-peer-graded-assignment-gopro",
          "https://www.coursera.org/learn/marketing-digital/exam/BNoTq/exercise-quiz-wikipedia-org",
          "https://www.coursera.org/learn/marketing-digital/exam/K4ifd/promotion-quiz",
          "https://www.coursera.org/learn/marketing-digital/peer/a6gP1/case-study-peer-graded-assignment-tesla",
          "https://www.coursera.org/learn/marketing-digital/exam/6KCF5/exercise-quiz-thingiverse-com",
          "https://www.coursera.org/learn/marketing-digital/exam/pXIWi/placement-quiz",
          "https://www.coursera.org/learn/marketing-digital/peer/s9Foz/case-study-peer-graded-assignment-panera",
          "https://www.coursera.org/learn/marketing-digital/exam/6HACH/exercise-quiz-its-full-of-sparks",
          "https://www.coursera.org/learn/marketing-digital/exam/GCKNv/price-quiz",
          "https://www.coursera.org/learn/marketing-digital/peer/ytFDh/exercise-peer-graded-assignment-ideas-lego-com-honors-assignment",
          "https://www.coursera.org/learn/marketing-digital/peer/nP8IF/exercise-peer-graded-assignment-wikipedia-org-honors-assignment",
          "https://www.coursera.org/learn/marketing-digital/peer/jH3mT/exercise-peer-graded-assignment-thingiverse-honors-assignment",
          "https://www.coursera.org/learn/marketing-digital/peer/fVSS2/exercise-peer-graded-assignment-its-full-of-sparks-honors-assignment",

          "https://www.coursera.org/learn/marketing-analytics/exam/K01Br/module-1-quiz",
          "https://www.coursera.org/learn/marketing-analytics/exam/SM1cl/module-2-quiz",
          "https://www.coursera.org/learn/marketing-analytics/exam/Rjrox/module-3-quiz",
          "https://www.coursera.org/learn/marketing-analytics/exam/ogHhB/module-4-quiz",
          "https://www.coursera.org/learn/marketing-analytics/peer/2gpdI/module-4-peer-assessment",
          "https://www.coursera.org/learn/marketing-analytics/peer/x3Zd8/module-1-peer-assessment",
          "https://www.coursera.org/learn/marketing-analytics/peer/DjJu2/module-2-peer-assessment",
          "https://www.coursera.org/learn/marketing-analytics/peer/igKfd/module-3-peer-assessment",

          "https://www.coursera.org/learn/digital-analytics/exam/agIeh/module-1-quiz",
          "https://www.coursera.org/learn/digital-analytics/exam/h8DH7/module-2-quiz",
          "https://www.coursera.org/learn/digital-analytics/exam/0DEIx/module-3-quiz",
          "https://www.coursera.org/learn/digital-analytics/exam/B26vd/module-4-quiz",
          "https://www.coursera.org/learn/digital-analytics/peer/jHVHK/module-4-peer-assessment",
          "https://www.coursera.org/learn/digital-analytics/peer/0EVeN/module-1-peer-assessment",
          "https://www.coursera.org/learn/digital-analytics/peer/xWHmw/module-2-peer-assessment",
          "https://www.coursera.org/learn/digital-analytics/peer/9SRfY/module-3-peer-assessment",

          "https://www.coursera.org/learn/marketing-channels/exam/3geqo/module-1-quiz",
          "https://www.coursera.org/learn/marketing-channels/exam/fQ3l8/module-2-quiz",
          "https://www.coursera.org/learn/marketing-channels/exam/Tdv5E/module-3-quiz",
          "https://www.coursera.org/learn/marketing-channels/peer/RDDhM/module-4-peer-assessment",
          "https://www.coursera.org/learn/marketing-channels/exam/Kz0mW/module-4-quiz",

          "https://www.coursera.org/learn/marketing-plan/exam/4JgBq/module-1-quiz",
          "https://www.coursera.org/learn/marketing-plan/peer/xuSls/module-2-peer-assessment",
          "https://www.coursera.org/learn/marketing-plan/exam/sTQid/module-2-quiz",
          "https://www.coursera.org/learn/marketing-plan/exam/yCj5W/module-3-quiz",
          "https://www.coursera.org/learn/marketing-plan/exam/6HNHN/module-4-quiz",
          "https://www.coursera.org/learn/marketing-plan/peer/N6B5V/module-4-peer-assessment",

          "https://www.coursera.org/learn/digital-marketing-capstone/peer/gbfLE/peer-assessment-module-1-client-brand-analysis",
          "https://www.coursera.org/learn/digital-marketing-capstone/peer/31S4Q/peer-assessment-module-2-consumer-decision-journey",
          "https://www.coursera.org/learn/digital-marketing-capstone/peer/pMFdU/peer-assessment-module-3-collect-and-analyze-data",
          "https://www.coursera.org/learn/digital-marketing-capstone/peer/jMvoA/peer-assessment-module-4-channel-and-content-strategy",
          "https://www.coursera.org/learn/digital-marketing-capstone/peer/TFgrp/peer-assessment-module-5-test-and-control-plan",
          "https://www.coursera.org/learn/digital-marketing-capstone/peer/tAT6B/peer-assessment-module-6-final-digital-marketing-plan-submission"
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
