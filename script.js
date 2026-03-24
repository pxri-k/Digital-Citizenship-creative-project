function answer(questionNumber, type) {
  let result = document.getElementById("result" + questionNumber);

  if (questionNumber === 1) {
    if (type === "good") {
      result.innerHTML = "✅ Correct! Good digital citizenship means making safe and respectful choices online.";
    } 
    else if (type === "bad") {
      result.innerHTML = "❌ Not quite. That choice could be harmful or unsafe online.";
    } 
    else {
      result.innerHTML = "⚠️ Close, but not the best choice. There is a better response.";
    }
  }

  else if (questionNumber === 2) {
    if (type === "good") {
      result.innerHTML = "✅ Correct! Always check if information is reliable before sharing.";
    } 
    else if (type === "bad") {
      result.innerHTML = "❌ Not quite. Spreading unverified information can be harmful.";
    } 
    else {
      result.innerHTML = "⚠️ Close, but it's better to verify with trusted sources.";
    }
  }

  else if (questionNumber === 3) {
    if (type === "good") {
      result.innerHTML = "✅ Correct! Sharing general interests is much safer than personal details.";
    } 
    else if (type === "bad") {
      result.innerHTML = "❌ Not safe. Personal information should not be shared publicly.";
    } 
    else {
      result.innerHTML = "⚠️ Still risky. Avoid sharing information that reveals your routine.";
    }
  }


  else if (questionNumber === 4) {
    if (type === "good") {
      result.innerHTML = "✅ Correct! Strong passwords and privacy settings help protect your information.";
    } 
    else if (type === "bad") {
      result.innerHTML = "❌ Not safe. Posting personal info publicly can put you at risk.";
    } 
    else {
      result.innerHTML = "⚠️ Not the best idea. Using the same password everywhere is risky.";
    }
  }


  else if (questionNumber === 5) {
    if (type === "good") {
      result.innerHTML = "✅ Correct! Supporting others and reporting harmful behavior is the right choice.";
    } 
    else if (type === "bad") {
      result.innerHTML = "❌ Not okay. Joining in makes the situation worse.";
    } 
    else {
      result.innerHTML = "⚠️ Ignoring it doesn’t help. It’s better to take action and support the person.";
    }
  }
}

