const questions = document.querySelectorAll('.single-question');

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    const actualquestion = e.currentTarget;
    questions.forEach((item) => {
      if (item !== actualquestion) {
        item.classList.remove('active');
      }
    });
    actualquestion.classList.toggle('active');
  });
});
