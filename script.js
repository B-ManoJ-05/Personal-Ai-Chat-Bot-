 // Speech recognition setup
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "en-US";
const btn = document.querySelector("#listen-btn");

// Attach click event listener to the button
btn.addEventListener("click", function () {
  // Function to convert text to speech
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  // Function to handle recognized commands
  function handleCommand(command) {
    if (command.includes("open youtube") || command.includes("youtube") || command.includes("youtube channel") || command.includes("my youtube channel") || command.includes("can you open my youtube channel") || command.includes("can you open my youtube")) {
      speak("Opening YouTube Manoj...");
      window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open google") || command.includes("google") || command.includes("google search") || command.includes("search google") || command.includes("can you open google") || command.includes("can you search google")) {
      speak("Opening Google...");
      window.open("https://www.google.com", "_blank");
    } else if (command.includes("open facebook") || command.includes("facebook") || command.includes("facebook profile") || command.includes("my facebook profile") || command.includes("can you open my facebook profile") || command.includes("can you open my facebook")) {
      speak("Opening Facebook Manoj...");
      window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open my instagram profile") || command.includes("instagram") || command.includes("instagram profile") || command.includes("my instagram profile") || command.includes("can you open my instagram profile") || command.includes("can you open my instagram")) {
      speak("Opening Instagram...");
      window.open("https://www.instagram.com", "_blank");
    } else if (command.includes("open whatsapp") || command.includes("whatsapp") || command.includes("whatsapp profile") || command.includes("my whatsapp profile") || command.includes("can you open my whatsapp profile") || command.includes("can you open my whatsapp")) {
      speak("Opening WhatsApp Manoj...");
      window.open("https://www.whatsapp.com", "_blank");
    } else if (command.includes("open my pdf link") || command.includes("pdf link") || command.includes("pdfs link") || command.includes("my pdfs link") || command.includes("can you open my pdf link") || command.includes("can you open my pdfs link")) {
      speak("ok manoj opening pdfs link...");
      window.open("https://b-manoj-05.github.io/pdfweb-3-1and3-2-pdfs-R20-/","_blank")
    } else if (command.includes("open my kn profile")|| command.includes("kodnest") || command.includes("kodnest profile") || command.includes("my kodnest profile") || command.includes("can you open my kodnest profile") || command.includes("can you open my kodnest") || command.includes("kn profile") || command.includes("can you open my kn profile")) {
      speak("opening kodnest profile...");
      window.open("https://app.kodnest.com/my-learning/profile","_blank");
    } else if (command.includes("open my linkedin profile") || (command.includes("linkedin")|| command.includes("linkedin profile") || command.includes("my linkedin profile") || command.includes("can you open my linkedin profile") || command.includes("can you open my linkedin"))) {
      speak("ok manoj opening linkedin profile...");
      window.open("https://www.linkedin.com/in/boya-manoj-a6050a311","_blank");
    } else if (command.includes("what is your name") || command.includes("your name") || command.includes("name") || command.includes("what is your name?") || command.includes("can you tell me your name") || command.includes("can you tell me your name?")) {
      speak("Hey Manoj my name is Bobby iam your personal ai...");
    } else if (command.includes("tell me my date of birth") || command.includes("my date of birth") || command.includes("my dob") || command.includes("tell me my dob") || command.includes("can you tell me my date of birth") || command.includes("can you tell me my dob")) {
      speak("ok manoj your date of is 22  10 2003...");
    } else if (command.includes("tell my number") || command.includes("my number") || command.includes("my phone number") || command.includes("tell me my phone number") || command.includes("can you tell me my number") || command.includes("can you tell me my phone number")) {
      speak("ok manoj your number is nine three four seven five six one one three two...");
    } else if (command.includes("open my portfolio") || command.includes("portfolio") || command.includes("portfolio website") || command.includes("portfolio link") || command.includes("can you open my portfolio") || command.includes("can you open my portfolio website")) {
      speak("opening portfolio...");
      window.open("https://b-manoj-05.github.io/Portfolio-Website/","_blank");
    } else if (command.includes("open my github profile") || command.includes("github")) {
      speak("opeing github profile...");
      window.open("https://github.com/B-ManoJ-05","_blank");
    } else if (command.includes("you know my faviourite song") || command.includes("play my faviourite song") || command.includes("faviourite song")) {
      speak("yaa manoj i know...");
    } else if (command.includes("3 movie") || command.includes("three movie") || command.includes("my song") || command.includes("my faviourite song") || command.includes("faviourite song") || command.includes("song") || command.includes("can you play my faviourite song") || command.includes("play my faviourite song")) {
      speak("opeing your faviourite song Manoj...");
      window.open("https://youtu.be/NL4Ue1Z3MuQ","_blank");
    } else if (command.includes("open my resume") || command.includes("resume") || command.includes("cv") || command.includes("cv link") || command.includes("resume link")|| command.includes("can you open my resume") || command.includes("can you open my cv")) {
      speak("Opening your resume Manoj...");
      window.open("https://b-manoj-05.github.io/Portfolio-Website/Boya%20Manoj%20Resume.pdf","_blank");
    }  else if (command.includes("open my profile") || command.includes("my photo") || command.includes("passport size photo") || command.includes("profile photo") || command.includes("can you open my profile photo") || command.includes("can you open my passport size photo")) {
      speak("Opening your photo Manoj...");
      window.open(" https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png","_blank");
    } else  {
      // Perform a Google search if command not recognized
      speak("Searching Google for " + command);
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(command)}`,
        "_blank"
      );
    }
  }

  // Greet the user and then start listening
  speak("Hello, how can I help you Manoj?");

  // Delay to ensure greeting completes before starting recognition
  setTimeout(() => {
    btn.innerHTML = "Listening...👂";
    btn.classList.add("listening");
    recognition.start();
  }, 2500);

  // When a result is received
  recognition.onresult = (event) => {
    console.log(event);
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommand(command);
  };

  // When recognition ends
  recognition.onend = () => {
    btn.innerHTML = "Start Listening";
    btn.classList.remove("listening");
  };
});