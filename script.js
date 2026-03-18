function answer(qNum, type) {
  const box = document.getElementById("result" + qNum);

  if (qNum === 1) {
    if (type === "good") {
      box.innerHTML = "<strong>Correct ✅</strong><br>Reporting bullying and supporting the person helps keep online spaces safer and kinder.";
    } else if (type === "bad") {
      box.innerHTML = "<strong>Not good ❌</strong><br>Liking mean comments supports bullying and can hurt people.";
    } else {
      box.innerHTML = "<strong>Okay but not best 🤔</strong><br>Ignoring can allow bullying to continue. Reporting + supporting is better.";
    }
  }

  if (qNum === 2) {
    if (type === "good") {
      box.innerHTML = "<strong>Correct ✅</strong><br>Checking reliable sources helps stop misinformation and rumors from spreading.";
    } else if (type === "bad") {
      box.innerHTML = "<strong>Not good ❌</strong><br>Reposting fast can spread false info and harm people.";
    } else {
      box.innerHTML = "<strong>Not bad 🤔</strong><br>Asking a friend helps, but the best is checking a reliable source.";
    }
  }

  if (qNum === 3) {
    if (type === "good") {
      box.innerHTML = "<strong>Correct ✅</strong><br>Sharing a hobby without personal details is safe and doesn’t risk privacy.";
    } else if (type === "bad") {
      box.innerHTML = "<strong>Very unsafe ❌</strong><br>Never share your address or phone number publicly.";
    } else {
      box.innerHTML = "<strong>Risky 🤔</strong><br>Sharing your schedule can put you at risk. Avoid posting it publicly.";
    }
  }
}
