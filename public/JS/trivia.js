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
      //store the output and the answer choices
      var output = [];
      var answers;
  
      
      for(var i=0; i<questions.length; i++){
        
        //list of answers
        answers = [];
  
        
        for(letter in questions[i].answers){
  
          
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add the question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // Combine the output list into one string and place it on the html page
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
      
      
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // Change the color of the answers to green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show the number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' Correct!';
    }
  
    // show questions
    showQuestions(questions, quizContainer);
    
    // when user hits submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }