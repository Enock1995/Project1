
/* JS FOR NAV BAR FUNCTIONALITY */

 // Elements
        const toggleBtn = document.getElementById('toggle-btn');
        const sidebar = document.getElementById('sidebar');
        const closeBtn = document.querySelector('#sidebar .close-btn');

        // Open sidebar
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
        });

        // Close sidebar
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
        
        
        
        
        
  /* JS FOR NEXT IMAGE */   
  const events = [
  {
    image: 'Images/Chomunanga/14_Sept.jpg',
    date: '2024-09-14'
  },
  
  {
    image: 'Images/Chomunanga/28_Sept.jpg',
    date: '2024-09-28'
  },
  
    {
    image: 'Images/header.jpg',
    date: '2024-12-31'
  },
  
  // Add more events here...
];


function getNextEvent() {
  const today = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) > today);
  return upcomingEvents[0]; 
}

function updateNextEvent() {
  const nextEvent = getNextEvent();
  const invitationCardImage = document.createElement('img');
  invitationCardImage.src = nextEvent.image;
  document.getElementById('invitation-card').appendChild(invitationCardImage);
}

window.addEventListener('load', updateNextEvent);



   
        
  /* JS FOR WEDDING DATES UPDATE*/      
       
      var date = new Date();
      
     
     var sept_14 = new Date(2024, 08, 15);
     var sept_28 = new Date(2024, 08, 29);
     
     
     if(date.getTime() < sept_14.getTime()){
 document.getElementById('dates').innerHTML =   "13 & 14 September 2024";
     
     }
     else if(date.getTime() < sept_28.getTime()){
     
     document.getElementById('dates').innerHTML = "28 September 2024";

     }
     else
     {
     
     document.getElementById('dates').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   

 /* JS FOR WEDDING NAMES UPDATE*/      
       
      var date = new Date();
      
     
     var sept_14 = new Date(2024, 08, 15);
     var sept_28 = new Date(2024, 08, 29);
     
     
     if(date.getTime() < sept_14.getTime()){
 document.getElementById('names').innerHTML =   "Mike Matare & Vimbai Gono";
     
     }
     else if(date.getTime() < sept_28.getTime()){
     
     document.getElementById('names').innerHTML = "Keyas Gumbo & Caroline Hungwe";

     }
     else
     {
     
     document.getElementById('names').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   
   
   /* JS FOR WEDDING NAMES UPDATE ON NESTED ELEMENTS*/      
       
    var date = new Date();
      
     
     var sept_14 = new Date(2024, 08, 14);
     var sept_28 = new Date(2024, 08, 28);
     
     
     if(date.getTime() < sept_14.getTime()){
 document.getElementById('nestnames').innerHTML = "Mike Matare & Vimbai Gono";
     
     }
     else if(date.getTime() < sept_28.getTime()){
     
     document.getElementById('nestnames').innerHTML = "Keyas & Caroline";

     }
     else
     {
     
     document.getElementById('nestnames').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
     
      
     
     /* JS FOR WEDDING DATES UPDATE*/      
       
      var date = new Date();
      
     
     var sept_14 = new Date(2024, 08, 14);
     var sept_28 = new Date(2024, 08, 28);
     
     
     if(date.getTime() < sept_14.getTime()){
 document.getElementById('nestdates').innerHTML =   "13 & 14 September 2024";
     
     }
     else if(date.getTime() < sept_28.getTime()){
     
     document.getElementById('nestdates').innerHTML = "28 September 2024";

     }
     else
     {
     
     document.getElementById('nestdates').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   
   
     
     
     
     
     /* JS FOR WEDDING VENUE1 UPDATE*/      
       
      var date = new Date();
      
     
     var sept_14 = new Date(2024, 08, 14);
     var sept_28 = new Date(2024, 08, 28);
     
     
     if(date.getTime() < sept_14.getTime()){
 document.getElementById('nestvenue1').innerHTML =   "Gono Homestead, Mazare, Sanangwe Primary School, Masvingo.";
     
     }
     else if(date.getTime() < sept_28.getTime()){
     
     document.getElementById('nestvenue1').innerHTML = "Gumbo Homestead, Runde Primary School";

     }
     else
     {
     
     document.getElementById('nestvenue1').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   
   
     
    /* JS FOR WEDDING VENUE2 UPDATE*/      
       
      var date = new Date();
      
     
     var sept_14 = new Date(2024, 08, 14);
     var sept_28 = new Date(2024, 08, 28);
     
     
     if(date.getTime() < sept_14.getTime()){
 document.getElementById('nestvenue2').innerHTML =   "Matare Homestead, Vhudzi Township, Chirumanzu";
     
     }
     else if(date.getTime() < sept_28.getTime()){
     
     document.getElementById('nestvenue2').innerHTML = "Only One Reception.";

     }
     else
     {
     
     document.getElementById('nestvenue1').innerHTML = "It's over for this year. Thank you for your support.";
      
     }
     
   
   
   
