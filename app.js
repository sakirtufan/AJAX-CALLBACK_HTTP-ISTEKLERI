class Request{

   constructor(){

      this.xhr = new XMLHttpRequest();
   }

   get(url,callback){
      this.xhr.open('GET',url,true);

      this.xhr.onload = () => {         

         if(this.xhr.status === 200){
            callback(null,this.xhr.responseText);
         }
         else{
            callback('Get request: Hata olustu',null);
         }
      }

      this.xhr.send();
   }

   post(url,data,callback){
      this.xhr.open('POST',url);

      this.xhr.setRequestHeader("Content-type","application/json");

      this.xhr.onload = () =>{
         if(this.xhr.status === 201){
            //basarili
            callback(null,this.xhr.responseText);
         }
         else{
            callback('Post request: Hata olustu',null);
         }
      }

      this.xhr.send(JSON.stringify(data));
   }


   put(url,data,callback){
      this.xhr.open('PUT',url);

      this.xhr.setRequestHeader("Content-type","application/json");

      this.xhr.onload = () =>{
         if(this.xhr.status === 200){
            //basarili
            callback(null,this.xhr.responseText);
         }
         else{
            callback('Put request: Hata olustu',null);
         }
      }

      this.xhr.send(JSON.stringify(data));
   }

   delete(url,callback){
      this.xhr.open('DELETE',url,true);

      this.xhr.onload = () => {         

         if(this.xhr.status === 200){
            callback(null,'veri silme islemi basarili');
         }
         else{
            callback('Delete request: Hata olustu',null);
         }
      }

      this.xhr.send();
   }
}

const request = new Request();


request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){

   if(err === null){
      console.log(response);
   }
   else{
      console.log(err);
   }
});


request.post('https://jsonplaceholder.typicode.com/albums',{userId:2,title:'sakir'},function(err,album){

   if(err === null){
      console.log(album);
   }
   else{
      console.log(err);
   }
});


request.put('https://jsonplaceholder.typicode.com/albums/10',{userId:143,title:'fatma'},function(err,album){

   if(err === null){
      console.log(album);
   }
   else{
      console.log(err);
   }
});

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){

   if(err === null){
      console.log(response);
   }
   else{
      console.log(err);
   }
});

