//A selection of quotes are assigned to arrays as strings.

var arr =[];

var allen = ["The talent for being happy is appreciating and liking what you have, instead of what you don't have.",
			"I don't want to achieve immortality through my work. I want to achieve it through not dying.",
			"I am not afraid of death, I just don't want to be there when it happens.",
			"I had a terrible education. I attended a school for emotionally disturbed teachers.",
			"I believe there is something out there watching us. Unfortunately, it's the government."]
			
var fields = ["The clever cat eats cheese and breathes down rat holes with baited breath.",
              "Always carry a flagon of whiskey in case of snakebite and furthermore always carry a small snake.",
              "I cook with wine, sometimes I even add it to the food.",
              "Never try to impress a woman, because if you do she'll expect you to keep up the standard for the rest of your life.",
              "Reminds me of my safari in Africa. Somebody forgot the corkscrew and for several days we had to live on nothing but food and water.",
              "Start every day off with a smile and get it over with.",
              "If you can't dazzle them with brilliance, baffle them with bull."]	

var marx = ["Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.",
            "A child of five would understand this. Send someone to fetch a child of five.",
            "No man goes before his time - unless the boss leaves early.",
            "She got her looks from her father. He's a plastic surgeon.",
            "I worked my way up from nothing to a state of extreme poverty.",
            "Next time I see you, remind me not to talk to you."]




//Select an author from radio buttons by looping and finding the checked button.

function generate() {
    var authors = document.forms[0];
    var author = "";
    var i;
    for (i = 0; i < authors.length; i++) {
        if (authors[i].checked) {
            author = authors[i].value;
        } 
    }
    
	//Decide which quote array to use and show a picture of the author.
    
    
    if (author == "Woody Allen") {
        arr = allen;
		document.getElementById("picbox").innerHTML = "<img src='http://i88.photobucket.com/albums/k199/flanners_bucket/Codepen/woody.jpg'>";
    }
    else if (author == "W. C. Fields"){
        arr = fields;
		document.getElementById("picbox").innerHTML = "<img src='http://i88.photobucket.com/albums/k199/flanners_bucket/Codepen/wc_fields.jpg'>";
    } 
    
    else if (author == "Groucho Marx") {
        arr = marx;
		document.getElementById("picbox").innerHTML = "<img src='http://i88.photobucket.com/albums/k199/flanners_bucket/Codepen/groucho_marx.jpg'>";
    }
	
   //Generate random numbers between 0 and the number of quotes. The random number will become the array index number. 
   //This array item will be added to the quote_box
		
    var x = Math.floor((Math.random() * arr.length));
    document.getElementById("quote_box").innerHTML = arr[x] +  " --- " +  author;
    
    //quote box styling. Info found at http://www.kirupa.com/html5/setting_css_styles_using_javascript.htm
    
    var quoteStyle = document.querySelector("#quote_box");
    quoteStyle.classList.add("quote");
    
 }

//The contents of the quote_box are combined with a twitter url and appear in a new window ready to tweet.

function tweeter() {
    var url = 'https://twitter.com/share?text=';
    var quote = document.getElementById("quote_box").innerHTML;
    window.open(url + quote);
}

