document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const currentValue = document.getElementById("current-value");
  const result1Tag = document.getElementById("result");
  const result30Tag = document.getElementById("result30");
  const result180Tag = document.getElementById("result180");

  if (slider) {
    function updateCalculator() {
      const value = parseInt(slider.value, 10);

      currentValue.textContent = "€" + value;

      const day1 = value * 3;
      const day30 = value * 35;
      const day180 = value * 120;

      result1Tag.textContent = "€" + day1.toLocaleString("de-DE");
      result30Tag.textContent = "€" + day30.toLocaleString("de-DE");
      result180Tag.textContent = "€" + day180.toLocaleString("de-DE");
    }

    slider.addEventListener("input", updateCalculator);
    updateCalculator();
  }
});
