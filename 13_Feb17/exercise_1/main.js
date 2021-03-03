window.addEventListener('DOMContentLoaded', (event) => { //This allows to run the code once DOMcontentIsLoaded, so it would run even if the code is called from the header section of the HTML.
    console.log('DOM fully loaded and parsed');

    (function(){ //Anonymous function to self execute the code but keep it contained.

        let personId;
        let personName;
        let personAge;
        let personRole;
        let users;

        
        
        
        //Provided array with 5 objects containing 5 test users.
        const getUsers = () => [
            {
                studentNo: 123,
                name: 'harry',
                age: 15,
                role: '',
            },
            {
                studentNo: 234,
                name: 'Ron',
                age: 16,
                role: '',
            },
            {
                studentNo: 135,
                name: 'Hermione',
                age: 17,
                role: '',
            },
            {
                studentNo: -1,
                name: 'Snape',
                age: 55,
                role: '',
            },
            {
                studentNo: -1,
                name: 'Hagrid',
                age: 65,
                role: '',
            }
        ];
        
        console.log(getUsers);
        
            
        
        
        //variable for being able to access to the objects in the getUsers function
        users = getUsers();
        
        console.log(`this is the variable "users" containing the values of the getUsers function: ${users}. And this is when call "getUsers": ${getUsers}`);
        
        /**
        * This funtion defines if the entry belongs to a student (if Id is higher than zero) or a staff member (if Id is negative)
        */
        function isStaff(){
            users.forEach(user => {
             if (user.studentNo > 0) {
                 user.role = "Student";
             } else {
                 user.role = "Staff";
             }
            })
        }

        isStaff();

          /**
           * This function assigns the getUser object property values to the variables that contain the person's data and then it calls the executeScript function, so it can to include each user's data into the right cell. 
           */
          function addUser() {
              users.forEach(user => {
                  console.log(user);
                  console.log(typeof(user));
                  personId = user.studentNo;
                  personName = user.name;
                  personAge = user.age;
                  personRole = user.role;
                  console.log(`The ID of the person is ${personId}`);
                  console.log(`The name of the person is ${personName}`);
                  console.log(`The age of the person is ${personAge}`);
                  console.log(`The role of the person is ${personRole}`);

                  executeScript();
              })



          }

        /**
         * This function inserts the required number of rows and cells into the HTML table.
         */
        function executeScript(){
            let table = document.getElementById("studentTable");
            let row = table.insertRow(1); //insert row <tr> in the first position of the table
            
            let cell1 = row.insertCell(0); //insert cells <td> in the 1st to 3rd positions
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            
            cell1.innerHTML = personId;
            cell2.innerHTML = personName;
            cell3.innerHTML = personAge;
            cell4.innerHTML = personRole;

            console.log("excuteScript executed");
        }
        

        addUser();

    
        let orderedArray = Object.entries(users);
        console.log(`This is the orderedArray before the getOldest function: ${orderedArray}`);

        function getOldest() {
            // orderedArray = Object.entries(users);
            users.sort((a,b) => {
                if (a.age < b.age) {
                    return 1
                } else {
                    return -1
                }
            
                console.log(`This is the sorted "getUsers": ${users}`);
            })

            console.log(`This is the orderedArray after the getOldest function: ${orderedArray}`);

        }
        
        
       getOldest();



        

    })()

});