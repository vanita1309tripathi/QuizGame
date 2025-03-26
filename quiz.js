const questionJSON = 
    [{
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'Delhi',
      options: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
      question:
        "What is the capital of India?",
    },
    {
      correctAnswer: 'Jane Austen',
      options: ['Jane Austen', 'Charles Dickens', 'Franz Kafka', 'Chetan Bhagat'],
      question:
        "Who wrote Pride and Prejudice?",
    },
    {
      correctAnswer: 'Seven',
      options: ['Seven', 'Six', 'Four', 'Five'],
      question:
        "How many digits in 1 million?",
    }
  ]

    let score=0;
    let currentques=0;
    let totalQues=questionJSON.length;
    let scoreEl=document.getElementById("score");
    let ques=document.querySelector("#question");
    let opt=document.querySelector("#options");
    let nextEl=document.getElementById("next");


    // Displaying the Questions
    function displayQues(){
    // Destructuring
    let {correctAnswer,options,question}=questionJSON[currentques];
    console.log(correctAnswer);
    console.log(options);
    console.log(question);
    ques.style.display='block';
    ques.textContent=`${question}`;
    
    
    options=shuffle(options);
    console.log(options);
    for(let i=0;i<options.length;i++){
      let optBtn=document.createElement("button");
      optBtn.textContent=`${options[i]}`;
      opt.append(optBtn);
      
      optBtn.addEventListener('click',function(){
        console.log(this.textContent);
        if(this.textContent==correctAnswer)
          score=score+1;
        else{
          score=score-0.25;
        }
        console.log(score);
        scoreEl.textContent=`Score:${score}/${totalQues}`;
       
        ques.innerHTML='';
        ques.style.display='none';
        opt.textContent="";
     
      });
    }
  }



  nextEl.addEventListener('click',()=>{
    nextQuestion();
    scoreEl.textContent=`Score:${score}/${totalQues}`;
  });



// Next Question
function nextQuestion(){
      currentques++;
     if(currentques>=questionJSON.length)
     {
      nextEl.remove();
      ques.style.display='block';
      ques.textContent="Quiz Complete";
     
     }
     else
     {
    
      opt.textContent='';
      displayQues();
     }
      
    
    }


    // Shuffling Options
    function shuffle(options){
      for(let i=options.length-1;i>=0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [options[i],options[j]]=[options[j],options[i]];
        console.log(options[i]);
      }
    
      return options;
    }

    // Playing the game
   displayQues();

     