alert("it working")


class user
{

firstname;
lastname;
balance;
customerid;

constructor(name1st, name2nd, bal, id)
{
this.firstname=name1st;
this.lastname=name2nd;
this.balance=bal;
this.customerid=id
}
}

function searchid()

{   alert('helloooooo')

    let customerid = document.querySelector('#customerid');

    let customid=customerid.value;

    for(let i=0; i<bankuser.length; i++)

    {
        if(customid==bankuser[i].customerid)

        {
            alert('you may now enter anamount to withdraw or make a deposit')
        }
    
        else
        {
            alert('The customerID you have entered is invalid, please try again.');
        }

        
    }
}

   




function withdraw()
{
    let number = document.querySelector('#withdrawamount');

    balance = bankuser[i].balance;

    amount= parseFloat(number.value)  

    let subtract = balance - amount
    
    return subtract
    

}

function deposit()
{

    let number = document.querySelector('#depositamount');
   
    balance = bankuser[i].balance;

    amount= parseFloat(number.value)  

    let sum = balance - amount
    
    return sum
}

function main()
{

    const lookupbutton = document.querySelector('#lookupcustomer');
    const withdrawbutton = document.querySelector('#withdrawbutton');
    const depositbutton = document.querySelector('#depositbutton')

    const bankuser=[];
    i=0;

    bankuser.push(new user('Bruce','Wayne',4000000.00, 'theboss'));
    bankuser.push(new user('Thanos','Badman',1000.00, 'infinityStones'));
    bankuser.push(new user('Wonder','Woman',500000.00, 'diana'));

    lookupbutton.addEventListener('click',searchid);


    withdrawbutton.addEventListener('click',withdraw);

    depositbutton.addEventListener('click',deposit);
}

main()
