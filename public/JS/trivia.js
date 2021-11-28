var myQuestions = [
    {
      question: "In a website browser address bar, what does “www” stand for?",
      answers: {
        a: 'Western World Web',
        b: 'Wendy Webs Wonder',
        c: 'World Wide Web'
      },
      correctAnswer: 'c'
    },
    {
      question: "Which country consumes the most chocolate per capita?",
      answers: {
        a: 'United States of America',
        b: 'Switzerland',
        c: 'France'
      },
      correctAnswer: 'b'
    },
    {
        question: "What is the world’s biggest island?",
        answers: {
          a: 'Austrailia',
          b: 'Greenland',
          c: 'Hawaii'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the smallest ocean in the world?",
        answers: {
          a: 'The Pacific',
          b: 'The Atlantic',
          c: 'The Artic'
        },
        correctAnswer: 'c'
    },
    {
        question: "How many eyes does a bee have?",
        answers: {
          a: '3',
          b: '6',
          c: '5'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the only state that borders just one other state?",
        answers: {
          a: 'Michigan',
          b: 'Maine',
          c: 'New York'
        },
        correctAnswer: 'b'
    }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' Correct!';
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }