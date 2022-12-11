function onSubmit(e) {
  e.preventDefault();
  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";
  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please add some text");
    return;
  }
  generateImageReq(prompt, size);
}
async function generateImageReq(prompt, size) {
  try {
    showspin();
    const response = await fetch("/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });
    if (!response.ok) {
      removespin();
      throw new Error("The image cant nbe generated");
    }
    const data = await response.json();
    console.log(data);
    const imageurl = data.data;
    document.querySelector("#image").src = imageurl;
    removespin();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

function showspin() {
  document.querySelector(".spinner").classList.add("show");
}

function removespin() {
  document.querySelector(".spinner").classList.remove("show");
}
window.onload = function () {
  document.querySelector("#image-form").addEventListener("submit", onSubmit);
};
