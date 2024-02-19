const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
//const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
//const insertY = ["the soup kitchen", "Disneyland", "the White House"];
//const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
const storyText = "A Enterprise encontra uma névoa musical que :insertx:. Data tenta decifrar a linguagem musical, enquanto Spock sente uma :inserty: com a melodia. A Dra. Crusher observa diferentes reações entre os membros da tripulação. A melodia é revelada como uma mensagem de :inserty: de uma civilização alienígena. A Enterprise estabelece contato :insertz:";
const insertX = ["emana uma melodia misteriosa", "encanta a tripulação com sua beleza", "se revela como uma arma alienígena"];
const insertY = ["paz", "raiva", "tristeza"];
const insertZ = ["com os alienígenas.", "com a frota.", "com as naves."];


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;  
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);  
    
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace(/Data/g, name);
        newStory = newStory.replace(/Martok/g, name);
    }

    if(document.getElementById("k").checked) {
        newStory = newStory.replace(/A Enterprise/g, "O cruzador de batalha Dahar Master");
        newStory = newStory.replace(/Spock/g, "Gowron");
        newStory = newStory.replace(/A Dra. Crusher/g, "Worf");
        newStory = newStory.replace(/Data/g, "Martok");
        

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}