function checkreq(kaipan,span) {
    console.log(kaipan);
    console.log(kaipan.value);

     if (kaipan.value == '') {
        document.getElementById(span).innerText="This is filed req..!!"
     } else {
        document.getElementById(span).innerText=""
     }
}

