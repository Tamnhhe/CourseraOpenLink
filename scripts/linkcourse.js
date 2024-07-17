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
      case "PRJ301c":
        openLinksButton.disabled = false;
        break;
      case "HRM201c":
        openLinksButton.disabled = false;
        break;
      case "SSL101c":
        openLinksButton.disabled = false;
        break;
      case "MKT208c":
        openLinksButton.disabled = false;
        break;
      case "ITE303c":
        openLinksButton.disabled = false;
        break;
      case "WDU202c":
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
          "https://www.coursera.org/learn/ethical-data-driven-technology-leader/peer/Vbox1/corporate-code-of-ethics-proposal",
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
          "https://www.coursera.org/learn/web-design-project/peer/6PtQr/option-3-design-sketch-demo-for-a-site-coded-using-a-framework",
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

          "https://desktop.github.com/",
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
          "https://www.coursera.org/learn/social-marketing-capstone/peer/tbzCQ/your-social-marketing-program",
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
          "https://www.coursera.org/learn/academic-skills-project/peer/Vdjs9/video-proposal-final-submission",
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
          "https://www.coursera.org/learn/it-infrastructure-and-emerging-trends/peer/hcRkG/course-project",
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
          "https://www.coursera.org/learn/human-resources-management-capstone/peer/UA2l3/hrm-capstone-project",
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
          "https://www.coursera.org/learn/ai-ethics-analysis/exam/2plSH/analysis",
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
          "https://www.coursera.org/learn/java-database-connectivity-jakarta-persistence/exam/l6sKX/module-3-exam",
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
    }
  }

  function openAllLinks(links) {
    links.forEach(function (link) {
      window.open(link, "_blank");
    });
  }
});
