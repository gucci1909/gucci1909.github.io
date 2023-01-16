$(document).ready(function () {
  $(window).scroll(function () {
    // if (this.scrollY > 1920) {
      // $(".navbar").addClass("remove");
    // }
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(`.navbar`).removeClass("sticky");
      $(".navbar").removeClass("remove");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(`.scroll-up-btn`).click(function () {
    $(`html`).animate({ scrollTop: 0 });
  });
  $(".menu-btn").click(function () {
    $(`.navbar .menu`).toggleClass("active");
    $(`.menu-btn i`).toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Full Stack Developer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //  var carousels = function () {
  //     $(".owl-carousel1").owlCarousel({
  //       loop: true,
  //       center: true,
  //       margin: 0,
  //       responsiveClass: true,
  //       nav: false,
  //       responsive: {
  //         0: {
  //           items: 1,
  //           nav: false
  //         },
  //         680: {
  //           items: 2,
  //           nav: false,
  //           loop: false
  //         },
  //         1000: {
  //           items: 3,
  //           nav: true
  //         }
  //       }
  //     });
  //     $(".owl-nav").owlCarousel({
  //       loop: true,
  //       center: true,
  //       margin: 0,
  //       fontSize: "300px",
  //       responsiveClass: true,
  //       nav: false,
  //       responsive: {
  //         0: {
  //           items: 1,
  //           nav: false
  //         },
  //         680: {
  //           items: 2,
  //           nav: false,
  //           loop: false
  //         },
  //       }
  //     });
  //   };

  //   (function ($) {
  //     carousels();
  //   })(jQuery);
});





// function runProgram(input){
    
//   input=input.trim().split("\n");
//   let n = Number(input[0]);
//   let arr = input[1].trim().split(" ").map(Number);
  
 
//   MergeSorting(n,arr);
  
// }

// function MergeSorting(n,arr){
  
//   let bag=[];
//   for(let i=0;i<n;i++)
//   {
//       bag.push(i)
//   }
  
//  for(let i=0;i<n;i++)
//  {
//     for(let j=0;j<n-i-1;j++)
//    {
//       if(arr[j]>arr[j+1])
//       {
//           [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//           [bag[j],bag[j+1]]=[bag[j+1],bag[j]]  ;
     
//       }
//    }
//  }

//  console.log(bag.join(" "))
// }





// if (process.env.USER === "") {
// runProgram(``);
// } else {
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });
// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
//   });
// }