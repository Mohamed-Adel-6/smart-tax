let grossIncome = document.getElementById("grossIncome");
let percentage = document.getElementById("percentage");
let calc = document.getElementById("calc");
let income = document.getElementById("income");
let netIncome = document.getElementById("netIncome");
let tax3 = document.getElementById("tax3");
let year = document.getElementById("year");
let exp = document.getElementById("exp");
let paul = document.getElementById("paul");
let tax91 = document.getElementById("tax91");
let resolution = document.getElementById("resolution");

for (let i = 2005; i <= 2024; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  year.appendChild(option);
}
//exemption
let exemption = [
  {
    year: 2005,
    value: 5000,
  },
  {
    year: 2006,
    value: 5000,
  },
  {
    year: 2007,
    value: 5000,
  },
  {
    year: 2008,
    value: 5000,
  },
  {
    year: 2009,
    value: 5000,
  },
  {
    year: 2010,
    value: 5000,
  },
  {
    year: 2011,
    value: 5000,
  },
  {
    year: 2012,
    value: 5000,
  },
  {
    year: 2013,
    value: 5000,
  },
  {
    year: 2014,
    value: 5000,
  },
  {
    year: 2015,
    value: 6500,
  },
  {
    year: 2016,
    value: 5000,
  },
  {
    year: 2017,
    value: 7200,
  },
  {
    year: 2018,
    value: 8000,
  },
  {
    year: 2019,
    value: 8000,
  },
  {
    year: 2020,
    value: 15000,
  },
  {
    year: 2021,
    value: 15000,
  },
  {
    year: 2022,
    value: 15000,
  },
  {
    year: 2023,
    value: 30000,
  },
  {
    year: 2024,
    value: 40000,
  },
];

// function
function sup3(a) {
  if (a == 0) {
    tax3.innerHTML = "يجب ادخال رقم الاعمال";
  } else if (a < 250000 && a > 0) {
    tax3.innerHTML = 1000;
  } else if (a > 250000 && a <= 500000) {
    tax3.innerHTML = 2500;
  } else if (a > 500000 && a <= 1000000) {
    tax3.innerHTML = 5000;
  } else if (a > 1000000 && a <= 2000000) {
    let d = a * (0.5 / 100);
    tax3.innerHTML = Math.ceil(d);
  } else if (a > 2000000 && a <= 3000000) {
    let d = a * (0.75 / 100);
    tax3.innerHTML = Math.ceil(d);
  } else if (a > 3000000 && a <= 10000000) {
    let d = a * (1 / 100);
    tax3.innerHTML = Math.ceil(d);
  } else {
    tax3.innerHTML = "حجم اعمالك اكبر من 10 مليون لذا لن تخضع الي ماده 3";
  }
}

function law91(c) {
  let y = year.value;
  let newValue;
  for (let i = 0; i < exemption.length; i++) {
    if (y == exemption[i].year && c > 0) {
      exp.innerHTML = exemption[i].value;
      let t = c - exemption[i].value;

      if (t > 0) {
        paul.innerHTML = t;
      } else {
        paul.innerHTML = "0";
      }

      if (y >= 2005 && y <= 2010) {
        if (t > 0) {
          if (t > 15000) {
            newValue = 15000 * (10 / 100);
            tax91.innerHTML = newValue;
            t = t - 15000;
            if (t > 20000) {
              newValue = newValue + 20000 * (15 / 100);
              tax91.innerHTML = newValue;
              t = t - 20000;
              if (t > 0) {
                newValue = newValue + (t * 20) / 100;
                tax91.innerHTML = newValue;
              } else {
                tax91.innerHTML = newValue;
              }
            } else {
              console.log(newValue);
              console.log(t);
              tax91.innerHTML = newValue + t * (15 / 100);
              console.log("else");
            }
          } else {
            console.log("hallo");
            tax91.innerHTML = t * (10 / 100);
          }
        } else {
          tax91.innerHTML = "لا توجد ضريبه";
        }
      }
    }
  }
}

// main event
calc.addEventListener("click", async function () {
  let a = grossIncome.value;
  let b = percentage.value / 100;
  let c = a * b;
  income.innerHTML = Math.ceil(a);
  netIncome.innerHTML = Math.ceil(c);
  // function
  sup3(a);
  law91(c);
  let value91 = Number(tax91.innerHTML);
  let value3 = Number(tax3.innerHTML);
  if (isNaN(value91)) {
    resolution.innerHTML = "القرار الأفضل: قانون 91 (لا توجد ضريبة)";
  } else if (isNaN(value3)) {
    resolution.innerHTML =
      " القرار الافضل: قانون 91 لان حجم اعمالك اكبر من 10 مليون لا يمكنك الاستفاده من ماده 3";
  } else if (value3 < value91) {
    resolution.innerHTML = " القرار الافضل: ماده 3 لان الضريبه اقل";
  } else {
    resolution.innerHTML = " القرار الافضل: قانون 91 لان الضريبه اقل";
  }
});
