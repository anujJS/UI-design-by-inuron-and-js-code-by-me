const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");



faqData.map((item) => {

  // create element in main div
  const faq = document.createElement("main"),
    faqHeader = document.createElement("div"),
    showBtn = document.createElement("div"),
    h3 = document.createElement("h3"),
    p = document.createElement("p")

  // add textcontext
  h3.textContent = item.question
  p.textContent = item.answer


  // Add class in tag

  faq.classList.add("faq")
  faqHeader.classList.add("faq_header")
  showBtn.classList.add("show_btn")
  p.classList.add("hidden")

  // Appand all tag in accordian body

  accordianBody.appendChild(faq)
  faq.appendChild(faqHeader)
  faqHeader.appendChild(h3)
  faq.appendChild(p)
  faqHeader.appendChild(showBtn)

  let isOpen = true;
  showBtn.addEventListener("click", () => {
    if (isOpen) {
      p.style.display = "block";
      isOpen = false;
    } else {
      p.style.display = "none";
      isOpen = true;
    }
  })

})