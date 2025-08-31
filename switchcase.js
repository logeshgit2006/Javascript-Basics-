let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// without break statement
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Red");
  case "banana":
    console.log("Yellow");
  case "grape":
    console.log("Purple");
  default:
    console.log("Unknown");
}
// Output will be:
// Red
// Yellow
// Purple
// Unknown

//with break statement
let fruit1 = "apple";

switch (fruit1) {
    case "apple":
        console.log("Red");
        break;
    case "banana":
        console.log("Yellow");
        break;
    case "grape":
        console.log("Purple");
        break;
    default:
        console.log("Unknown");
}

// Output will be:
// Red  

//Break in unexpected places
let day1 = "saturday";

switch (day1) {
  case "saturday":
    break;   // log illama break
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}

//what if if that break doesnt appaeared on that place?
let day2 = "saturday";

switch (day2) { 
    case "saturday":  
        console.log("Weekend");
        break;
    case "sunday":
        console.log("Weekend");
        break;  
    default:
        console.log("Weekday");
}