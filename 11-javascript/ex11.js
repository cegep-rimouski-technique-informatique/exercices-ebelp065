function isPalindrome(string)
{
    for(let i = 0; i < string.length; i++)
    {
        if(string[i] != string[string.length-i-1])
        {
            return 0;
        }
    }
    return 1;
}

function fizzBuzz()
{
    for(let i = 1; i <= 100; i++)
    {
        if(i % 3 === 0)console.log("fizz")
        if(i % 5 === 0)console.log("buzz")
        else console.log(i)
    }
}

var liste = [0,1,2,3,4];

function trieDecroissant()
{
    let temp = 0;
    let a = 0;
    let b = 0;
    for(let i = 0; i < liste.length - 1; i++)
    {
        for(let j = 0; j < liste - 1; j++)
        {
            if(liste[j] < liste[j+1])
            {

                temp = liste[j+1];
                liste[j+1] = liste[j];
                liste[j] = temp;
            }
        }
    }
}

function phraseReverse(string)
{
    let string2 = "";
    let progress = 0;
    let combo = 0;
    for(let i = 0; i< string.length; i++)
    {
        if(string[i] >= 'a' && string[i] <= 'z' || string[i] >= 'A' && string[i] <= 'Z')
        {
            combo++;
        }
        else
        {
            for(let j = combo, k = 0; combo > 0; j--, k++)
            {
                string2.concat(string[progress + k] = string[progress + combo]);
            }
            progress += combo;
            combo = 0;
        }
    }
    return string2;
}

trieDecroissant();
console.log(liste)

mot = "kayak"

console.log("Est-ce un palindrome? : " + isPalindrome(mot));

var date1 = new Date('March 2, 1997');
var date2 = new Date('February 7, 2023');

let string3 = "Hello, man! Good... morning.";

string3 = phraseReverse.apply(null, string3);

for(let i = 0; i < string.length; i++)
{
    console.log(string3[i]);
}

console.log("Entre le " + date1 + " et le " + date2 + ", il s'est écoulé " + date1 - date2 + " jours.");